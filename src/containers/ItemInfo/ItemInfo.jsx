import React, { useContext } from 'react';
import "../ItemInfo/ItemInfo.css";
import { items } from "../Catalogue/Catalogue.jsx"
import { useParams, useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { createContext } from 'react';
import { findEqupmentById } from '../ApiRequests/ApiGetAll';
import { useState } from 'react';
import { useEffect } from 'react';
import LoadingSpinner from '../Catalogue/loading-spinner/loadingSpinner';
import { addItemToCart } from '../../redux_store/actions';
import { useDispatch, useSelector } from 'react-redux';

export default function ItemInfo() {

    const { id } = useParams();
    const [loading, setLoading] = useState(false);

    const itemsInCart = useSelector(state=>state.items);

    const[item, setItem] = useState({});

    const dispatch = useDispatch();

    useEffect(()=>{
        setLoading(true);
        findEqupmentById(id).then((item)=>{
            setItem(item);
        })
        setTimeout(setLoading(false),300);
    },[]);

    const addItem=()=>{
        dispatch(addItemToCart(item));
    }

    console.log("id: " + id);
    return (
        <div>
        {loading? <LoadingSpinner/>:
        <div className='catalogue-item-info'>
        
            <div className='item-photo'>
                <img src={item.imageDestination}></img>
                {console.log("Image destination: "+item.imageDestination)}
            </div>
            <div className='item-description'>
                <h4 className='item-name'>{item.name}</h4>
                <p>{item.description}</p>
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
        }
        <div className='item-second-section'>
        <p className='item-second-section-price'>Price: {item.price} $</p>
        <div className='item-second-section-buttons'>
           <Link to={"/catalogue"}><button><b>Back</b></button></Link>
            <Link to={"/cart"}><button onClick={addItem}><b>Add to cart</b></button></Link>
            </div>
        </div>
        </div>
    );
}