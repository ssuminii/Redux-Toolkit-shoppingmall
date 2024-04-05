import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

let initialState = {
  productList: [],
  product: [],
  isLoading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk(
    'product/fetchAll',
    async (searchQuery, thunkApi) => {
        try{
            let url = `https://my-json-server.typicode.com/ssuminii/React-Shoppingmall/products?q=${searchQuery}`;
            let response = await fetch(url);
            return response.json();
        }catch(error) {
            thunkApi.rejectWithValue(error.message);
        }
    }
);

export const fetchProductsDetail = createAsyncThunk('product/fetchDetail', async (id, thunkApi) => {
    try {
      let url = `https://my-json-server.typicode.com/teddybearkim/hnm-final/products/${id}`;
      let response = await fetch(url);
      return await response.json();
    }catch(error) {
      thunkApi.rejectWithValue(error.message);
    }
  });

const productSlice = createSlice({
name: 'product',
initialState,
reducers: {},
extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
    state.isLoading = true;
    })
    .addCase(fetchProducts.fulfilled, (state, action) => {
    state.isLoading = false;
    state.productList = action.payload;
    })
    .addCase(fetchProducts.rejected, (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
    })
    .addCase(fetchProductsDetail.pending, (state) => {
    state.isLoading = true;
    })
    .addCase(fetchProductsDetail.fulfilled, (state, action) => {
    state.isLoading = false;
    state.productDetail = action.payload;
    })
    .addCase(fetchProductsDetail.rejected, (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
    })
}
});

console.log('ppp', productSlice);

export const productActions = productSlice.actions;
export default productSlice.reducer;
