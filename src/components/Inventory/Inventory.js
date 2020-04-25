import React, {useState} from "react";
import './Inventory.css';
import InventoryForm from "./InventoryForm/InventoryForm";

const Inventory = () => {
    const [addButton, SetAddButton] = useState(false);

    const addNew = (product) => {
      const validForm = Object.values(product).every((value,index) => {
          if (index ===1 && isNaN(value)) {
              return false;
          }
          return value.length > 0;

      });
      SetAddButton(validForm);
    };

    return (
        <div className="inventory-container">
            <div className="inventory-container-list">
                <div className="inventory-header">
                    <div className="inventory-header-title">INVENTORY</div>
                </div>
            </div>
            <div className="inventory-container-new">
                <div className="inventory-header">
                    <div className="inventory-header-title">ADD A NEW FISH</div>
                </div>
                <InventoryForm onchange={addNew} />
                <button disabled={!addButton} className="add-btn">ADD FISH</button>
            </div>
        </div>
    );
};

export default Inventory;
