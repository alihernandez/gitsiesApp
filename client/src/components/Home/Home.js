import React from "react";
import {useSpring, animated} from 'react-spring'
import fbIcn from "../../icons/facebook.png";
import igIcn from "../../icons/instagram.png";
import foodTruck from "../../images/FoodTruck2.jpg";


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
        <img className="gitsiesLogo" alt="gitsielogo" src={logo} />
        </animated.div>
      </div>
      <p style={{textAlign:"center"}}>
      Gitsie’s Coffee & Provisions is proud to call the Roaring Fork Valley home! 
      <br /> We are currently booking events for August and beyond. 
      <br /> Keep a lookout for popup events through our social media.
      </p>
      <br />

      <div className="aboutUs">
      <h2>About Us</h2>

      <p>We are a homegrown, women owned business that has been traveling the country, serving
specialty coffee and food, since 2015. One of our co-owners was born and raised here in the
valley, so when COVID clipped our wings, we couldn't think of a better place to call home.</p>

<p>Coffee is the foundation and life-blood of our restaurant. We serve only the best coffee that is
artfully sourced and roasted by STRONGTREE COFFEE. Our food menu was thoughtfully
curated to provide you with simple, fresh, organic and wholesome fare.</p>

<p>Caring for our Earth is very important at Gitsie’s, and all of our disposables (to-go cups,
containers, etc) are all 100% compostable and made from sustainable sources. We are always
looking to find ways to reduce our impact.</p>

<p>We have specialized in catering world class equestrian events, but have also set up at art fairs,
corporate events, charity events, concerts, other sporting events, and private parties. Gitsie’s
can custom design a food menu to suit your event needs and there will always be a full service
espresso bar. Please <a href="/contact">contact</a> us to book for the summer of 2021!</p>
<br />
<img className="foodTruck" src= {foodTruck} alt="fooTru"/>
<p>We look forward to serving you!</p>
</div>

      <br />
      <div className="socialLinks d-flex justify-content-center">

        <a href="https://facebook.com" >
        <img src={fbIcn} alt="fbIcn" href="https://facebook.com" />
        </a>

        <a href="https://instagram.com" >
        <img src={igIcn} alt="igIcn" />
        </a>

        <br />

        

      </div>
     
    </div>
  );
}

export default Home;
