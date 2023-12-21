import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../../Provider/AuthContext';



const AuthRoute = ({children}) => {
  const {user,loading} = useContext(authContext);
    console.log(loading);
    if(loading){
        return <div className='flex justify-center  items-center align-middle py-20'>
           <h1>Loading...</h1>
        </div>
      }
    const location = useLocation();
    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    return children
};

export default AuthRoute;