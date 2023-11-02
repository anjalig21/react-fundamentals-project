import React, { useState } from 'react'
import GearIcon from "./components/Navbar/GearIcon.png"
import { Navbar } from "./components/Navbar/Navbar.jsx"
import { Dashboard } from "./components/Dashboard/Dashboard.jsx"
import { SiteDetails } from "./components/SiteDetails/SiteDetails.jsx"
import { Migration } from "./components/Migration/Migration.jsx"
import { Backups } from "./components/Backups/Backups.jsx"
import { Collabrators } from "./components/Collabrators/Collabrators.jsx"
import { SupportTools } from "./components/SupportTools/SupportTools.jsx"
import { OpenNewTicket } from "./components/OpenNewTicket/OpenNewTicket.jsx"
import "./App.css"

const NavbarRowDetails = [
  ["Dashboard", GearIcon],
  ["Site Details", GearIcon],
  ["Migration", GearIcon],
  ["Backups", GearIcon],
  ["Collabrators", GearIcon],
  ["Support Tools", GearIcon],
  ["Open New Ticket", GearIcon]
]

const name = "John Doe"
const email = "johndoe@gmail.com"

export function App(props) {
  const [page, setPage] = useState("Dashboard")

  const changePage = (newPage) => setPage(newPage)

  return (
    <div className='App'>
      <Navbar NavbarRowDetails={NavbarRowDetails} name={name} email={email} changePage={changePage}/>
      <div className="tabs">
        {page === "Dashboard" && <Dashboard/>}
        {page === "Site Details" && <SiteDetails/>}
        {page === "Migration" && <Migration/>}
        {page === "Backups" && <Backups/>}
        {page === "Collabrators" && <Collabrators/>}
        {page === "Support Tools" && <SupportTools/>}
        {page === "Open New Ticket" && <OpenNewTicket/>}
      </div>
    </div>
  );
}

// Log to console
export default App;