import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../Cart/Cart.css";
import CartItem from "./CartItem/CartItem";

export default function Cart() {

    const [counter, setCounter] = useState(0);
    const [price, setPrice] = useState(45);

    const itemsInCart = useSelector((state)=>state.items);
    console.log("itemsInCart ", itemsInCart);

    return (
        
       <><div className="shopping-cart">
            <h3 className="shopping-cart-title">Shopping Cart</h3>
            <RenderCart itemsInCart={itemsInCart}/>
        </div><p className="shopping-cart-total-price">Total Price: {itemsInCart.reduce((acc, item) => acc + item.price, 0)} $</p><div className="shopping-cart-continue">
                <Link to={"/catalogue"}> <button>Back to Catalogue</button> </Link>
                <Link to={"/catalogue"}> <button>Continue</button></Link>
            </div></>
        
        
    );
}


function RenderCart({ itemsInCart }) {
    console.log("CART ITEMS:  ", itemsInCart);
    return (
      <div className="item_carts_div">
        {itemsInCart.map((item) => (
          <CartItem item={item} />
        ))}
      </div>
    );
  }