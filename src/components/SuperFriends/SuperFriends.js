import React from 'react'
import SuperLanding from "./Views/SuperLanding/SuperLanding"
import Events from "./Views/Events/Events"
import FoodMenu from "./Views/Food/FoodMenu"
import Drinks from "./Views/Drinks/Drinks"
import Contact from "./Views/Contact/Contact"
import "./master-super-friends.css"

const SuperFriends = () => {

    let superFriendsViews = [
        {
            name: "Events",
            component: <Events />
        },
        {
            name: "Food",
            component: <FoodMenu />
        },
        {
            name: "Drinks",
            component: <Drinks />
        },
        {
            name: "Contact",
            component: <Contact />
        },
    ]

    return (
        <div className="master-super-friends-container">
            <SuperLanding superFriendsViews={superFriendsViews} />
        </div>
    )
}

export default SuperFriends
