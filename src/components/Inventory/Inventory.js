import React from "react";
import './Inventory.css';

const Inventory = () => {
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

            </div>
        </div>
    );
};

export default Inventory;
