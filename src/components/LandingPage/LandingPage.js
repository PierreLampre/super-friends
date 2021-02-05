import React from 'react'
import { Link } from "react-router-dom"
import "./landing-page.css"

const LandingPage = () => {
    return (
        <div className="landing-page-container">
            <h1>Landing Page</h1>
            <div className="link-box">
                <Link to="/super-friends">
                    Super Friends Bar
                </Link>
                <Link to="/arrow-cafe">
                    Arrow Cafe
                </Link>
                <Link to="/peace">
                    Peace
                </Link>
            </div>
        </div>
    )
}

export default LandingPage
