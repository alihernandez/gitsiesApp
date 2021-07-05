import React from "react";
import { Link } from "react-router-dom";
import {
  Card, Col, Button, CardTitle, CardText, Row
} from 'reactstrap';
import coldCup from '../../images/IcedDrinks.jpg';
import hotCup from '../../images/hotCup.jpg';
import foodImg from '../../images/HappyTrailsToast.jpg';
import "./Menu.css";
import "../../App.css";

// import gitsiesMenu from "../../../images/gitsiesMenu.jpg";



export default function Menu(props) {
  return (
    <div className="d-flex justify-content-center menus">
     

      {/* <h1 id="title">Gitsie's Menu</h1>
      <img src={gitsiesMenu} alt="menuPic"/>
      <p>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
        mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
        lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
        in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p> */}
      {/* <div> */}
      <Row>
      <Col sm="4">
        
        <Card className="gitcard">
          <CardTitle tag="h5">Hot Drink Menu</CardTitle>
          <img className="cardImg" width="25%" src={hotCup} alt="altText" />
          
          <Link to={'/hotDrink'}>
          <Button>Hot Drinks!</Button> 
          </Link>
        </Card>
        
      </Col>
      <Col sm="4">
        
        <Card className="gitcard">
          <CardTitle tag="h5">Cold Drink Menu</CardTitle>
          <img className="cardImg" width="25%" src={coldCup} alt="altText" />
         
          <Link to={'/coldDrink'}>
          <Button>Cold Drinks!</Button> 
          </Link>
        </Card>
       
      </Col>
      <Col sm="4">
        
        <Card className="gitcard">
          <CardTitle tag="h5">Food Menu</CardTitle>
          <img className="cardImg" width="25%" src={foodImg} alt="altText" />
          
          <Link to={'/food'}>
          <Button>Food!</Button> 
          </Link>
        </Card>
        
      </Col>
    </Row>
      
    <br />
      
    </div>
    
  );
}















