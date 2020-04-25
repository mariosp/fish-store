import React, {useEffect, useState} from "react";
import './InventoryForm.css';
import {productStatus} from "../../../Shared/product-status";

const ProductOptions = ()=> (
    productStatus.map(status => (<option key={status} value={status}>{status}</option>))
);


const InventoryForm = ({onchange, defaultValue}) => {
    const [product, setProduct] = useState(defaultValue);

    useEffect(()=>{
        setProduct(defaultValue)
    },[defaultValue]);

    useEffect(()=>{
        onchange && onchange(product)
    },[product]);

    const handleChange = (event) => {
        event.persist();
        setProduct(value => ({...value, [event.target.name]: event.target.value}));
    };

    return (
        <div className="form-container">
            <div className="row">
                <div  className="col col-left">
                    <input name="Title" placeholder="Name" type="text" value={product.Title} onChange={handleChange} />
                </div>
                <div  className="col col-center">
                    <input name="Price" placeholder="Price" type="number" min="0" value={product.Price} onChange={handleChange}/>
                </div>
                <div  className="col col-right">
                    <select name="Status" placeholder="Availability" value={product.Status} onChange={handleChange}>
                        <ProductOptions />
                    </select>
                </div>
            </div>
            <div className="row">
                <div  className="col col-center">
                    <textarea name="Description" placeholder="Descr." value={product.Description} onChange={handleChange} />
                </div>
            </div>
            <div className="row">
                <div  className="col col-center">
                    <input name="ImageUrl" placeholder="Image" type="text" value={product.ImageUrl} onChange={handleChange}/>
                </div>
            </div>
        </div>
    )
};

export default InventoryForm;
