import React from "react";
import './ProductList.css'
import {useSelector} from "react-redux";
import ProductItem from "./ProductItem/ProductItem";

const ProductList = () => {
    const products = useSelector(state => state.products.products);
    const productList = products.map( product =>(
        <div key={product.id} className="product-list-item">
            <ProductItem product={product}/>
        </div>
    ));
    return (
        <div className="product-container">
            <div className="product-header">
                <div className="product-header-title">FISH STORE</div>
                <div className="product-header-subtitle">
                    === <span className="subtitle-text">OUR PRODUCTS LIST </span> ===
                </div>
            </div>
            <div className="product-list">
                {productList}
            </div>
        </div>
    );
};

export default ProductList;
