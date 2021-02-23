import React from 'react'
import moment from "moment"
import entireMonthOfEvents from "./events.json"
import EventCard from "./EventCard/EventCard"
import uniqid from "uniqid"
import "./events.css"

const Events = () => {

    //so the month and year change is automated
    //and the day can be referenced to filter out 
    //old events 
    let currentMonth = moment().format("MMMM");
    let currentYear = moment().format("YYYY")
    let currentDay = parseInt(moment().format("DD"));

    let events = [];

    //filter out old events and push current events 
    //to "events" array
    for (let i = 0; i < entireMonthOfEvents.length; i++) {
        if (currentDay <= parseInt(entireMonthOfEvents[i].day)) {
            events.push(entireMonthOfEvents[i]);
        }
    }

    return (
        <div className="info-graphic">
            <h1 className="events-h1">{currentMonth + " Events"}</h1>
            <div className="events">
                {events.map(event => (
                    <EventCard
                        name={event.name}
                        month={currentMonth}
                        day={event.day}
                        year={currentYear}
                        description={event.description}
                        key={uniqid()}
                    />
                ))}
            </div>
        </div>
    )
}

export default Events
