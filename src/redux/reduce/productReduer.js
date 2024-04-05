import {createSlice} from '@reduxjs/toolkit';

let initialState = {
    productList: [],
    product: [],
};

// function productReducer(state = initialState, action) {
//     let {type, payload} = action;
//     switch(type) {
//         case 'GET_PRODUCT_SUCCESS':
//             return {...state, productList: payload.data};
//         case 'GET_PRODUCT_DETAIL_SUCCESS':
//             return {...state, productDetail: payload.data}
//         default:
//             return {...state};
//     }
// }

// export default productReducer

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        getAllProducts(state, action) {
            state.productList = action.payload.data;
        },
        getSingleProduct(state, action) {
            state.productDetail = action.payload.data;
        },
    },
});

console.log('ppp',productSlice);

export default productSlice.reducer;