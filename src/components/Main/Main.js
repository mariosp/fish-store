import React from "react";
import './Main.css';
import ProductList from "../ProductList/ProductList";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import Inventory from "../Inventory/Inventory";

const Main = () => {
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
