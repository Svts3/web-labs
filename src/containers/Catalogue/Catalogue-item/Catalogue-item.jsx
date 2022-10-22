import React from 'react';
import "../Catalogue-item/Catalogue-item.css";



export default function ItemTemplate(props) {
  return (<div className='product'>
  <img className='product-printer-image' src={props.image}></img>
  <div className='product-info'>
      <p>{props.name}</p>
      <h4 className='product-price'>{props.price}$</h4>
      <button className='order-button'>Order</button>
  </div>
</div>
);
}