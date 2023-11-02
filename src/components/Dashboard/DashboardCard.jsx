import React from 'react'
import "./DashboardCardStyle.css"

export function DashboardCard({ title, price, address, preview}) {

    return (
        <div className="DashboardCard">
            <img className="DashboardCardImage" alt="Preview of Property" src={preview} />
            <h4 className="DashboardCardTitle">{title}</h4>
            <h4 className="DashboardCardPrice">{price}</h4>
            <p className="DashboardCardAddress">{address}</p>
        </div>
    )
}

