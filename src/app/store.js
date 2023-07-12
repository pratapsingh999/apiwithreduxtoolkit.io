import { configureStore } from "@reduxjs/toolkit";
import getUser from "../features/gitUserSlice";

const store = configureStore({
    reducer:{
       user : getUser,
    },
}); 

export default store;