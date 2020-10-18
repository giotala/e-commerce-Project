import { ADD_PRODUCT_CART } from './types';

export const addCart = (cartItem) => {
    return (dispatch) => {
        console.log('add to carto');
        dispatch({
            type: ADD_PRODUCT_CART,
            payload: cartItem
        });
    }
}