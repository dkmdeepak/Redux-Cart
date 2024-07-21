import { createSlice } from "@reduxjs/toolkit";
// import Wishlist from "../../pages/Wishlist";

const wishSlice=createSlice({
    name:'wishlist',
    initialState:{
        wishlist:[]
    },
    reducers:{
        addToWishList:(state,action)=>{
            const existingProduct=state.wishlist.find(item=>item.id==action.payload.id)
            if(existingProduct){
                alert("Product already exist in wishlist")
            }
            else{
                state.wishlist.push(action.payload)
                alert("successfully added  to wisshlist")

            }
            // localStorage.srtItem("wishlist",state.wishlist)
        },
        removeFromWishList:(state,action)=>{
            state.wishlist=state.wishlist.filter(item=>item.id!=action.payload)
        }
    }
})

export const {addToWishList,removeFromWishList}=wishSlice.actions
export default wishSlice.reducer