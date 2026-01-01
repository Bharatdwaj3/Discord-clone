import React from 'react'
import {Navigate, useLocation} from 'react-router-dom';
import {useSelector} from "react-redux";

const protectedRoute = ({children, allowedRoles=[]}) => {
    const{isAuthenticated, user, loading}=useSelector((state)=>state.auth);
    const location=useLocation();

    if(loading){
        return (
            <div className='flex justify-center items-center items-center h-screen'>Loading...</div>
            
        )
    }

    if(!isAuthenticated){
        return (
            <Navigate to="/login" state={{from: location}} replace></Navigate>    
        )
    }

    if(allowedRoles.length > 0 && !allowedRoles.includes(user?.role)){
        return (
            <Navigate to="/" replace/>
        )
    }

    return children
}

export default protectedRoute