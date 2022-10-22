import React from 'react';

import "./Hero.css";


export default function Hero() {
    return (
        <><div className='hero'>
            <ul className='hero-catalogue'>
                <li><a>Dictation Machines</a></li>
                <li><a>Printers</a></li>
                <li><a>Document Scanners</a></li>
                <li><a>Photocopy Machines</a></li>
                <li><a>Laminate Machines</a></li>
                <li><a>Projectors</a></li>
                <li><a>Coffee Maker</a></li>
                <li><a>Whiteboards</a></li>
                <li><a>Bookcases</a></li>
                <li><a>Paper Trays</a></li>
                <li><a>Pens</a></li>
                <li><a>Monitor Stands</a></li>
                <li><a>Desktop Computers</a></li>
            </ul>
            <div className='hero-pictures'>
                <button>&#129044;</button>
                <button>&#129046;</button>
            </div>
        
        </div>
       </>
    )
}