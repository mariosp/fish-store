import React, {useState} from "react";
import './Inventory.css';
import InventoryForm from "./InventoryForm/InventoryForm";
import {useDispatch, useSelector} from "react-redux";
import {addProduct} from "../../redux/ActionCreators";
import { product } from "../../Shared/product";
import InventoryList from "./InventoryList/InventoryList";

const Inventory = () => {
    const [addButton, SetAddButton] = useState(false);
    const [addNewProduct, setAddNewProduct] = useState(product);
    const products = useSelector(state => state.products.products);
    const dispatch = useDispatch();

    const addNew = (product) => {
      const validForm = Object.values(product).every((value,index) => {
          if (index ===1 && isNaN(value)) {
              return false;
          }
          return value.length > 0;

      });
      validForm && setAddNewProduct(product);
      SetAddButton(validForm);
    };

    const handleAddNewClick = () => {
        dispatch(addProduct(addNewProduct));
        setAddNewProduct(product);
    };

    return (
        <div className="inventory-container">
            <div className="inventory-container-list">
                <div className="inventory-header">
                    <div className="inventory-header-title">INVENTORY</div>
                </div>
                <InventoryList products={products} />
            </div>
            <div className="inventory-container-new">
                <div className="inventory-header">
                    <div className="inventory-header-title">ADD A NEW FISH</div>
                </div>
                <InventoryForm
                    defaultValue={addNewProduct}
                    onchange={addNew}
                />
                <button disabled={!addButton} className="add-btn" onClick={handleAddNewClick}>ADD FISH</button>
            </div>
        </div>
    );
};

export default Inventory;
