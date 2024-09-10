import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from "react-router-dom";


import '../css/topbar.css';
import siteIcon from '../images/logo.jpeg';
import React from "react";

const Layout = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const location = useLocation();
  // function handleClick(event) {
  //   const buttonText = event.target.textContent;
  //   // console.log(`The button text is: ${buttonText}`);
  // }

  const handleClick = (index) => {
    setSelectedButton(index);
  };

  useEffect( () =>{

      if( location.pathname === '/') {
        var index = 0;
      } else if(location.pathname === '/lists') {
        index = 1;
      }else if(location.pathname === '/about'){
        index = 4;
      }else {
        index = 5;
      }
      setSelectedButton(index);

    }, 
    [location.pathname]
  );

  return (
    <>
      <div className="topbar-container">
        <div className="logo-container">
        <Link to="/"><img src={siteIcon} alt="Website Logo" className="site-logo" /></Link>
        </div>
        <nav>
            <ul className="nav-links">
            <li>
                <Link  onClick={() => handleClick(0)} style={{ color: selectedButton === 0 ? 'red' : 'white' }}
                to="/">Home</Link>
            </li>
            <li>
                <Link  onClick={() => handleClick(1)} style={{ color: selectedButton === 1 ? 'red' : 'white' }}
                to="/lists">Blogs</Link>
            </li>
            <li>
                <Link  onClick={() => handleClick(4)} style={{ color: selectedButton === 4 ? 'red' : 'white' }}
                to="/about">About</Link>
            </li>
            </ul>
        </nav>
    </div>

      <Outlet />
    </>
  )
};

export default Layout;