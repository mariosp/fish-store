import React from "react";
import './ProductItem.css';
import { productStatus } from "../../../Shared/product-status";
import {useDispatch} from "react-redux";
import {addCartItem} from "../../../redux/ActionCreators";

const ProductItem = ({product}) => {
    const dispatch = useDispatch();

    const buttonVisible = product.Status === productStatus[0]; //available
    const handleClick = () => {
        dispatch(addCartItem(product.id));
    };
    return (
        <div className="product-item-container">
            <div className="image-wrapper">
                <img className="image-tag" alt={product.Title} src={product.ImageUrl} />
            </div>
            <div className="info-wrapper">
                <div className="item-row">
                    <div className="item-title">
                        {product.Title}
                    </div>
                    <div className="item-price">
                        {product.Price}€
                    </div>
                </div>
                <div className="item-row">
                    <div className="item-desc">
                        {product.Description}
                    </div>
                </div>
                {
                    buttonVisible ?
                        <div className="item-row">
                               <button className="item-button" onClick={handleClick}>
                                   ADD TO CART
                               </button>
                        </div>
                        :
                        <div className="item-unavailable-box">
                            UNAVAILABLE
                        </div>
                }
            </div>
        </div>
    )
};

export default ProductItem;
