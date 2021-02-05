import React from 'react'
import moment from "moment"
import events from "./events.json"
import EventCard from "./EventCard/EventCard"
import "./events.css"

const Events = () => {

    let currentMonth = moment().format("MMMM");
    let currentDay = moment().format("DD");

    return (
        <div className="info-graphic">
            <h1 className="events-h1">{currentMonth + " Events"}</h1>
            <div className="events">
                {events.map( event => (
                    <EventCard 
                        name={event.name}
                        day={event.day}
                        description={event.description}
                    />
                ))}
            </div>
        </div>
    )
}

export default Events
