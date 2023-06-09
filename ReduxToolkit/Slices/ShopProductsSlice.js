// create a slice
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    shopCategory: {},
    shopFilters: {},
    shopProducts: {},

    filterBrands: [],
    filterCategory: [],
    priceRange: []
};
export const getShopProducts = createAsyncThunk('ShopProductsSlice/getProducts', async (value) => {
        // console.log(value)


        // return {
        //     initialRememberValue: cookies.moon
        // }

    }
)

export const ShopProductsSlice = createSlice({
    name: "shopProductsSlice",
    initialState,
    reducers: {
        setShopCategory: (state, action) => {
            // console.log(action.payload,"action.payload")
            state.shopCategory = action.payload
        },
        setShopFilters: (state, action) => {
            // console.log(action.payload,"action.payload")
            state.shopFilters = action.payload
        },
        setShopProducts: (state, action) => {
            // console.log(action.payload,"action.payload")
            state.shopProducts = action.payload
        },
        setFilterBrands: (state, action) => {
            // console.log(action.payload, "action.payload")
            state.filterBrands = action.payload
        },
        setFilterCategory: (state, action) => {
            // console.log(action.payload, "action.payload")
            state.filterCategory = action.payload
        },
        setPriceRange: (state, action) => {
            // console.log(action.payload, "action.payload")
            state.priceRange = action.payload
        },

    },
    extraReducers: {
        [getShopProducts.pending]: (state, action) => {

        },
        [getShopProducts.fulfilled]: (state, action) => {
            // state.page = action.payload
        },
        [getShopProducts.rejected]: (state, action) => {

        },
    }
})
export const selectShopCategory = (state) => state.ShopProductsSlice.shopCategory;
export const selectShopFilters = (state) => state.ShopProductsSlice.shopFilters;
export const selectShopProducts = (state) => state.ShopProductsSlice.shopProducts;
export const selectFilterBrands = (state) => state.ShopProductsSlice.filterBrands;
export const selectFilterCategory = (state) => state.ShopProductsSlice.filterCategory;
export const selectPriceRange = (state) => state.ShopProductsSlice.priceRange;

export const {
    setShopCategory,
    setShopFilters,
    setShopProducts,
    setFilterBrands,
    setFilterCategory,
    setPriceRange
} = ShopProductsSlice.actions;