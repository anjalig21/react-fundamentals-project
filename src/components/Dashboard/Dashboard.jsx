import React, { useEffect, useState } from 'react';
import "./DashboardStyles.css"
import { DashboardCard } from './DashboardCard';
import { POST_DETAILS } from "../../constants/dashboardConstants"

export function Dashboard() {
    const [searchText, setSearchText] = useState("")
    const [posts, setPosts] = useState(POST_DETAILS)

    useEffect(() => {
        const newArr = []
        for (let post of POST_DETAILS) {
            const lenSearchText = searchText.length
            if (searchText.toLowerCase() === post.title.substring(0,lenSearchText).toLowerCase()) {
                newArr.push(post)
            }
        }
        setPosts(newArr)
    },[searchText])

    return (
        <div className="Dashboard">
            <div className="SearchContainer">
                <h4 className="SearchText">Search: </h4>
                <input className="SearchBox" type="text" placeholder="Type property here" value={searchText} onChange={(e) => setSearchText(e.target.value)}></input>
            </div>
            <div className="AllPosts">
            { posts.map(({title, price, address, imagePath}) => (
                <DashboardCard title={title} price={price} address={address} preview={imagePath} />
            ))}
            </div>
        </div>
    )
}
