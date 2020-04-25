import * as ActionTypes from "./ActionTypes";

export const addProduct = (product) =>({
    type: ActionTypes.ADD_PRODUCT,
    payload: product
});

export const editProduct = (product) =>({
    type: ActionTypes.EDIT_PRODUCT,
    payload: product
});

export const addProducts = (products) => ({
    type: ActionTypes.ADD_PRODUCTS,
    payload: products
});

export const fetchProducts = () => (dispatch) => {
    const state = JSON.parse(localStorage.getItem('products'));
    console.log(state);
    if(state && state.products.length) {
        dispatch(addProducts(state.products));
    }
}
