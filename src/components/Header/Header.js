import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@mui/material';
import './Header.scss';

const Menu = () => (
<svg id='svg' width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4 18L20 18" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
  <path d="M4 12L20 12" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
  <path d="M4 6L20 6" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
  </svg>
);
const Header = () => {
  const ref = useRef();
  const menu = useRef();
  const [showNavbar, setShowNavbar] = useState(false);
  const [visible, setVisible] = useState(true)
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  const handleScroll = () => {
    const currentScrollPos = window.scrollY
    if(currentScrollPos > prevScrollPos){
        setVisible(false)
    }else{
        setVisible(true)
    }

    setPrevScrollPos(currentScrollPos)
}
  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (showNavbar && ref.current && !ref.current.contains(e.target)) {
        setShowNavbar(false)
      }
    };
    const checkIfClicked = e => {
      if (showNavbar && menu.current && menu.current.contains(e.target)) {
        setShowNavbar(false)
      }
    };
    document.addEventListener('mousedown', checkIfClickedOutside);
    document.addEventListener('click', checkIfClicked);
    window.addEventListener('scroll', handleScroll);

    // return () => window.removeEventListener('scroll', handleScroll)
  }, [showNavbar]);
  return (
    <>
      <div className={`nav ${!visible && "hide"}`} ref={ref}>
        <Container maxWidth='xl'>
          <div className='menu-icon' onClick={handleShowNavbar}>
            <Menu />
          </div>
          <div className={`nav-menu ${showNavbar && "active"}`}>
            <ul ref={menu}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">Work</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/about">Contact</Link></li>
            </ul>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;