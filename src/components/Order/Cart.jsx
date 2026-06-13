import React, { useContext } from 'react';
import useCart from '../Home/shared/useCart';
import { AuthContext } from '../Authentication/AuthProvider';
import { FaTrash } from 'react-icons/fa6';
import useAxiosSecure from '../Home/shared/useAxiosSecure';
import Swal from 'sweetalert2';
import SectionTitle from '../Home/Section/SectionTitle';
import { Link } from 'react-router-dom';

const Cart = () => {
    const [cart, refetch] = useCart();
    const { loading } = useContext(AuthContext);
    const totalprice = cart.reduce((total, item) => total + item.price, 0);
    const axiosSecure = useAxiosSecure();

    if (loading) return <p>please wait...</p>;

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(result => {
                        if (result.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({ title: "Deleted!", text: "Your cart has been deleted.", icon: "success" });
                        }
                    });
            }
        });
    };

    return (
        <div className="px-4 py-6">
            <SectionTitle heading='my cart' subheading={'try this'} />

            {/* Summary bar */}
            <div className='flex flex-wrap items-center justify-between gap-4 mb-6 p-4 sm:p-6 bg-base-200 rounded-xl'>
                <h2 className='text-lg sm:text-2xl font-bold'>Orders: {cart.length}</h2>
                <h2 className='text-lg sm:text-2xl font-bold'>Total: ${totalprice.toFixed(2)}</h2>
                {cart.length
                    ? <Link to='/dashboad/payment'>
                        <button className='btn bg-[#D1A054] border-0 text-white'>Pay Now</button>
                      </Link>
                    : <button className='btn btn-disabled'>Pay Now</button>
                }
            </div>

            {/* Table */}
            <div className="overflow-x-auto rounded-xl border border-base-200 shadow-sm">
                <table className="table table-zebra w-full">
                    <thead className="bg-base-200">
                        <tr>
                            <th>#</th>
                            <th>Img</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item, index) => (
                            <tr key={item._id} className="hover">
                                <th>{index + 1}</th>
                                <td>
                                    <img className='h-12 w-12 rounded-xl object-cover' src={item.image} alt={item.name} />
                                </td>
                                <td className="whitespace-nowrap">{item.name}</td>
                                <td className="whitespace-nowrap">${item.price}</td>
                                <td>
                                    <button onClick={() => handleDelete(item._id)} className='btn btn-ghost text-red-500 text-lg'>
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;