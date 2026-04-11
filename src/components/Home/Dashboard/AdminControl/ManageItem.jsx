import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../Section/SectionTitle";
import useMenu from "../../shared/usemenu";
import useAxiosSecure from "../../shared/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const ManageItem=()=>{
  const axiosSecure=useAxiosSecure()
    const [menu,,refetch]=useMenu()
    const navigate=useNavigate()
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
              axiosSecure.delete(`/menu/${id}`)
              .then( result=>{
                if(result.data.deletedCount > 0){
                   refetch() 
               Swal.fire({
              title: "Deleted!",
              text: "Your item has been deleted.",
              icon: "success"
            });
                }
              })
          }
          
        });
    }
  const handleEdit=(item)=>{
//  axiosSecure.patch(`/editItem/${item._id}`)
//   .then(res=>{
//          if(res.data.modifiedCount > 0){
             
//                Swal.fire({
//        title: "Updated!",
//        text: `${item.name} is successfully update.`,
//        icon: "success"
//      });
//      refetch()
//          }
//      })

navigate(`/dashboad/editItem/${item._id}`,{state: {item}})
  }
    return (
        <div>
  <SectionTitle heading='manage item' subheading='whats up'>  </SectionTitle>

  <div className="overflow-x-auto rounded-box  border border-base-content/5 bg-base-100">
   <table className="table">
     {/* head */}
     <thead>
       <tr>
         <th></th>
         <th>Img</th>
         <th>Name</th>
         <th>Price</th>
         <th>Edit</th>
         <th>Delete</th>
       </tr>
     </thead>
     <tbody>
         {
             menu.map((item,index)=>(
          <tr>
         <th>{index+1}</th>
         <td><div  className="mask  h-12 w-12"><img className='rounded-xl' src={item.image} alt="" /></div></td>
         <td>{item.name}</td>
         <td>${item.price}</td>
         <td> <button className="btn btn-ghost text-xl"> <FaEdit onClick={()=>handleEdit(item)} className='text-red-500'></FaEdit> </button></td>
         <td><button className="btn btn-ghost text-xl"> <FaTrashAlt onClick={()=>handleDelete(item._id)} className='text-red-500'></FaTrashAlt> </button></td>
       </tr>
             ))
         }
 
     </tbody>
   </table>
 </div>
        </div>
    )
}
export default ManageItem;