// import {createStore, applyMiddleware} from 'redux';
// import {thunk} from 'redux-thunk'
// import rootReducer from './reduce';
// import { composeWithDevTools } from '@redux-devtools/extension';

import { configureStore } from '@reduxjs/toolkit';
import productReduer from './reduce/productReduer';
import authenticateReducer from './reduce/authenticateReducer';

// const store = createStore(
//     rootReducer,
//     composeWithDevTools(applyMiddleware(thunk))
//     );

const store = configureStore({
    reducer: {
        auth: authenticateReducer,
        product: productReduer,
    },
});

export default store;