import React, { useContext } from 'react';
import useCart from '../Home/shared/useCart';
import { AuthContext } from '../Authentication/AuthProvider';
import { FaBox,FaTrash } from 'react-icons/fa6';
import useAxiosSecure from '../Home/shared/useAxiosSecure';
import Swal from 'sweetalert2';

const Cart = () => {
    const [cart,refetch]=useCart()
    const {loading}=useContext(AuthContext)
    const totalprice=cart.reduce((total,item)=>total + item.price ,0)
    const axiosSecure=useAxiosSecure()
    if(loading){
        return <p>please wait...</p>
    }
    const handleDelete=(id)=>{
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
      .then( result=>{
        if(result.data.deletedCount > 0){
           refetch() 
       Swal.fire({
      title: "Deleted!",
      text: "Your cart has been deleted.",
      icon: "success"
    });
        }
         
      })
    
  }
  
});
      

    }
    return (
        <div>
            <div className='flex justify-between p-10'>
                <h2 className='text-3xl'>My Order:{cart.length}</h2>
                <h2 className='text-3xl'>Total Price: ${totalprice}</h2>
                <button className='btn bg-[#D1A054]'>
                    Pay
                </button>
            </div>
            <div className='p-3'>
                <div className="overflow-x-auto rounded-box  border border-base-content/5 bg-base-100">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Img</th>
        <th>Name</th>
        <th>Price</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
        {
            cart.map((carts,index)=>(
         <tr>
        <th>{index+1}</th>
        <td><div  className="mask  h-12 w-12"><img className='rounded-xl' src={carts.image} alt="" /></div></td>
        <td>{carts.name}</td>
        <td>${carts.price}</td>
        <td><FaTrash onClick={()=>handleDelete(carts._id)} className='text-red-500'></FaTrash></td>
      </tr>
            ))
        }

    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default Cart;