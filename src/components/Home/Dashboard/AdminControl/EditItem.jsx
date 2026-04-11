import React from 'react';
import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../shared/useAxiosSecure';
import Swal from "sweetalert2"
const EditItem = () => {
    const {state}=useLocation()
    const Item=state?.item
     const axiosSecure=useAxiosSecure()
  const{register,handleSubmit,reset}=useForm({
  defaultValues:{
    name:Item?.name,
    category:Item?.category,
    price:Item?.price,
    recipe:Item?.recipe,
  }

  })
  const onSubmit=async(item)=>{
   const updatedValue={
  name:item.name,
   category:item.category,
    price:parseFloat(item.price),
    recipe:item.recipe,
    };
     try {
        
      const res = await axiosSecure.patch(`/menu/${Item._id}`, updatedValue)
      // console.log('Response:', res.data)        // server কী বলছে
      reset()
      if(res.data.modifiedCount > 0){
        Swal.fire({
          title: `${item.name} is successfully updated.`,
          icon: "success",
          draggable: true
        });
      }
    } catch(error) {
      console.log('Error:', error)              // error আসলে দেখাবে
    }
}
    return (
        <div>
              <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto mt-10 p-8 bg-white rounded-xl shadow-md flex flex-col gap-4">
  <h2 className="text-2xl font-bold text-center text-orange-500 mb-2">Edit Item</h2>

  <div className="flex flex-col gap-1">
    <label className="text-sm font-semibold text-gray-600">Name</label>
    <input
      {...register('name')}
      placeholder="Item name"
      className="border border-gray-300 rounded-lg px-4 text-black py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
    />
  </div>

  <div className="flex flex-col gap-1">
    <label className="text-sm font-semibold text-gray-600">Category</label>
    <input
      {...register('category')}
      placeholder="Category"
      className="border border-gray-300 text-black rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
    />
  </div>

  <div className="flex flex-col gap-1">
    <label className="text-sm font-semibold text-gray-600">Price</label>
    <input
      {...register('price')}
      placeholder="Price"
      type="number"
      className="border border-gray-300 text-black rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
    />
  </div>

  <div className="flex flex-col gap-1">
    <label className="text-sm font-semibold text-gray-600">Recipe</label>
    <textarea
      {...register('recipe')}
      placeholder="Recipe details"
      rows={4}
      className="border border-gray-300 text-black rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
    />
  </div>

  <button
    type="submit"
    className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 rounded-lg transition duration-200 mt-2"
  >
    Update Item
  </button>
</form>
        </div>
    );
};

export default EditItem;