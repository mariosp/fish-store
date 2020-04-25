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
    if(state && state.products.length) {
        dispatch(addProducts(state.products));
    }
};

export const addCartItem = (item) =>({
    type: ActionTypes.ADD_CART_ITEM,
    payload: item
});

export const addCartItems = (items) => ({
    type: ActionTypes.ADD_CART_ITEMS,
    payload: items
});

export const fetchCartItems = () => (dispatch) => {
    const state = JSON.parse(localStorage.getItem('cart'));
    if(state && state.items.length) {
        dispatch(addCartItems(state.items));
    }
}
