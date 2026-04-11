import React from 'react';
import SectionTitle from '../Home/Section/SectionTitle';
import { Elements, PaymentElement } from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckOut from './CheckOut';
const Payment = () => {
    const stripePromise=loadStripe(import.meta.env.VITE_PAYMENT_KEY)
    return (
        <div>
            <SectionTitle heading={'payment'} subheading={'please payment to eat'}></SectionTitle>
            <div>
               <Elements stripe={stripePromise}>
              <CheckOut></CheckOut>
               </Elements>
            </div>
        </div>
    );
};

export default Payment;