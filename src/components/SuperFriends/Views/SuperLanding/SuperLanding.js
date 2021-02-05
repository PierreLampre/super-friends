import React, {useState} from 'react'
import "./super-landing.css"

const SuperLanding = ({ superFriendsViews }) => {

    const [loadedView, setLoadedView] = useState(superFriendsViews[0].component);

    function changeTheView(value) {
        for (let i = 0; i < superFriendsViews.length; i++) {
            if(value === superFriendsViews[i].name) {
                setLoadedView(superFriendsViews[i].component);
            }
        }
    }

    return (
        <div className="super-landing-container">
            <h1 className="logo">Super Friends</h1>
            {loadedView}
            <nav className="nav">
              <button 
                className="sf-nav-button"
                name="Events"
                onClick={(e) => changeTheView(e.target.name)}
              >
                    Events</button>
              <button 
                className="sf-nav-button"
                name="Food"
                onClick={(e) => changeTheView(e.target.name)}
              >
                  Food</button>
              <button 
                className="sf-nav-button"
                name="Drinks"
                onClick={(e) => changeTheView(e.target.name)}
              >
                  Drinks</button>
              <button 
                className="sf-nav-button"
                name="Contact"
                onClick={(e) => changeTheView(e.target.name)}
              >
                  Contact</button>
            </nav>
        </div>    
    )
}

export default SuperLanding
