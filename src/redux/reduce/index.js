import { combineReducers } from 'redux';
import authenticateReducer from './authenticateReducer';
import productReducer from './productReduer';

export default combineReducers({
    auth: authenticateReducer,
    product: productReducer,
});