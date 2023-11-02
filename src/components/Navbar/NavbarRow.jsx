import React, { useContext } from 'react';
import { ChangePageContext } from '../../contexts/ChangePageContext';
import './NavbarRowStyle.css';

export function NavbarRow({ navbarRowTitle, navbarRowIcon }) {
  const changePage = useContext(ChangePageContext)
  return (
    <div className='NavbarRow' onClick={() => changePage(navbarRowTitle)}>
      <img className='NavbarRowIcon' alt="Navbar Row Icon" src={ navbarRowIcon }/>
      <h4 className='NavbarRowTitle'> { navbarRowTitle } </h4>
    </div>
  );
}
