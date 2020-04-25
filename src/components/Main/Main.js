import React, {useEffect} from "react";
import './Main.css';
import ProductList from "../ProductList/ProductList";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import Inventory from "../Inventory/Inventory";
import {useDispatch} from "react-redux";
import {fetchCartItems, fetchProducts} from "../../redux/ActionCreators";

const Main = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchProducts());
        dispatch(fetchCartItems());

    },[]);
    return (
        <div className="container">
            <div className="main">
                <div className="box type-1">
                    <ProductList />
                </div>
                <div className="box type-2">
                    <ShoppingCart />
                </div>
                <div className="box type-1">
                    <Inventory />
                </div>
            </div>
        </div>
    );
};

export default Main;
