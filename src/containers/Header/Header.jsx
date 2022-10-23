import React from 'react';
import search from "../../images/search-icon.svg";
import shoppingCart from "../../images/shopping-cart.png";
import "./Header.css";
import Catalogue from "../Catalogue/Catalogue.jsx";
import { Link } from 'react-router-dom';



export default function Header(){

    return (
    <header className="App-header">
        <div>
          <h3 className='company-name'>Office Goods</h3>
        </div>
        <div className='header-catalogue-div'>
         <Link to={"/catalogue"}><button onClick={Catalogue}>Catalogue</button></Link>
        </div>
        <div className='header-input-div'>
          <input className="header-input" />
          <button><img className='search-button' src={search}></img></button>
        </div>
        <select className='header-buttons-select' name='language'>
          <option name>UA</option>
          <option name>EN</option>
          <option name>GE</option>
          <option name>FR</option>
        </select>
        <div className="header-buttons">
          <div className='shopping-cart-div'>
            <button className='shopping-cart-button'><img className='shopping-cart-image' src={shoppingCart}></img></button>
          </div>
          <button className="header-sign-in">Sing in</button>
          <button className="header-sign-up">Sing up</button>
        </div>
      </header>
    )
}