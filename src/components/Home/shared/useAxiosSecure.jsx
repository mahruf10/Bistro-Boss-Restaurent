import axios from 'axios';
import React from 'react';
 const authAxios=axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxiosSecure = () => {
  return authAxios;
};

export default useAxiosSecure;