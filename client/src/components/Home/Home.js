import React from "react";
import {useSpring, animated} from 'react-spring'

// import Contact from "../Contact/Contact";
import "../../App.css";
import "./Home.css";
import logo from "../../images/gitsies.jpg";

function Home() {
  const props = useSpring({opacity: 1, from: {opacity: 0}})
  return (
    <div>
      
      <div
        style={{ display: 'flex',  justifyContent:'center', alignItems:'center', height: '50vh'}}
      >
        <animated.div style={props}>
        <img class="gisiesLogo" alt="gitsielogo" style={{height:"400px", padding: "50px"}}src={logo} />
        </animated.div>
      </div>
      <p style={{textAlign:"center"}}>
      Gitsie's is a mobile specialty coffee shop. Offering Coffee, Tea, Espresso, Pastries and light fare. Please contact us at Gitsies@gmail.com
      </p>
      <br />
        <h3>Private Events</h3>
        
        <ul style={{textAlign:"center"}}>Gitsie's Specialty Coffee is fully equipped to cater your
        event, no matter how big or small, with high end coffee service and a
        custom food menu to suit your needs.
          <li>-Business Meetings -Fundraisers</li>
        <li>-Sporting Events -Weddings -Corporate Events -Private Parties</li>
        </ul> 

        <p style={{textAlign:"center"}}>Please
        submit a completed <a href="/contact">Event Booking Form</a> and we will contact you shortly to
        discuss rates and details. </p>
     
    </div>
  );
}

export default Home;
