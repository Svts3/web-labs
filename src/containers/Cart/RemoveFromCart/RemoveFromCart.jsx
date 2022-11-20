import React from "react";

export default function RemoveFromCart(props){

    return (
        <button id="shopping-cart-remove-button" onClick={props.removeItemFromCart}>Remove</button>
    );
}