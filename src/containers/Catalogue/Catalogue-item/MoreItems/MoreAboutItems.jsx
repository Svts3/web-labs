import React from 'react';
import "../MoreItems/MoreAboutItems.css";
import { Link } from 'react-router-dom';

import { items } from '../../Catalogue'; 



export default function MoreAboutItem(props) {
  console.log(props);
  console.log(props.id)
  return (
     <div className='view-more-div' >
  <Link to={"/catalogue/" + props.id}>
      <button className="catalogue-view-more-button"><b>View more</b></button>
  </Link>
</div>
);
}