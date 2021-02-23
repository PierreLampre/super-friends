import React from 'react'
import "./event-card.css"

const EventCard = ({ name, month, day, year, description }) => {
    return (
        <div className="event-card-container">
            <h4 className="day">{month}, {day} {year}</h4>
            <h3 className="name">{name}</h3>
            <p>{description}</p>
            <hr />
        </div>
    )
}

export default EventCard
