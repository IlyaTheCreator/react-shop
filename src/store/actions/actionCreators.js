import client from '../../services/contentful'
import { REQUEST_ALL_PRODUCTS, RECEIVE_ALL_PRODUCTS } from "./actionTypes";

const requestAllProducts = () => {
    return {
        type: REQUEST_ALL_PRODUCTS
    }
}

const receiveAllProducts = payload => {
    return {
        type: RECEIVE_ALL_PRODUCTS,
        payload
    }
}

export const fetchAllProducts = () => dispatch => {
    dispatch(requestAllProducts());

    client.getEntries({ content_type: 'product' })
        .then(response => dispatch(receiveAllProducts(response)))
        .catch(error => dispatch(receiveAllProducts(error)));
}