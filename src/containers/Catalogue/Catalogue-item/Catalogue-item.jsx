import React from 'react';
import "../Catalogue-item/Catalogue-item.css";
import MoreAboutItem from './MoreItems/MoreAboutItems';



export default function ItemTemplate(props) {
  return (<div className='catalogue-product' key={props.id}>
  <img className='catalogue-product-printer-image' src={props.imageDestination}></img>
  {console.log(props.imageDestination)}
  <div className='catalogue-product-info'>
      <p className='catalogue-product-name'><b>{props.name}</b></p>
      <p className='catalogue-product-description'>{props.description}</p>
      <h4 className='catalogue-product-price'>Price: {props.price}$</h4>
      <MoreAboutItem id={props.id}/>
      
  </div>
</div>
);
}