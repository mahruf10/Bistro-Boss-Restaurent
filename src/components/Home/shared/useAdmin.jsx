import { useContext } from "react"
import { AuthContext } from "../../Authentication/AuthProvider"
import useAxiosSecure from "./useAxiosSecure"
import { useQuery } from "@tanstack/react-query"

const useAdmin=()=>{
    const {user,loading}=useContext(AuthContext)
    const axiosSecure=useAxiosSecure()
const {data: isAdmin,isLoading}=useQuery({
    queryKey:[user?.email,'isAdmin'],
    enabled:!loading,
    queryFn:async()=>{
        const res=await axiosSecure.get(`/users/admin/${user.email}`)
        return res.data?.admin
    }
    
})
return [isAdmin,isLoading]
}
export default useAdmin;