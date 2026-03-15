import React, { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
export const AuthContext=createContext(null)
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateCurrentUser,signOut, updateProfile  } from "firebase/auth";
import { auth } from '../../../firebase.config';
const AuthProvider = ({children}) => {
    // const auth = getAuth();
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

    const signUp=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
  const signIn=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }
  const logOut=()=>{
    return signOut(auth)
  }
  useEffect(()=>{
  const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
  setUser(currentUser)
  setLoading(false)
  })
  return ()=>unsubscribe();
  },[])
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
     updateUserProfile
    }
    return (
       <AuthContext.Provider value={authInfo}>
{children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;