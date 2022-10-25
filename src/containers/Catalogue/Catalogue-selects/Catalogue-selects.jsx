import React from 'react';
import "../Catalogue-selects/Catalogue-select.css";



export default function CatalogueSelects() {
  return (<><div className='catalogue-filters'>
      <select><option>Filter 1</option></select>
      <select><option>Filter 2</option></select>
      <select><option>Filter 3</option></select>
  </div>
  <button><b>Apply</b></button></>
);
}