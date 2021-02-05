import React from 'react'
import "./event-card.css"

const EventCard = ({ name, day, description }) => {
    return (
        <div className="event-card-container">
            <h4 className="day">February, {day} 2021</h4>
            <h3 className="name">{name}</h3>
            <p>{description}</p>
            <hr />
        </div>
    )
}

export default EventCard
