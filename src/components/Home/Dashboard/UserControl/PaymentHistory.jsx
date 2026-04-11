import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Authentication/AuthProvider';
import useAxiosSecure from '../../shared/useAxiosSecure';

const PaymentHistory = () => {
    const {user}=useContext(AuthContext)
    const axiosSecure=useAxiosSecure()
    const{data:payment=[]}=useQuery({
        queryKey:['payments',user.email],
        queryFn:async()=>{
           const res=await axiosSecure.get(`/payment/${user.email}`)
         return res.data
        } 
    })
    return (
        <div>
            <h2>total payment:{payment.length}</h2>
            <div>
                  <table className="table">
                            {/* head */}
                            <thead>
                              <tr>
                                <th>#</th>
                               
                                <th>Item Name</th>
                                <th>Status</th>
                                <th>Total Price</th>
                                <th>PaymentDate</th>
                                <th>TransactionId</th>
                              </tr>
                            </thead>
                            <tbody>
                                {
                                    payment.map((item,index)=>(
                                        <>
                                        <tr>
                                <th>{index+1}</th>
                                
                                <td>{item.name}</td>
                                <td>{item.status}</td>
                                <td> ${item.price}</td>
                                <td>{item.date}</td>
                                <td>{item.transactionId}</td>
                              </tr>
                                        </>
                                 
                                    ))
                                }
                        
                            </tbody>
                          </table>
            </div>
        </div>
    );
};

export default PaymentHistory;