import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
import userContext from "./UserContext";

const appStore = configureStore(

    {
        reducer : {

            cart: cartReducer  
            


        },

    }

);

export default appStore