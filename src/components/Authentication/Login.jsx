import React, { useContext, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import loginImg from '../../assets/others/authentication1.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useEffect } from 'react';
import { AuthContext } from './AuthProvider';
import { Link, useLocation,useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const Login = () => {
  const {signIn}=useContext(AuthContext)
  const location=useLocation()
  const navigate=useNavigate()
   const from = location.state?.from?.pathname || "/"
  const {register,handleSubmit,reset,formState: { errors }}=useForm()
  const onSubmit=data=>{
    console.log(data)
    signIn(data.email,data.password)
    .then(result=>{
        Swal.fire({
        title: "SignUp successfully done!",
        icon: "success",
        draggable: true
      });
      reset()
      navigate(from)
      
    })
    .catch(error=>{
      Swal.fire({
  icon: "error",
  title: "Oops...",
  text: `Something went wrong!.${error.message}`
});
    })
  }
     const captcharef=useRef(null)
     const [disabled,setDisabled]=useState(true)
  useEffect(()=>{
 loadCaptchaEnginge(6);
  },[])
         const handlecaptcha=()=>{
       const user_captcha_value=captcharef.current.value;
       if(validateCaptcha(user_captcha_value)==true){
   setDisabled(false)
       }
       else{
        setDisabled(true)
       }
         }  
           
    return (
        <div>
             <Helmet>
            <title>Bistro| Login</title>
          </Helmet>
       
            <div className="hero min-h-screen">
              
  <div className="hero-content flex-col lg:flex-row-reverse gap-10">
   
    <div className=" lg:text-left">
    <img className='w-100'  src={loginImg} alt="" />
    </div>
    <div className="card bg-base-100  md:w-1/2 shadow-2xl">
         <h1 className='text-3xl font-bold text-center'>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <fieldset className="fieldset">
              
          <label className="label">Email</label>
          <input   {...register('email',{ required: true })} name='email'  type="email" className="input" placeholder="Email" />
           {errors.email && <p>email is required.</p>}
          <label className="label">Password</label>
          <input  {...register('password')} type="password" name='password' className="input" placeholder="Password" />
          <label className='mt-2'>
        <LoadCanvasTemplate />
           </label>
        
          <input type="text" name='captcha' className="input" ref={captcharef} placeholder="Type the valid captcha above" />
          <button type='button' onClick={handlecaptcha}  className='btn btn-outline btn-xs mt-2 uppercase'>Check</button>
          <button disabled={disabled} className="btn btn-neutral mt-4">Login</button>
          <p className='mx-auto'>Here You new? <Link className='underline' to={'/register'}>SignUp</Link></p>
        </fieldset>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;