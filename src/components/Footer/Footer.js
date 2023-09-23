import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <>
      <div className='footer'>
         <div className='credits'>
          <span>Portfolio developed with:</span><br/>
          <span><b>React & Sass</b></span>
          <span className='right'>Jam Kriztle Olila © 2023</span>
        </div>
      </div>
    </>
  );
};

export default Footer;