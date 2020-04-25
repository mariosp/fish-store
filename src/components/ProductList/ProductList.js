import React from "react";
import './ProductList.css'

const ProductList = () => {
    return (
        <div className="product-container">
            <div className="product-header">
                <div className="product-header-title">FISH STORE</div>
                <div className="product-header-subtitle">
                    === <span className="subtitle-text">OUR PRODUCTS LIST </span> ===
                </div>
            </div>
        </div>
    );
};

export default ProductList;
