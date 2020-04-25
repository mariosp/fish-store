import * as ActionTypes from "./ActionTypes";


export const Products = (state = {
    products: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PRODUCT:
            let product = action.payload;
            product["id"] = state.products.length;
            localStorage.setItem('products', JSON.stringify({...state, products: state.products.concat(product)}));
            return {...state, products: state.products.concat(product)};
        case ActionTypes.EDIT_PRODUCT:
            let editproduct = action.payload;
            const newState = state.products.map(product=>{
                if(product.id === editproduct.id) return editproduct;
                else return product;
            });
            localStorage.setItem('products', JSON.stringify({...state, products: newState}));
            return {...state, products: newState};
        case ActionTypes.ADD_PRODUCTS:
            let products = action.payload;
            return {...state, products: products};
        default:
            return state;
    }
};
