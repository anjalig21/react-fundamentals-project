import React from 'react';
import { NavbarRow } from './NavbarRow.jsx';
import CompanyIcon from './GearIcon.png';
import ProfilePicture from './profilePicture.gif';
import './NavbarStyle.css';

export function Navbar({ NavbarRowDetails, name, email }) {

  return (
    <div className="Navbar">
      <div className="TitleAndProfile">
        <h2 className="CompanyTitle">Title</h2>
        <img className="CompanyIcon" alt="Company Icon" src = { CompanyIcon }></img>
      </div>
      <div className="ProfileInfo">
        <img className="ProfilePicture" alt = "User's Profile" src = { ProfilePicture }></img>
        <h4 className="Name">{ name }</h4>
        <p className="Email">{ email }</p>
      </div>
        { NavbarRowDetails.map(([title, icon]) => (
            <NavbarRow key={title} navbarRowTitle={title} navbarRowIcon={icon} />
        )) }
    </div>
  );
}
