import React from 'react';
import "./DashboardStyles.css"
import { DashboardCard } from './DashboardCard';
import { POST_DETAILS } from "../../constants/dashboardConstants"

export function Dashboard() {
    return (
        <div className="Dashboard">
            <div className="SearchContainer">
                <h4 className="SearchText">Search: </h4>
                <input className="SearchBox" type="text" placeholder="Type property here"></input>
            </div>
            <div className="AllPosts">
            { POST_DETAILS.map(({title, price, address, imagePath}) => (
                <DashboardCard title={title} price={price} address={address} preview={imagePath} />
            ))}
            </div>
        </div>
    )
}