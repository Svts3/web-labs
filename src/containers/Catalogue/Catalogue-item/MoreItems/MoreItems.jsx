import React from 'react';
import "../MoreItems/MoreItems.css";



export default function ItemTemplate(props) {
  return (
     <div className='view-more-div' >
  <Link to={"/catalogue/" + props.id }>
      <button className="view-more-button"><b>View more</b></button>
  </Link>
</div>
);
}