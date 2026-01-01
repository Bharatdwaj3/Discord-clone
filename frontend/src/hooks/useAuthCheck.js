import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {setAuthUser, logout, setLoading} from "../store/authSlice";
import axios from "axios";

const useAuthCheck = () => {
  
  const dispatch=useDispatch();
  useEffect(()=>{
    const checkAuth=async()=>{
      try{
        const res=await axios.get("http://localhost:5008/api/user/me",{
        withCredentials:true,
      });
      dispatch(setAuthUser(res.data.user));
    }catch(err){
      console.error("Auth check failed:",err);
      dispatch(logout());
      }finally{
        dispatch(setLoading(false));
      }
    };
    checkAuth();
  },[dispatch]);
};

export default useAuthCheck