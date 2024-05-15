import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Component/Helper/Helper";
import { toast } from "react-toastify";

export const fetchregister=createAsyncThunk("/user/signup",async(formdata)=>{
    const response=await axiosInstance.post("/user/signup",formdata)
    return response.data
    
})

export const login=createAsyncThunk("/user/signin",async(formdata)=>{
    const response=await axiosInstance.post("/user/signin",formdata)
    return response.data
})
const AuthSlice=createSlice({
    name:"registration",
    initialState:{
        status:"idle",
        redirectTo:null,
        isloggedIn:false
    },
    reducers:{
        reset_redirectTo:(state,{payload})=>{
            state.redirectTo=payload
        },
        handleLoggedout:(state,{payload})=>{
            localStorage.removeItem("token");
            state.isloggedIn=false
            toast("Logout succesfull")
        },
        check_token:(state,{payload})=>{
            let token=localStorage.getItem("token")
            if(token!==null && token!==undefined){
                state.isloggedIn=true
            }
        }

    },

    extraReducers:(builder)=>{
       builder.addCase(fetchregister.pending,(state)=>{
        state.status="loading"
       })
       builder.addCase(fetchregister.fulfilled,(state,action)=>{
        state.status="idle"
        if(action.payload?.status===200){
            toast(action.payload?.message)
        }
       })
       builder.addCase(fetchregister.rejected,(state,action)=>{
        state.status="idle"

       })
       builder.addCase(login.pending,(state)=>{
        state.status="loading"
       })
       builder.addCase(login.fulfilled,(state,action)=>{
        state.status="idle"
        if(action.payload?.status===200){
            state.redirectTo="/"
            toast(action.payload?.message)
            localStorage.setItem("token",action.payload?.token)
            state.isloggedIn=true
        }
       })
       builder.addCase(login.rejected,(state)=>{
        state.status="idle"
       })
    }

})

export const{reset_redirectTo,handleLoggedout,check_token}=AuthSlice.actions

export default AuthSlice.reducer;