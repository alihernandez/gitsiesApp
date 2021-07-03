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
import ColdDrinks from "../../images/ColdDrinks.jpg"



import "./Menu.css";

export default function hotDrink(props) {
  return (
    <div className="col hotHead">
      <br />
      <h1>Cold Drinks</h1>
      <img src={ColdDrinks} alt="hotStuff" />
      <p>*all cold drinks come in 16oz or 20oz*</p>

      <div className="hotdrink">

      <Media className="hotItem">
        <Media left top href="#">
        <Media src={drip} alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading>
          Classic Iced Coffee
          </Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </Media>
      </Media>

      <Media className="mt-1 hotItem">
        <Media left middle href="#">
          <Media src={ess} alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading>
          Cold Brew
          </Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </Media>
      </Media>

      <Media className="mt-1 hotItem">
        <Media left middle href="#">
          <Media src={machiato} alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading>
          Iced Latte
          </Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </Media>
      </Media>

      <Media className="mt-1 hotItem">
        <Media left middle href="#">
          <Media src={americano} alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading>
          Iced Americano
          </Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </Media>
      </Media>

      <Media className="mt-1 hotItem">
        <Media left bottom href="#">
          <Media src={latte} alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading>
          Iced Mocha Latte
          </Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </Media>
      </Media>

      <Media className="mt-1 hotItem">
        <Media left bottom href="#">
          <Media src={cappucino} alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading>
          Iced Caramel Macchiato
          </Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </Media>
      </Media>

      <Media className="mt-1 hotItem">
        <Media left bottom href="#">
          <Media src={latte} alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading>
          Iced Skinny Vanilla Latte
          </Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </Media>
      </Media>

      <Media className="mt-1 hotItem">
        <Media left bottom href="#">
          <Media src={whiteLatte} alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading>
          Iced Kilogram Chai Tea Latte
          </Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </Media>
      </Media>

      <Media className="mt-1 hotItem">
        <Media left bottom href="#">
          <Media src={skinny} alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading>
          Iced Reshi Golden Milk Latte
          </Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </Media>
      </Media>

      <Media className="mt-1 hotItem">
        <Media left bottom href="#">
          <Media src={chaiTea} alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading>
          Iced Gotcha Matcha Latte
          </Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </Media>
      </Media>

      <Media className="mt-1 hotItem">
        <Media left bottom href="#">
          <Media src={caramelMach} alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading>
          Chocolate Milk
          </Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </Media>
      </Media>

      <Media className="mt-1 hotItem">
        <Media left bottom href="#">
          <Media src={matcha} alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading>
          Strawberry Milk- fresh smashed strawberries, vanilla, milk
          </Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </Media>
      </Media>
      
      <Media className="mt-1 hotItem">
        <Media left bottom href="#">
          <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading>
          Fresh Brewed Iced Tea *add strawberry, raspberry or pomegranate*
          </Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </Media>
      </Media>
      
      <Media className="mt-1 hotItem">
        <Media left bottom href="#">
          <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading>
          Fresh Brewed Sweet Tea
          </Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </Media>
      </Media>

      <Media className="mt-1 hotItem">
        <Media left bottom href="#">
          <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading>
          Iced Matcha Green Tea
          </Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </Media>
      </Media>

      <Media className="mt-1 hotItem">
        <Media left bottom href="#">
          <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading>
          Fresh Squeezed Lemonade*add strawberry, raspberry or pomegranate*
          </Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </Media>
      </Media>

      <Media className="mt-1 hotItem">
        <Media left bottom href="#">
          <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading>
          Magic Mango Lemonade- organic mango syrup, strawberry
          </Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
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
















