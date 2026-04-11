import React, { useContext } from 'react';
import signupImg from '../../assets/others/authentication2.png'
import { Helmet } from 'react-helmet-async';
import { AuthContext } from './AuthProvider';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialAuthentication from './SocialAuthentication';

import useAxiosPublic from '../Home/shared/useAxiosPublic';
const SignUp = () => {
      const axiosPublic=useAxiosPublic() 
    const {signUp,updateUserProfile}=useContext(AuthContext)
    const {register,handleSubmit,reset,formState: { errors }}=useForm()
    const onSubmit=data=>{
    // console.log(data)
    signUp(data.email,data.password)
    .then(result=>{
        const userInfo={
            name:data.name,
            email:data.email,
            image:data.photo
        }
      axiosPublic.post('/users',userInfo)
     Swal.fire({
  title: "SignUp successfully done!",
  icon: "success",
  draggable: true
});
      updateUserProfile(data.name,data.photo)
      .then(()=>{
       
         reset()
      })
      .catch(error=>console.log(error.message))
    })
  }
    return (
        <div>
            <Helmet>
                <title>Bistro| SignUp</title>
            </Helmet>

            <div className="hero min-h-screen">

                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className=" lg:text-left">
                        <img className='w-100' src={signupImg} alt="" />
                    </div>
                    <div className="card bg-base-100  md:w-1/2 shadow-2xl">
                        <h1 className='text-3xl font-bold text-center'>SignUp</h1>
                        <form onSubmit={handleSubmit(onSubmit)}  className="card-body">
                            <fieldset className="fieldset">

                                <label className="label">Name</label>
                                <input   {...register('name',{ required: true })} type="text" className="input" placeholder="Name" />
                                {errors.name && <p className='text-red-500'>Name is required.</p>}
                                <label className="label">Photo URL</label>
                                <input   {...register('photo',{ required: true })} type="url" className="input" placeholder="Name" />
                                {errors.photo && <p className='text-red-500'>photo is required.</p>}
                                <label className="label">Email</label>
                                <input {...register('email')}  type="email" className="input" placeholder="Email" />
                                {errors.email && <p className='text-red-500'>email is required.</p>}
                                <label className="label">Password</label>
                                <input {...register('password')} type="password" className="input" placeholder="Password" />

                                <button className="btn btn-neutral mt-4">SignUp</button>
                                <p>Already Have an account? <Link className='underline' to={'/login'}>Sign In</Link></p>
                            </fieldset>
                         <div className='divider'></div>
                            <SocialAuthentication></SocialAuthentication>
                        </form>
                         
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;