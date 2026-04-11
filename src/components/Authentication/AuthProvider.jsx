import React, { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
export const AuthContext=createContext(null)
import {createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword,signInWithPopup,signOut, updateProfile  } from "firebase/auth";
import { auth } from '../../../firebase.config';
import useAxiosPublic from '../Home/shared/useAxiosPublic';
const AuthProvider = ({children}) => {
    // const auth = getAuth();
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
      const provider=new GoogleAuthProvider() 
      const axiosPublic=useAxiosPublic()
    const signUp=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
  const signIn=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }
  const googleAuthentication=()=>{
    return signInWithPopup(auth,provider)
  }
  const logOut=()=>{
    return signOut(auth)
  }
  
  useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser); // আগেই user সেট করো

    if (currentUser) {
      const userinfo = { email: currentUser?.email };

      axiosPublic.post('/jwt', userinfo)
        .then(res => {
          if (res.data.token) {
            localStorage.setItem('access-token', res.data.token);
          }
        })
        .finally(() => {
          setLoading(false); // ✅ token আসার পরেই loading false
        });

    } else {
      localStorage.removeItem('access-token');
      setLoading(false); // ✅ logout হলে সাথে সাথে false
    }
  });

  return () => unsubscribe();
}, [axiosPublic]);
  const updateUserProfile=(name,photo)=>{
    return updateProfile(auth.currentUser,{
      displayName:name,
      photoURL:photo
    })
  }
    const authInfo={
     user,
     loading,
     signIn,
     signUp,
     logOut,
     updateUserProfile,
     googleAuthentication
    }
    return (
       <AuthContext.Provider value={authInfo}>
{children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;