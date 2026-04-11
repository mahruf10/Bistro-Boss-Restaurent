import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../Home/shared/useAxiosSecure';
import useCart from '../Home/shared/useCart';
import { AuthContext } from '../Authentication/AuthProvider';
import Swal from 'sweetalert2';

const CheckOut = () => {
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [error, setError] = useState('');
    const [cart, , refetch] = useCart(); // ✅ grab refetch to clear cart after payment
    const { user} = useContext(AuthContext);
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    useEffect(() => {
        if (totalPrice > 0) { // ✅ avoid creating intent for empty/zero cart
            axiosSecure.post('/create-checkout-intent', { price: totalPrice })
                .then(res => {
                    setClientSecret(res.data.clientSecret);
                });
        }
    }, [axiosSecure, totalPrice]);
  

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) return;

        const card = elements.getElement(CardElement);
        if (card == null) return;

        const { error: methodError, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (methodError) {
            setError(methodError.message); // ✅ renamed to avoid shadowing state
            return;
        }

        // console.log('payment method:', paymentMethod);
        setError('');

        // ✅ Fixed: destructure lowercase 'error', not 'Error'
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card,
                billing_details: {
                    name: user.displayName,
                    email: user.email,
                },
            },
        });

        if (confirmError) {
            console.log('Confirmation error:', confirmError);
            setError(confirmError.message); // ✅ now actually catches confirmation errors
            return;
        }

        console.log('Payment intent:', paymentIntent);

        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            Swal.fire({
                      title: `Thank You ${user.displayName} for Payment....`,
                      icon: "success",
                      draggable: true
                    });

            const payment = {
                email: user.email,
                name:cart.map(item=>item.name),
                price: totalPrice,
                cartIds: cart.map(item => item._id),
                menuIds: cart.map(item => item.itemId),
                transactionId: paymentIntent.id,
                status: 'pending',
                date: new Date(),
            };

            axiosSecure.post('/payment', payment)
                .then(res => {
                    // console.log(res.data);
                    if (res.data?.insertedId) {
                        refetch(); // ✅ clear the cart from UI after payment recorded
                    }
                });
        }
    }; // ✅ Fixed: else block is now properly closed

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': { color: '#aab7c4' },
                            },
                            invalid: { color: '#9e2146' },
                        },
                    }}
                />
                <button
                    className='btn btn-sm btn-primary my-3'
                    type="submit"
                    disabled={!stripe || !clientSecret}
                >
                    Pay
                </button>
                <p className='text-red-600'>{error}</p>
                {transactionId && (
                  <div className="badge badge-dash ">Your transaction Id: <span className='text-green-600'> {transactionId} </span> </div>
                )}
            </form>
        </div>
    );
};

export default CheckOut;