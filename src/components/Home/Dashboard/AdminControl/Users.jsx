import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../shared/useAxiosSecure";
import { FaTrash,FaUsers } from "react-icons/fa6";
import Swal from 'sweetalert2';
const Users = () => {
    const AxiosSecure =useAxiosSecure()
    const {data: user=[],refetch}=useQuery({
        queryKey:['users'],
        queryFn:async()=>{
            const res=await AxiosSecure.get('/users')
            // console.log(res.data)
            return res.data
        } 
        
    }
)
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
      AxiosSecure.delete(`/users/${id}`)
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
 const handleMakeAdmin=(user)=>{
    AxiosSecure.patch(`/users/admin/${user._id}`)
   
 }
    // console.log(user)
    return (
        <div>
            <div className="flex justify-evenly">
                <h2 className="text-3xl">All users:{user.length}</h2>
            <h2 className="text-3xl">users</h2></div>

        <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
               
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
                {
                    user.map((user,index)=>(
                        <>
                        <tr>
                <th>{index+1}</th>
                
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                    {
                        user.role==='admin' ? "Admin" :<button onClick={()=>handleMakeAdmin(user)} className='btn bg-orange-500'> <FaUsers></FaUsers> </button>
                    }
                   </td>
                <td><FaTrash onClick={()=>handleDelete(user._id)} className='text-red-500'></FaTrash></td>
              </tr>
                        </>
                 
                    ))
                }
        
            </tbody>
          </table>
            
        </div>
    );
};

export default Users;