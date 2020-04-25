import React from "react";
import './ShoppingCart.css';
import {useSelector} from "react-redux";

const ShoppingCart = () => {
    const items = useSelector(state => state.cart.items);
    const products = useSelector(state => state.products.products);

    const cartList = items.map(item => {
        const product = products.filter(product=> product.id === item[0])[0];
        return (
        <div className="cart-list-item" key={item[0]}>
            <div className="cart-list-info">
            <span>{item[1]}</span> X {product.Title}
            </div>
            <div className="cart-list-subtotal">
                {(item[1] * parseFloat(product.Price)).toFixed(2)}€
            </div>
        </div>
        );
    });

    const totalPrice = items.reduce((acc, current) => {
        const product = products.filter(product=> product.id === current[0])[0];
        const sum =  current[1] * parseFloat(product.Price);
        return acc + sum;
    },0);

    return (
        <div className="shopping-container">
            <div className="shopping-header">
                <div className="shopping-header-title">SHOPPING CART</div>
            </div>
            <div className="shopping-cart">
                <div className="cart-list">
                    {cartList}
                </div>
                <div className="cart-list-total">
                    Total: {totalPrice.toFixed(2)}€
                </div>
            </div>
        </div>
    )
};

export default ShoppingCart;
