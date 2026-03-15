import React, { useContext } from 'react';
import { Navigate,useLocation } from 'react-router-dom';
import { AuthContext } from '../Authentication/AuthProvider';

const SecretRouter = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location=useLocation() 
    console.log(location);
    if(loading){
        return <p>please Wait </p>
    }
    if(user){
        return children;
    }
    return (
       
            <Navigate to='/login' state={{from:location}}></Navigate>
        
    );
};

export default SecretRouter;