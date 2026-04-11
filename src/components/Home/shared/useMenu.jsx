import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import useAxiosPublic from './useAxiosPublic';
 const useMenu = () => {
//   const [menu,setMenu]=useState([])
  const [loading,setLoading]=useState(true)
  const axiosPublic=useAxiosPublic()
//     useEffect(()=>{
//         fetch('../../../../menu.json')
//         .then(res=>res.json())
//         .then(data=>{
//             setMenu(data)
//             setLoading(false)
//         })
// },[])
const {data: menu=[],isLoading,refetch}=useQuery({
    queryKey:['menu'],
    queryFn:async()=>{
     const res=await axiosPublic.get('/menu')
     return res.data
      }
}  
)
return [menu,isLoading,refetch]

    // return {menu,loading}
};

export default useMenu;