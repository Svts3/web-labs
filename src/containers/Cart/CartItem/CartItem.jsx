import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItemFromCart } from "../../../redux_store/actions";
import RemoveFromCart from "../RemoveFromCart/RemoveFromCart";



export default function CartItem(props) {

    const [counter, setCounter] = useState(1);

    const dispatch = useDispatch();
    

    const removeItemFromCart = () => {
        dispatch(deleteItemFromCart(props.item));
    }
    return (
        <div className="shopping-cart-items">
            <div className="shopping-cart-item">
                <div className="shopping-cart-item-info">
                    <img className="shopping-cart-item-image" src={props.item.imageDestination}></img>
                    <p className="shopping-cart-item-name">{props.item.name}</p>
                    <div className="shopping-cart-item-amount">
                        <button onClick={() => {
                            setCounter(counter <= 1 ? 1 : counter - 1)
                        }} >-</button>
                        <p>{counter}</p>
                        <button onClick={() => setCounter(counter >= 100 ? 100 : counter + 1)
                        }>+</button>
                        <RemoveFromCart removeItemFromCart={removeItemFromCart} />
                        <p>{props.item.price*counter} $</p>
                    </div>
                </div>

            </div>
        </div>
    );
}