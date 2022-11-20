import React from 'react';
import printerImage from "../../images/printer-image.jpg";
import scannerImage from "../../images/scanner-image.jpg";
import scannerImage2 from "../../images/scanner2-image.jpg";
import shredderImage from "../../images/shredder-image.jpg";
import boardImage from "../../images/board-image.jpg";
import "./third-section.css";

export default function ThirdSection(){

    return(
    <div className='third-section'>
                <div className='most-popular-products'>
                    <h3 className='most-popular-products-h3'>Most popular products</h3>
                    <button className='more-button'>More</button>
                    <div className='products'>
                        <div className='product'>
                            <img className='product-printer-image' src={printerImage}></img>
                            <div className='product-info'>
                                <p>Canon Pixma E3440 Wi-Fi</p>
                                <h4 className='product-price'>3900₴</h4>
                                <button className='order-button'>Order</button>
                            </div>
                        </div>
                        <div className='product'>
                            <img className='product-printer-image' src={scannerImage}></img>
                            <div className='product-info'>
                                <p>Kodak i940</p>
                                <h4 className='product-price'>13000₴</h4>
                                <button className='order-button'>Order</button>
                            </div>
                        </div>
                        <div className='product'>
                            <img className='product-printer-image' src={scannerImage2}></img>
                            <div className='product-info'>
                                <p>Canon P-208II</p>
                                <h4 className='product-price'>5999₴</h4>
                                <button className='order-button'>Order</button>
                            </div>
                        </div>
                        <div className='product'>
                            <img className='product-printer-image' src={shredderImage}></img>
                            <div className='product-info'>
                                <p>Shredder 2E S-509CC</p>
                                <h4 className='product-price'>1662₴</h4>
                                <button className='order-button'>Order</button>
                            </div>
                        </div>
                        <div className='product'>
                            <img className='product-printer-image' src={boardImage}></img>
                            <div className='product-info'>
                                <p>Buromax magnetic marker board</p>
                                <h4 className='product-price'>1699₴</h4>
                                <button className='order-button'>Order</button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        
        )
    }