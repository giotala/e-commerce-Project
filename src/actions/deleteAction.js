import {DELETE_PRODUCT_CART} from './types';

export const deleteCart = (id) => {
    return (dispatch) => {
        console.log('delete cart');
        dispatch({
            type: DELETE_PRODUCT_CART,
            payload: id
        });
    }
}