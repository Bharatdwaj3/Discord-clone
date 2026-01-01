
import {createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        user: null,
        loading: true,
    },
    reducers: {
        setAuthUser: (state, action)=>{
            state.isAuthenticated=true;
            state.user=action.payload;
            state.loading=false;
        },
        logout: (state)=>{
            state.isAuthenticated=false;
            state.user=null;
            state.loading=false;
        },
        setLoading:(state, action)=>{
            state.loading=action.payload;
        },
    },
});

export const {setAuthUser, logout, setLoading}=authSlice.actions;
export default authSlice.reducer;