import React from 'react';
import "../Catalogue-item/Catalogue-item.css";



export default function ItemTemplate(props) {
  return (<div className='catalogue-product'>
  <img className='catalogue-product-printer-image' src={props.image}></img>
  <div className='catalogue-product-info'>
      <p className='catalogue-product-name'><b>{props.name}</b></p>
      <p className='catalogue-product-description'>{props.description}</p>
      <h4 className='catalogue-product-price'>Price: {props.price}$</h4>
      <button className='catalogue-order-button'>View More</button>
  </div>
</div>
);
}