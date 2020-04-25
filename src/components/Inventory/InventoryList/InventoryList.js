import React from "react";
import './InventoryList.css';
import InventoryForm from "../InventoryForm/InventoryForm";
import {useDispatch} from "react-redux";
import {editProduct} from "../../../redux/ActionCreators";

const InventoryList = ({products}) => {
    const dispatch = useDispatch();
    const handleOnChange = (product) => {
        dispatch(editProduct(product));
    };

    const inventoryItems = products.map(product=>(
        <div className="inventory-item-container" key={product.id}>
            <InventoryForm
                defaultValue={product}
                onchange={handleOnChange}
            />
        </div>
    ));

    return (
        products && inventoryItems
    )
};

export default InventoryList;
