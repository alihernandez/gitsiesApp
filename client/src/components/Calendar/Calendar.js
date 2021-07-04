import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import giddyUp from "../../images/CustomBlend.jpg";

const localizer = momentLocalizer(moment);
const myEventsList = [
  { start: new Date(), end: new Date(), title: "special event" }
];


function Cal() {
  return (
    <div>
      <h1 style={{textAlign:"center"}}>Upcoming Events</h1>
      <div className="cal">
        <Calendar
          localizer={localizer}
          events={myEventsList}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          />
      </div>
      <img src={ giddyUp } alt="coffeePic" className="customBlend"/>
      
    </div>
  );
}

export default Cal;
