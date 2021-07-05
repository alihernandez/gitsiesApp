import React from "react";
// import { Link } from "react-router-dom";
import {
  // Card,
  // CardImg,
  // CardText,
  // CardBody,
  // CardDeck,
  // CardTitle,
  // CardSubtitle,
  // Button,
  Media
} from "reactstrap";
import drip from "../../images/dripCoffee.jpg";
import ess from "../../images/esspresso.jpg";
import machiato from "../../images/machiato.jpg";
import americano from "../../images/americano.jpg";
import latte from "../../images/latte.jpg";
import cappucino from "../../images/cappucino.jpg";
import whiteLatte from "../../images/whiteMochaLatte.jpg";
import matcha from "../../images/mochaLatte.jpg";
import caramelMach from "../../images/caramelMachiato.jpg";
import skinny from "../../images/skinnyVanilla.jpg";
import chaiTea from "../../images/chaiTeaLatte.jpg";
import hotCoffee from "../../images/CoffeeAhead.jpg"



import "./Menu.css";

export default function hotDrink(props) {
  return (
    <div className="col fatHead">
      <br />
      <h1>Hot Drinks</h1>
      <img className="avos" src={hotCoffee} alt="hotStuff" />
      <p>*all hot drinks come in 12oz, 16oz, or 20oz*</p>

      <div className="hotdrink">

      <Media className="hotItem">
        <Media left top href="#">
        <Media src={drip} alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading className="itemName">
          Single Source Drip Brew of The Day
          </Media>
          
        </Media>
      </Media>

      <Media className="mt-1 hotItem">
        <Media left middle href="#">
          <Media src={ess} alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading className="itemName">
          Double Shot Espresso
          </Media>
          
        </Media>
      </Media>

      <Media className="mt-1 hotItem">
        <Media left middle href="#">
          <Media src={machiato} alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading className="itemName">
          Italian Macchiato
          </Media>
          
        </Media>
      </Media>

      <Media className="mt-1 hotItem">
        <Media left middle href="#">
          <Media src={americano} alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading className="itemName">
          Americano
          </Media>
          
        </Media>
      </Media>

      <Media className="mt-1 hotItem">
        <Media left bottom href="#">
          <Media src={latte} alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading className="itemName">
          Latte
          </Media>
          
        </Media>
      </Media>

      <Media className="mt-1 hotItem">
        <Media left bottom href="#">
          <Media src={cappucino} alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading className="itemName">
          Cappuccino
          </Media>
          
        </Media>
      </Media>

      <Media className="mt-1 hotItem">
        <Media left bottom href="#">
          <Media src={latte} alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading className="itemName">
          Mocha Latte
          </Media>
          
        </Media>
      </Media>

      <Media className="mt-1 hotItem">
        <Media left bottom href="#">
          <Media src={whiteLatte} alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading className="itemName">
          White Mocha Latte
          </Media>
          
        </Media>
      </Media>

      <Media className="mt-1 hotItem">
        <Media left bottom href="#">
          <Media src={skinny} alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading>
          Skinny Vanilla Latte
          </Media>
          
        </Media>
      </Media>

      <Media className="mt-1 hotItem">
        <Media left bottom href="#">
          <Media src={chaiTea} alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading className="itemName">
          Kilogram Chai Tea Latte
          </Media>
          
        </Media>
      </Media>

      <Media className="mt-1 hotItem">
        <Media left bottom href="#">
          <Media src={caramelMach} alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading>
          Reshi Golden Milk Latte
          </Media>
          
        </Media>
      </Media>

      <Media className="mt-1 hotItem">
        <Media left bottom href="#">
          <Media src={matcha} alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading className="itemName">
          Gotcha Matcha Latte
          </Media>
          
        </Media>
      </Media>
      
      <Media className="mt-1 hotItem">
        <Media left bottom href="#">
          {/* <Media object data-src="holder.js/64x64" alt="Generic placeholder image" /> */}
        </Media>
        <Media body>
          <Media heading className="itemName">
          Hot Chocolate *add whipped cream*
          </Media>
          
        </Media>
      </Media>
      
      <Media className="mt-1 hotItem">
        <Media left bottom href="#">
          {/* <Media object data-src="holder.js/64x64" alt="Generic placeholder image" /> */}
        </Media>
        <Media body>
          <Media heading className="itemName">
          Hot Tea
          </Media>
          
        </Media>
      </Media>

      
      </div>

      <div className="addOns">
        
        <h6>Available Syrup Flavors <br />(Joe’s Organic):</h6> 
        Almond*Vanilla*White Chocolate*Caramel*Sugar Free Vanilla*Hazelnut*Mocha
        <br />
        <br />
        <h6>Milk Alternatives <br />(Pacific Foods Organic):</h6> 
        Oat*Coconut*Almond
  
      </div>
    </div>
    
   

    
  );
}
















