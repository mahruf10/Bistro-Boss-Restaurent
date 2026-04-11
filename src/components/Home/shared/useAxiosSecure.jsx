import axios from 'axios';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Authentication/AuthProvider';

const authAxios = axios.create({
  baseURL: 'https://bistro-server-dusky.vercel.app'
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useContext(AuthContext);

  useEffect(() => {
    // Request interceptor
    const requestInterceptor = authAxios.interceptors.request.use(
      function (config) {
        const token = localStorage.getItem('access-token');
        config.headers.authorization = token;
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );

    // Response interceptor
    const responseInterceptor = authAxios.interceptors.response.use(
      (response) => response,
      (error) => {
        const status = error.response?.status;
        if (status === 401 || status === 403) {
          logOut();
          navigate('/login');
        }
        return Promise.reject(error);
      }
    );

    // Cleanup — component unmount হলে interceptor সরিয়ে দাও
    return () => {
      authAxios.interceptors.request.eject(requestInterceptor);
      authAxios.interceptors.response.eject(responseInterceptor);
    };
  }, [navigate, logOut]);

  return authAxios;
};

export default useAxiosSecure;