import React, { useContext } from 'react';
import "../ItemInfo/ItemInfo.css";
import { items } from "../Catalogue/Catalogue.jsx"
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { createContext } from 'react';

export default function ItemInfo() {

    const { id } = useParams();

    const itemContext = createContext(items.find(item => item.id == id));

    console.log("id: " + id);
    console.log(itemContext)
    return (
        <div>
        <div className='catalogue-item-info'>
            <div className='item-photo'>
                <img src={useContext(itemContext).image}></img>
            </div>
            <div className='item-description'>
                <h4 className='item-name'>{useContext(itemContext).name}</h4>
                <p>{useContext(itemContext).description}</p>
            <div className='inputs'>
                <div className='amount-input'>
                    <p>Amount</p>
                    <input type={'number'}></input>
                </div>
                <div className='selectfield-input'>
                    <p>Selectable field</p>
                    <select placeholder='Select'>
                        <option>Select</option>
                    </select>
                </div>
            </div>
            </div>
        </div>
        <div className='item-second-section'>
        <p className='item-second-section-price'>Price: {useContext(itemContext).price} $</p>
        <div className='item-second-section-buttons'>
           <Link to={"/catalogue"}><button><b>Back</b></button></Link>
            <button><b>Add to cart</b></button>
            </div>
        </div>
        </div>
    );
}