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
// import ess from "../../images/esspresso.jpg";
// import machiato from "../../images/machiato.jpg";
// import americano from "../../images/americano.jpg";
// import latte from "../../images/latte.jpg";
// import cappucino from "../../images/cappucino.jpg";
// import whiteLatte from "../../images/whiteMochaLatte.jpg";
// import matcha from "../../images/mochaLatte.jpg";
// import caramelMach from "../../images/caramelMachiato.jpg";
// import skinny from "../../images/skinnyVanilla.jpg";
// import chaiTea from "../../images/chaiTeaLatte.jpg";
import avocados from "../../images/FreshLemonade.jpg"



import "./Menu.css";

export default function hotDrink(props) {
  return (
    <div className="col fatHead">
      <br />
      <span className="pageTitle">Gitsie's Food Menu</span>
      <img className="avos" src={avocados} alt="foodPicf" />
      <br />
      <br />
      
    <div className="foods">
      <h1 className="itemTitle">Smoothie:</h1> 
      <p>made to order with fresh fruits and vegetables</p>
      <div className="fitmen">
      <Media className="foodItem">
        <Media left top href="#">
        <Media src={drip} alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading className="itemName">
          Wild Berry:
          </Media>
          Mixed Berries, Banana, Spinach, Apple Juice, Chia,
Flax
        </Media>

        <Media body>
          <Media heading className="itemName">
          Tropical Green:
          </Media>
          Mango, Pineapple, Banana, Spinach, Soursop
Juice,Chia
        </Media>

        <Media body>
          <Media heading className="itemName">
          Strawberry Sunshine:
          </Media>
          Strawberry, Banana, Orange Juice
        </Media>
        
      </Media>

      
      </div>

      
      </div>

      <br />
      <br />

      <div className="foods">
      <h1 className="itemTitle">Granola Bowl:</h1> 
      <div className="fitmen">
      <Media className="foodItem">
        <Media left top href="#">
        <Media src={drip} alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading className="itemName">
          That Berry Bowl:
          </Media>
          Granola, Yogurt, Mixed Berries, Chia, Coconut,
Honey
        </Media>

        <Media body>
          <Media heading className="itemName">
          That Banana Bowl:
          </Media>
          Granola, Yogurt, Banana, Peanut Butter,
Chocolate Chips
        </Media>

        
      </Media>

      
      </div>

      
      </div>

      <br />
      <br />

      <div className="foods">
      <h1 className="itemTitle">Toast:</h1> 
      <div className="fitmen">
      <Media className="foodItem">
        <Media left top href="#">
        <Media src={drip} alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading className="itemName">
          Avocado Toast:
          </Media>
          Smashed Avo, Lemon, Salt, Pepper, Whole Grain
Toast *add sriracha or everything bagel seasoning*
        </Media>

        <Media body>
          <Media heading className="itemName">
          PBH:
          </Media>
          Peanut Butter, Banana, Honey, Whole Grain Toast
        </Media>

        <Media body>
          <Media heading className="itemName">
          Happy Trails:
          </Media>
          Peanut Butter, Strawberry, Granola, Coconut, Honey
        </Media>

        <Media body>
          <Media heading className="itemName">
          Muddy Trails:
          </Media>
          Nutella, Banana, Granola, Coconut, Honey
        </Media>

      </Media>
      
      </div>
      </div>

      <br />
      <br />

      <div className="foods">
      <h1 className="itemTitle">Croissant- toasted to perfection:</h1> 
      <div className="fitmen">
      <Media className="foodItem">
        <Media left top href="#">
        <Media src={drip} alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading className="itemName">
          Nutella:
          </Media>
          *add strawberry or banana*
        </Media>

        <Media body>
          <Media heading className="itemName">
          Ham & Swiss:
          </Media>
Ham & Swiss- Boarshead Black Forest Ham and Swiss Cheese Melted
        </Media>

        <Media body>
          <Media heading className="itemName">
          Turkey & Cheddar:
          </Media>
          Boar's Head Ovengold Turkey and Cheddar Cheese
MeltedBoarshead Black Forest Ham and Swiss Cheese Melted
        </Media>

        <Media body>
          <Media heading className="itemName">
          Cheese:
          </Media>
          Swiss or Cheddar Cheese
        </Media>

        <Media body>
          <Media heading className="itemName">
          Spinach Artichoke Parmesan:
          </Media>
          *add ham or turkey*
        </Media>

        
      </Media>

      
      </div>

      
      </div>

      <br />
      <br />

      <div className="foods">
      <h1 className="itemTitle">Sandwich:</h1> 
      <div className="fitmen">
      <Media className="foodItem">
        <Media left top href="#">
        <Media src={drip} alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading className="itemName">
          Classic Ham & Swiss:
          </Media>
          Boar’s Head Ham, Cheese, Lettuce, Tomato,
Mayo,Mustard,Whole Grain or Sourdough Bread
        </Media>

        <Media body>
          <Media heading className="itemName">
          Classic Turkey & Cheddar:
          </Media>
          Turkey, Cheese, Lettuce, Tomato, Mayo,
Mustard,Whole Grain or Sourdough Bread
        </Media>

        <Media body>
          <Media heading className="itemName">
          Caprese:
          </Media>
          Fresh Mozzarella, Tomato, Basil Pesto, Balsamic
Reduction, Whole Grain or Sourdough Bread
        </Media>

        <Media body>
          <Media heading className="itemName">
          Green Goddess:
          </Media>
          Fresh Mozzarella, Cucumber, Avocado, Lightly
Dressed Greens, Whole Grain or Sourdough Bread
        </Media>

        
      </Media>

      
      </div>

      
      </div>

      <br />
      <br />

      <div className="foods">
      <h1 className="itemTitle">Salad:</h1> 
      <div className="fitmen">
      <Media className="foodItem">
        <Media left top href="#">
        <Media src={drip} alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading className="itemName">
          Garden:
          </Media>
          Spring Mix, Tomato, Cucumber, Carrot, Avocado, House
Vinaigrette
        </Media>

        <Media body>
          <Media heading className="itemName">
          Chef:
          </Media>
          Spring Mix, Cheddar, Swiss, Turkey, Ham, Tomato, Cucumber,
Carrot, House Vinaigrette
        </Media>

        <Media body>
          <Media heading className="itemName">
          Caprese:
          </Media>
          Spring Mix, Fresh Mozzarella, Tomato, Balsamic
Reduction, Pesto Vinaigrette
        </Media>

        
      </Media>

      
      </div>

      
      </div>

      <br />
      <br />

      

      <div className="addOns">
        
        <h4>Available Syrup Flavors <br />(Joe’s Organic):</h4> 
        Almond*Vanilla*White Chocolate*Caramel*Sugar Free Vanilla*Hazelnut*Mocha
        <br />
        <br />
        <h4>Milk Alternatives <br />(Pacific Foods Organic):</h4> 
        Oat*Coconut*Almond
  
      </div>
    </div>

    
    
   

    
  );
}
















