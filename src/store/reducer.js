import {
    RECEIVE_PRODUCTS,
    REQUEST_PRODUCTS,
} from "./actions/actionTypes";

const initialState = {
    products_loaded: false,
    products: [],
    error: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case REQUEST_PRODUCTS:
            return {
                ...state,
                products_loaded: false,
                error: false
            }
        case RECEIVE_PRODUCTS:
            if (action.error) {
                return {
                    ...state,
                    error: true
                }
            }

            return {
                ...state,
                products_loaded: true,
                products: action.payload.items,
                error: false
            }
        default:
            return state
    }
}

export default reducer