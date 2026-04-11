import MenuItems from "../Home/MenuItems";
import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { AuthContext } from "../Authentication/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import useAxiosSecure from "../Home/shared/useAxiosSecure";
import useCart from "../Home/shared/useCart";
const FoodCard = ({item}) => {
  const Authaxios=useAxiosSecure()
  const[,refetch]=useCart()
  const {user}=useContext(AuthContext)
  const location=useLocation()
  const navigate=useNavigate()
   const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  const handleorder=order=>{
      const cartItems={
    itemId:order._id,
    userEmail:user?.email,
    name: order.name,
    image: order.image,
    price: order.price

  }
    // console.log(order);
    if(user && user?.email){
      Authaxios.post('/carts',cartItems)
      .then(res=>{
       Swal.fire(`${order.name} is added to the cart`);
      })
      refetch()

    }else{
        Swal.fire({
  title: "User SignOut",
  text: "You have to signIn for Order",
  icon: "error",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes,Sign In"
}).then((result) => {
  if (result.isConfirmed) {
    navigate('/login', {state:{from:location}})
  }
});
    }
  
  }
    return (
        <div>

   <div>
 <div className='grid md:grid-cols-3 gap-5'>
       {
        item.map(items=>
              <div className="card bg-base-100 shadow-sm h-112">
       <figure className="px-10 pt-10 relative">
         <img
         
           src={items.image}
           alt="item"
           className="rounded-xl" />
       </figure>
       <p className="bg-slate-900 absolute right-0 mt-12 mr-12  px-1 ">${items.price}</p>
       <div className="card-body items-center text-center">
         <h2 className="card-title">{items.name}</h2>
         <p>{items.recipe}</p>
         <div className="card-actions">
           <button onClick={()=>handleorder(items)} className="btn btn-outline border-0 border-b-4">Order Now</button>
         </div>
       </div>
     </div>
        )
    }
         </div>

            
    </div>
        </div>
      
    );
};

export default FoodCard;