import React from 'react';
import { useReducer } from 'react';
import { createContext } from 'react';
import { useState, useMemo, useEffect } from 'react';
import { items, RenderItems } from '../Catalogue';
import "../Catalogue-selects/Catalogue-select.css";


export default function Select(props) {
  return (
    <select className='catalogue-select' onChange={props.handleChange}>
      {console.log("PROPS: ", props.options)}
      {props.options.map((option) => {
       return(<option value={option.value}>{option.value}</option>)
    })}
    </select>
  );
}