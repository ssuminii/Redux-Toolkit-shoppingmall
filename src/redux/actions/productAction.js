import { productActions } from '../reduce/productReduer';

function getProducts(searchQuery) {
    // getState: 현재의 state 정보를 받아볼 수 있음
    return async (dispatch, getState) => {
        let url = `https://my-json-server.typicode.com/ssuminii/React-Shoppingmall/products?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        // dispatch({type:"GET_PRODUCT_SUCCESS", payload:{data}});
        dispatch(productActions.getAllProducts({data}));
    };
}

function getProductDetail (id) {
    return async(dispatch, getState) => {
        let url = `https://my-json-server.typicode.com/ssuminii/React-Shoppingmall/products/${id}`;
        let response = await fetch(url);
        let data = await response.json();
        // dispatch({type:"GET_PRODUCT_DETAIL_SUCCESS", payload:{data}});
        dispatch(productActions.getSingleProduct({data}));
    }
}

export const productAction = { getProducts, getProductDetail };