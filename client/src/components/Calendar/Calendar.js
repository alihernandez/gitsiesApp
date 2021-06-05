import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

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
      <p>
        Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula. Curabitur pellentesque
        turpis sit amet eros iaculis, a mollis arcu dictum. Ut vel ante eget massa ornare placerat.
        Etiam nisl orci, finibus sodales volutpat et, hendrerit ut dolor. Suspendisse porta dictum
        nunc, sed pretium risus rutrum eget. Nam consequat, ligula in faucibus vestibulum, nisi
        justo laoreet risus, luctus luctus mi lacus sit amet libero. Class aptent taciti sociosqu ad
        litora torquent per conubia nostra, per inceptos himenaeos. Mauris pretium condimentum
        tellus eget lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec
        placerat accumsan mi, ut congue neque placerat eu. Donec nec ipsum in velit pellentesque
        vehicula sit amet at augue. Maecenas aliquam bibendum congue. Pellentesque semper, lectus
        non ullamcorper iaculis, est ligula suscipit velit, sed bibendum turpis dui in sapien.
      </p>
    </div>
  );
}

export default Cal;
