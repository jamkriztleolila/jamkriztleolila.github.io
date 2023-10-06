import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container } from '@mui/material';
import './Header.scss';

const Menu = () => (
<svg id='svg' width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4 18L20 18" stroke="#25323c" stroke-width="2" stroke-linecap="round"/>
  <path d="M4 12L20 12" stroke="#25323c" stroke-width="2" stroke-linecap="round"/>
  <path d="M4 6L20 6" stroke="#25323c" stroke-width="2" stroke-linecap="round"/>
  </svg>
);
const Header = () => {
  const ref = useRef();
  const menu = useRef();
  const [showNavbar, setShowNavbar] = useState(false);
  const [visible, setVisible] = useState(true)
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const location = useLocation();
  const path = location.state ? location.state : location.pathname;
  const [activePage, setActivePage] = useState(path);
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
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
    const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        if(currentScrollPos > prevScrollPos){
            setVisible(false)
        }else{
            setVisible(true)
        }
  
        setPrevScrollPos(currentScrollPos)
    };
    setActivePage(path);
    document.addEventListener('mousedown', checkIfClickedOutside);
    document.addEventListener('click', checkIfClicked);
    window.addEventListener('scroll', handleScroll);

  }, [showNavbar, location, path, prevScrollPos]);
  const handleClick = (page) => {
    setActivePage(page);
  };
  return (
    <>
    <div>
      {/* <div className='logo'>J.Ko</div> */}
      <div className={`nav ${!visible && "hide"}`} ref={ref}>
          <Container maxWidth='xl' disableGutters>
            <div className='menu-icon' onClick={handleShowNavbar}>
              <Menu />
            </div>
            <div className={`nav-menu ${showNavbar && "active"}`}>
              <ul ref={menu} className={activePage === '/' && 'home'}>
                <li className={activePage === '/' && 'activePage'}><Link to="/" onClick={() => handleClick('/')}>Home</Link></li>
                <li className={activePage === '/works' && 'activePage'}><Link to="/works" onClick={() => handleClick('/works')}>Portfolio</Link></li>
                <li className={activePage === '/about' && 'activePage'}><Link to="/about" onClick={() => handleClick('/about')}>About</Link></li>
                <li className={activePage === '/contact' && 'activePage'}><Link onClick={() => window.location = 'mailto:instructionlessbyjko@gmail.com'}>Contact</Link></li>
              </ul>
            </div>
          </Container>
        </div>
    </div>
    </>
  );
};

export default Header;