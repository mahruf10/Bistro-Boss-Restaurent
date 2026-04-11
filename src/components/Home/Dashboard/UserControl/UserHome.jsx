import React, { useContext } from 'react';
import { AuthContext } from '../../../Authentication/AuthProvider';

const UserHome = () => {
     const {user}=useContext(AuthContext)
     
        return (
            <div>
                <h2 className='text-3xl text-center my-10 text-blue-600/50 dark:text-sky-400/75'>Hi welcome <span>  {
                    user ? user.displayName:'Back'
             }</span> </h2>
              <p className='text-2xl text-center'>We will update Your Profile.</p>
            </div>
        );
};

export default UserHome;