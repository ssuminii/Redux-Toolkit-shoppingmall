function getProducts(searchQuery) {
    // getState: 현재의 state 정보를 받아볼 수 있음
    return async (dispatch, getState) => {
        let url = `https://my-json-server.typicode.com/ssuminii/React-Shoppingmall/products?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        dispatch({type:"GET_PRODUCT_SUCCESS", payload:{data}});
    };
}

export const productAction = {getProducts}