import React from 'react';
import { useReducer } from 'react';
import { createContext } from 'react';
import { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { items, RenderItems } from '../Catalogue';
import "../Catalogue-selects/Catalogue-select.css";
import FindByName from '../FindByName/FindByName';
import Select from "../Selects/Select.jsx";
import {findAllEquipments, findEqupmentByColor, findEqupmentById, findEqupmentByType} from "../../ApiRequests/ApiGetAll.js";
import LoadingSpinner from '../loading-spinner/loadingSpinner';



export default function CatalogueSelects() {
  const [display, setDisplay] = useState([]);

  const[items, setItems]  = useState([]);

  const[loading, setLoading] = useState(false);


  useEffect(()=>{
    setLoading(true);
    findAllEquipments().then((item)=>{
        setItems(Object.values(item));
        setDisplay(Object.values(item));
    });
    setTimeout(()=>setLoading(false), 300);
    
  }, []);
  
  return (
  <>
  <div className='catalogue-filters'>
  <div className='catalogue-header'>
      
    <Select options={
      [
        { value: "All" },
        { value: "Printer" },
        { value: "Shredder" },
        { value: "Scanner" }
      ]
    }
    handleChange={(e) => {
      setLoading(true);
      console.log("E TARGET VALUE: ",e.target.value);
      setDisplay(items.filter(item => item.type == e.target.value));
      console.log("FILTERED LIST: ", display);
      if (e.target.value == "All") {
        setDisplay(items);
      }else{
        findEqupmentByType(e.target.value).then((item)=>{
          setDisplay(Object.values(item));
        });

      }
      setTimeout(()=>setLoading(false), 300);
      }} />

    <Select options={
      [
        { value: "All" },
        { value: "Black" },
        { value: "Grey" },
        { value: "White" }
      ]
    }
    handleChange={(e) => {
      setLoading(true);
      setDisplay(items.filter(item => item.color == e.target.value));
      if (e.target.value == "All") {
        setDisplay(items);
      }else{
        findEqupmentByColor(e.target.value).then((item)=>{
          setDisplay(Object.values(item));
        }
        )
      }
      setTimeout(()=>setLoading(false), 300);
    }} />
    <Select options={
      [
        { value: "ASC" },
        { value: "DESC" }
      ]
    }
    handleChange={(e) => {
      setDisplay();
      setLoading(true);
      if (e.target.value == "ASC") {
        setDisplay([...display].sort((item1, item2)=>{
          return item1.price - item2.price;
        })
        )
      }
      if (e.target.value == "DESC") {
        setDisplay([...display].sort((item1, item2)=>{
          return item2.price - item1.price;
        })
        )
      }
      setTimeout(()=>setLoading(false), 300);
    }} />

    <FindByName searchItems={(value)=>{
      setLoading(true);
      console.log("Value: "+value.length);
      setDisplay([...display].filter(item => item.name.toLowerCase().search(value.toLowerCase()) !== -1))
      if(value.length == 0){
        setDisplay(items); 
      }
      setTimeout(()=>setLoading(false), 300);
    }} />
  </div>

  <div className='catalogue-header-apply'>
    <button onClick={(e)=>{
      setDisplay(items);
    }}>Reset</button>
  </div>
  <hr></hr>
    </div>
   <div className='catalogue' id='catalogue'>
      {loading? <LoadingSpinner/> : <RenderItems items={display} />}

 </div>
 </>
  );
}