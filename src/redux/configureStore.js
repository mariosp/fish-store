import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {Products} from "./products";

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            products: Products
        }),
        applyMiddleware(thunk)
    ) ;
    return store;
};
