import axios from 'axios';
import React from 'react';
 const authAxiosPublic=axios.create({
    baseURL: 'https://bistro-server-dusky.vercel.app'
})
const useAxiosPublic = () => {
  return authAxiosPublic;
};

export default useAxiosPublic;