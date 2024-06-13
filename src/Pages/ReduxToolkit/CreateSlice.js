import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Component/Helper/Helper";
import { toast } from "react-toastify";

export const fetchCreate=createAsyncThunk("/product/create",async(formdata)=>{
    const response=await axiosInstance.post("/product/create",formdata)
    return response.data
})
const CreateSlice=createSlice({
    name:"create",
    initialState:{
      status:"idle"
    },

    extraReducers:(builder)=>{
        builder.addCase(fetchCreate.pending,(state)=>{
            state.isLoading="loading"
        })
        builder.addCase(fetchCreate.fulfilled,(state,action)=>{
            state.status="idle"
            if(action.payload?.status===200){
                toast(action.payload?.message)
            }
            else{
                if(action.payload?.status===201){
                    toast(action.payload?.message)
                }
            }
        })
        builder.addCase(fetchCreate.rejected,(state)=>{
            state.status="idle"
        })

    }
})

export default CreateSlice.reducer