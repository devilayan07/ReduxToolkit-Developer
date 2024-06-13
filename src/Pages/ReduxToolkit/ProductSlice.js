import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Component/Helper/Helper";
import { toast } from "react-toastify";


export const fetchProduct=createAsyncThunk("/product/list",async()=>{
    const response=await axiosInstance.post(`/product/list`)
    return response.data
})

export const fetchDetails=createAsyncThunk("/product/detail",async(id)=>{
    const response=await axiosInstance.get(`/product/detail/${id}`)
    return response.data.data
})

export const fetchEdit=createAsyncThunk("/product/update",async(formdata)=>{
    const response=await axiosInstance.post("/product/update",formdata)
    return response.data
})

export const fetchDelete=createAsyncThunk("/product/remove",async(formdata)=>{
    const response=await axiosInstance.post("/product/remove",formdata)
    return response.data
})
const ProductSlice=createSlice({
    name:"product",
    initialState:{
        isLoading:false,
        product:[],
        detail:[],
        totalpage:"",
        error:null,
        status:"idle"

    },

    extraReducers:(builder)=>{
        builder.addCase(fetchProduct.pending,(state)=>{
            state.isLoading=true
        })
        builder.addCase(fetchProduct.fulfilled,(state,action)=>{
            state.isLoading=false
            state.product=action.payload
            state.totalpage=action.payload.totalPages
            state.error=null
        })
        builder.addCase(fetchProduct.rejected,(state,action)=>{
            state.isLoading=false
            state.product=null
            state.error=action.error?.message
        })
        builder.addCase(fetchDetails.pending,(state)=>{
            state.isLoading=true

        })
        builder.addCase(fetchDetails.fulfilled,(state,action)=>{
            state.isLoading=false
            state.detail=action.payload

            if(action.payload.status===200){
                toast(action.payload.message)
            }
            state.error=null


        })
        builder.addCase(fetchDetails.rejected,(state,action)=>{
            state.isLoading=false
            state.detail=[]
            state.error=action.error?.message
        })

        builder.addCase(fetchEdit.pending,(state)=>{
            state.status="loading"
        })
        builder.addCase(fetchEdit.fulfilled,(state,action)=>{
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
        builder.addCase(fetchEdit.rejected,(state)=>{
            state.status="idle"
        })
        builder.addCase(fetchDelete.pending,(state)=>{
            state.status="loading"
        })
        builder.addCase(fetchDelete.fulfilled,(state,action)=>{
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
        builder.addCase(fetchDelete.rejected,(state)=>{
            state.status="idle"
        })
    }
})

export default ProductSlice.reducer