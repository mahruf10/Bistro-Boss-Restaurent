import { useForm } from "react-hook-form"
import { FaUtensils } from 'react-icons/fa6'

const img_hosting_key = import.meta.env.VITE_IMG_HOSTING_KEY
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`
import useAxiosPublic from "../../shared/useAxiosPublic"
import useAxiosSecure from "../../shared/useAxiosSecure"
import Swal from "sweetalert2"
const AddItems = () => {
  const { register, handleSubmit } = useForm()
   const axiosPublic=useAxiosPublic()
   const axiosSecure=useAxiosSecure()
  const onSubmit = async (data) => {
    // console.log(data)
    const imgFile = { image: data.image[0] }
    const res = await axiosPublic.post(img_hosting_api, imgFile, {
      headers: { 'content-type': 'multipart/form-data' }
    })
    if(res.data.success){
      const menuInfo={
        name:data.name,
        category:data.category,
        price:parseFloat(data.price),
        image:res.data.data.display_url
      }
      const menuRes=await axiosSecure.post('/menu',menuInfo)
      if(menuRes.data.insertedId){
        Swal.fire({
        title: `${data.name} is successfully added.`,
        icon: "success",
        draggable: true
      });
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-xl border border-gray-200 rounded-2xl p-8 shadow-sm">

        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center">
            <FaUtensils className="text-white text-sm" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Add Menu Item</h2>
            <p className="text-xs text-gray-400">Fill in the details to add a new dish</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          {/* Item Name */}
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wider">Item Name</label>
            <input
              {...register("name")}
              type="text"
              placeholder="e.g. Margherita Pizza"
              className="w-full px-3.5 py-2.5 text-sm text-gray-800 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:bg-white focus:border-gray-400 transition placeholder:text-gray-300"
            />
          </div>

          {/* Category + Price */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wider">Category</label>
              <select
                {...register("category")}
                className="w-full px-3.5 py-2.5 text-sm text-gray-800 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:bg-white focus:border-gray-400 transition appearance-none cursor-pointer"
              >
                <option value="">Pick a category</option>
                <option>Salad</option>
                <option>Pizza</option>
                <option>Soup</option>
                <option>Dessert</option>
                <option>Drinks</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wider">Price</label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-gray-400">$</span>
                <input
                  {...register("price")}
                  type="number"
                  
                  placeholder="0.00"
                  className="w-full pl-7 pr-3.5 py-2.5 text-sm text-gray-800 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:bg-white focus:border-gray-400 transition placeholder:text-gray-300"
                />
              </div>
            </div>
          </div>

          {/* Recipe */}
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wider">Recipe</label>
            <textarea
              {...register("recipe")}
              rows={3}
              placeholder="Describe ingredients and preparation…"
              className="w-full px-3.5 py-2.5 text-sm text-gray-800 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:bg-white focus:border-gray-400 transition placeholder:text-gray-300 resize-none leading-relaxed"
            />
          </div>

          {/* Image */}
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wider">Image</label>
            <input
              {...register("image")}
              type="file"
              accept="image/*"
              className="w-full text-sm text-gray-500 bg-gray-50 border border-gray-200 rounded-lg file:mr-3 file:py-2 file:px-4 file:border-0 file:text-xs file:font-medium file:bg-gray-900 file:text-white file:rounded-lg file:cursor-pointer hover:file:bg-gray-700 transition cursor-pointer"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-2.5 mt-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-700 active:scale-95 transition-all duration-150"
          >
            <FaUtensils className="text-xs" />
            Add Item
          </button>

        </form>
      </div>
    </div>
  )
}

export default AddItems