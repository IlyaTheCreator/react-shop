import client from '../../services/contentful'
import {
    REQUEST_PRODUCTS,
    RECEIVE_PRODUCTS,
} from "./actionTypes";

const requestProducts = () => ({
    type: REQUEST_PRODUCTS
})

const receiveProducts = payload => ({
    type: RECEIVE_PRODUCTS,
    payload
})


export const fetchProducts = (query = []) => dispatch => {
    dispatch(requestProducts())

    let search = {}

    if (query.length > 1) {
        search = Object.assign(...query.map(([key, value]) => ({ [`fields.${key}[match]`]: value })))
    } else if (query.length === 1) {
        search = { [`fields.${query[0][0]}[match]`]: query[0][1] }
    }

    client.getEntries({ content_type: 'product', ...search })
        .then(response => dispatch(receiveProducts(response)))
        .catch(error => dispatch(receiveProducts(error)))
}