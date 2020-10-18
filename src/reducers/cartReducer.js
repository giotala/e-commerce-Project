import { ADD_PRODUCT_CART, DELETE_PRODUCT_CART, GET_NUMBERS_CART } from "../actions/types";

const initialState = {
    cartNums: 0,
    cartItems: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_CART:
            return {
                cartNums: state.cartNums + 1,
                cartItems: [
                    ...state.cartItems, action.payload
                ]
            }
        // case DELETE_PRODUCT_CART:
        //     return {
        //         cartItems: state.cartItems.filter(item =>
        //             item.id !== action.payload,

        //         ),
        //         cartNums: state.cartNums - 1,
        //     }
        case DELETE_PRODUCT_CART:
            let index = state.cartItems.findIndex(item => item.id === action.payload)
            let newCart = [...state.cartItems]
            newCart.splice(index, 1)
            return {
                cartItems: newCart,
                cartNums: state.cartNums - 1,
            }
        case GET_NUMBERS_CART:
            return {
                ...state
            }
        default:
            return state;
    }
}