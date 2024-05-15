import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import ProfileSlice from "./ProfileSlice";
import CreateSlice from "./CreateSlice";
import ProductSlice from "./ProductSlice";



export const store=configureStore({
    reducer:{
        AUTH:AuthSlice,
        Profile:ProfileSlice,
        Create:CreateSlice,
        Product:ProductSlice
    }
})