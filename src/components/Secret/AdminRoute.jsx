import React, { useContext } from 'react';
import { Navigate,useLocation } from 'react-router-dom';
import { AuthContext } from '../Authentication/AuthProvider';
import useAdmin from '../Home/shared/useAdmin';

const AdminRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
     const [isAdmin,isLoading]=useAdmin()
    const location=useLocation() 
    // console.log(location);
    if(loading || isLoading){
        return <p>please Wait </p>
    }
    if(user && isAdmin){
        return children;
    }
    return (
       
            <Navigate to='/' state={{from:location}}></Navigate>
        
    );
};

export default AdminRoute;