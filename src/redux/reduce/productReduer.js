import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { productAction } from '../actions/productAction';

let initialState = {
  productList: [],
  product: [],
  isLoading: false,
};

const getProducts = createAsyncThunk(
    'product/fetchAll',
    async (searchQuery, thunkApi) => {
        let url = `https://my-json-server.typicode.com/ssuminii/React-Shoppingmall/products?q=${searchQuery}`;
        let response = await fetch(url);
        return response.json();
    }
);

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
  extraReducers: (builder) => {
    // 대기
    builder.addCase(getProducts.pending, (state) => {
        state.isLoading = true;
    })
    // 성공
    .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productDetail = action.payload;
    })
    // 실패
    .addCase(getProducts.rejected, (state) => {
        state.isLoading = true;
    })
  }
});

console.log('ppp', productSlice);

export const productActions = productSlice.actions;
export default productSlice.reducer;
