import React from 'react';
import './NavbarRowStyle.css';

export function NavbarRow({ navbarRowTitle, navbarRowIcon, changePage }) {
  
  return (
    <div className='NavbarRow' onClick={() => changePage(navbarRowTitle)}>
      <img className='NavbarRowIcon' alt="Navbar Row Icon" src={ navbarRowIcon }/>
      <h4 className='NavbarRowTitle'> { navbarRowTitle } </h4>
    </div>
  );
}
