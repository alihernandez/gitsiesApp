import React from 'react';
import { Link } from "react-router-dom";
import fbIcn from "../../icons/facebook.png";
import igIcn from "../../icons/instagram.png";
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';

import '../../App.css';

const Footer = (props) => {
  return (
    <div className="footer">
      <div>
        <h1>Become a Gitsie's regular today!</h1>
        <h6>*Sporting Events *Weddings *Corporate Events *Private Parties *Community Gatherings*</h6>
        
        
        <p style={{textAlign:"center"}}>Please
        submit a completed <a href="/contact">Event Booking Form</a> and we will contact you shortly to
        discuss rates and details. </p>
      </div>
      {/* <a href="https://facebook.com" >
        <img src={fbIcn} alt="fbIcn" href="https://facebook.com" />
        </a>

        <a href="https://instagram.com" >
        <img src={igIcn} alt="igIcn"/>
        </a> */}

        <div className="socialLinks col">

        <Link to={'/'}>
        <Button>Home</Button> 
        </Link>

        <br />

        <Link to={'/Contact'}>
        <Button>Contact Us!</Button> 
        </Link>

        <br />

        <Link to={'/calendar'}>
        <Button>Events!</Button> 
        </Link>

        </div>

        <p style={{textAlign:"center"}}>&copy; Gitsie's Coffee and Provisions 2021</p>
        <a href="/Terms"><p style={{textAlign:"center"}}>Terms & Services</p></a>
        
    </div>
  );
};

export default Footer;