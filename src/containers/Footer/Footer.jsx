import React from 'react';

import "./Footer.css";



export default function Footer(){
    return(
        <footer className='footer'>
        <div className='footer-info'>
          <div>
            <h3>Copyright©2022</h3>
          </div>
          <div>
            <h3 className='footer-company-name'>Office Goods</h3>


          </div>
          <div className='footer-help'>
            <h4>Let us help you</h4>
            <li><a>Your accound</a></li>
            <li><a>Your orders</a></li>
            <li><a>Contact information</a></li>
            <li><a>Help</a></li>

          </div>
        </div>
      </footer>
    )
}