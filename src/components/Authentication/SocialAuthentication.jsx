import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import Swal from 'sweetalert2';
import { FaGoogle } from 'react-icons/fa6';
import useAxiosPublic from '../Home/shared/useAxiosPublic';
import { useNavigate } from 'react-router-dom';

const SocialAuthentication = () => {
    const {googleAuthentication}=useContext(AuthContext)
    const AxiosPublic=useAxiosPublic()
    const navigate=useNavigate()
    const handlesign=()=>{
    googleAuthentication()
    .then((result)=>{
            const userinfo={
            email:result.user?.email,
            name:result.user?.displayName
        }
               AxiosPublic.post('/users',userinfo)
        .then(result=>{
            // console.log(result.data)
        })
          Swal.fire({
          title: "Sign successfully complete!",
          icon: "success",
          draggable: true
        });
        navigate('/')
    })
    }
    return (
        <div className='ml-10 flex items-center gap-2'>
            <FaGoogle></FaGoogle>
            <button onClick={handlesign} className='btn'>SignWith Google</button>
        </div>
    );
};

export default SocialAuthentication;