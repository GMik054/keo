// create a slice
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {current} from '@reduxjs/toolkit'

const initialState = {
    newCartProduct: {},
    cart: [],
    total: 0,
    sellTotal: 0
};
export const getCartProducts = createAsyncThunk('CartSlice/getProducts', async (value) => {
        // console.log(value)


        // return {
        //     initialRememberValue: cookies.moon
        // }

    }
)

export const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setNewCartProduct: (state, action) => {
            // console.log(action.payload,"action.payload")
            state.newCartProduct = action.payload
        },
        setCart: (state, action) => {
            // console.log(action.payload, "action.payload")
            state.cart = action.payload
            // let addPrice = 0;
            state.total = 0
            state.sellTotal = 0
            !(state.cart?.error) && state.cart?.forEach((el) => {

                const price = el?.product?.front_sale_price !== null && el?.product?.front_sale_price !== undefined && el?.product?.price > el?.product?.front_sale_price
                    ? el?.product?.front_sale_price * (el?.qty > el?.product?.quantity ? el?.product?.quantity : el?.qty)
                    : el?.product?.price * (el?.qty > el?.product?.quantity ? el?.product.quantity : el?.qty);
                state.total += parseFloat(price);
                let sellPrice = el?.product?.price * (el?.qty > el?.product?.quantity ? el?.product.quantity : el?.qty)
                state.sellTotal += parseFloat(sellPrice);

                // console.log(current(state), "DDD")
                // const sellPrice = el?.product?.front_sale_price !== null || undefined) && (el?.product?.price > el?.product?.front_sale_price ?
            });
            !(state.sellTotal > state.total) ? state.sellTotal = 0 : ""
        },


    },
    extraReducers: {
        [getCartProducts.pending]: (state, action) => {

        },
        [getCartProducts.fulfilled]: (state, action) => {
            // state.page = action.payload
        },
        [getCartProducts.rejected]: (state, action) => {

        },
    }
})
export const selectNewCartProduct = (state) => state.CartSlice.newCartProduct;
export const selectCart = (state) => state.CartSlice.cart;
export const selectTotal = (state) => state.CartSlice.total;
export const selectSellTotal = (state) => state.CartSlice.sellTotal;

export const {
    setNewCartProduct,
    setCart,
} = CartSlice.actions;