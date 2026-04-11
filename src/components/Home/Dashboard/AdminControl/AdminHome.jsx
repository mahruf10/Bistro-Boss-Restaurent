import React, { useContext } from 'react';
import { AuthContext } from '../../../Authentication/AuthProvider';
import useAxiosSecure from '../../shared/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaBook, FaDollarSign, FaShippingFast, FaUsers } from 'react-icons/fa';
const AdminHome = () => {
    const {user,loading}=useContext(AuthContext)
         const axiosSecure=useAxiosSecure()
         const {data:stats,isLoading}=useQuery({
            queryKey:['admin-stats'],
            queryFn:async()=>{
         const res=await axiosSecure.get('/admin-stats')
         return res.data
            }
         })
         if(isLoading){
            return <span className="loading loading-spinner loading-xl"></span>
         }
        //  console.log(stats)
            return (
                <div>
                    <h2>Hi welcome <span>  {
                        user ? user.displayName:'Back'
                 }</span> </h2>
                  
                  <div>
                    <div className="stats stats-vertical lg:stats-horizontal shadow gap-5">
      <div className="stat">
        <div className="stat-title">Revenue</div>
        <div className="stat-value flex gap-3 items-center">${stats?.revenue} <FaDollarSign></FaDollarSign> </div>
        {/* <div className="stat-desc">Jan 1st - Feb 1st</div> */}
      </div>
    
      <div className="stat">
        <div className="stat-title"> Users</div>
        <div className="stat-value flex gap-3 items-center">{stats?.users}<FaUsers></FaUsers></div>
        {/* <div className="stat-desc">↗︎ 400 (22%)</div> */}
      </div>
      <div className="stat">
        <div className="stat-title"> Menu Items</div>
        <div className="stat-value flex gap-3 items-center">{stats?.item}<FaBook></FaBook></div>
        {/* <div className="stat-desc">↗︎ 400 (22%)</div> */}
      </div>
    
      <div className="stat">
        <div className="stat-title">Orders</div>
        <div className="stat-value flex gap-3 items-center">{stats?.orders} <FaShippingFast></FaShippingFast></div>
        {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
      </div>
    </div>
                  </div>
                </div>
            );
    };

export default AdminHome;