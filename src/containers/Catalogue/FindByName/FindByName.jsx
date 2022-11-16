import React from 'react';
import { useReducer } from 'react';
import { createContext } from 'react';
import { useState, useMemo, useEffect } from 'react';
import { items, RenderItems } from '../Catalogue';
import "../Catalogue-selects/Catalogue-select.css";




export default function FindByName(props) {

    const[text, setText] = useState();
    const a = (e)=>{
        (() => props.searchItems(e.target.value))();
        setText(e.target.value);
    }
  return (
    <>
     <input className="header-input" onChange={a} onClick={props.clear}/>
    </>
  );
}