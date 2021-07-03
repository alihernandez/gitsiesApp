import React from "react";
import { Link } from "react-router-dom";
import {
  Card, Col, Container, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody, Row
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
          <img className="cardImg" width="25%" src={hotCup} alt="Card image cap" />
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Link to={'/hotDrink'}>
          <Button>Hot Drinks!</Button> 
          </Link>
        </Card>
        
      </Col>
      <Col sm="4">
        
        <Card className="gitcard">
          <CardTitle tag="h5">Cold Drink Menu</CardTitle>
          <img className="cardImg" width="25%" src={coldCup} alt="Card image cap" />
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Link to={'/coldDrink'}>
          <Button>Cold Drinks!</Button> 
          </Link>
        </Card>
       
      </Col>
      <Col sm="4">
        
        <Card className="gitcard">
          <CardTitle tag="h5">Food Menu</CardTitle>
          <img className="cardImg" width="25%" src={foodImg} alt="Card image cap" />
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Link to={'/food'}>
          <Button>Food!</Button> 
          </Link>
        </Card>
        
      </Col>
    </Row>
      
    <br />
      {/* <table class="menuDisplay">
        <th class="menuName" colspan="3">
          
          <span>Cold Drink</span>
          <br />
          <img src="https://drive.google.com/thumbnail?id=1r2dJEovr1yGdVKTg1dFz1VGeb6ztITqL" alt="" id="coldDrinkMenu"/>

          </th>
          <tr class="coldDrink">
          <th>Item</th>
          <th>Description</th>
          <th>Price</th>
          </tr>
          <tr>
            <td class="coldDrinkName">
            Classic Iced Coffee
            </td>
            <td class="coldDrinkDescription">
              description
            </td>
            <td class="coldDrinkPrice">
              price
            </td>
          </tr>

          <tr>
            <td class="coldDrinkName">
            Cold Brew
            </td>
            <td class="coldDrinkDescription">
              description
            </td>
            <td class="coldDrinkPrice">
              price
            </td>
          </tr>

          <tr>
            <td class="coldDrinkName">
            Iced Latte
            </td>
            <td class="coldDrinkDescription">
              description
            </td>
            <td class="coldDrinkPrice">
              price
            </td>
          </tr>

          <tr>
            <td class="coldDrinkName">
            Iced Americano
            </td>
            <td class="coldDrinkDescription">
              description
            </td>
            <td class="coldDrinkPrice">
              price
            </td>
          </tr>
          <tr>
            <td class="coldDrinkName">
            Iced Mocha Latte
            </td>
            <td class="coldDrinkDescription">
              description
            </td>
            <td class="coldDrinkPrice">
              price
            </td>
          </tr>

          <tr>
            <td class="coldDrinkName">
            Iced Caramel Macchiato
            </td>
            <td class="coldDrinkDescription">
              description
            </td>
            <td class="coldDrinkPrice">
              price
            </td>
          </tr>

          <tr>
            <td class="coldDrinkName">
            Iced Skinny Vanilla Latte
            </td>
            <td class="coldDrinkDescription">
              description
            </td>
            <td class="coldDrinkPrice">
              price
            </td>
          </tr>

          <tr>
            <td class="coldDrinkName">
            Iced Chai Tea Latte
            </td>
            <td class="coldDrinkDescription">
              description
            </td>
            <td class="coldDrinkPrice">
              price
            </td>
          </tr>

          <tr>
            <td class="coldDrinkName">
            Iced Golden Milk Latte
            </td>
            <td class="coldDrinkDescription">
              description
            </td>
            <td class="coldDrinkPrice">
              price
            </td>
          </tr>

          <tr>
            <td class="coldDrinkName">
            Iced Matcha Latte
            </td>
            <td class="coldDrinkDescription">
              description
            </td>
            <td class="coldDrinkPrice">
              price
            </td>
          </tr>

          <tr>
            <td class="coldDrinkName">
            Chocolate Milk
            </td>
            <td class="coldDrinkDescription">
              description
            </td>
            <td class="coldDrinkPrice">
              price
            </td>
          </tr>

          <tr>
            <td class="coldDrinkName">
            Strawberry Milk
            </td>
            <td class="coldDrinkDescription">
            fresh smashed strawberries, vanilla, milk
            </td>
            <td class="coldDrinkPrice">
              price
            </td>
          </tr>

          <tr>
            <td class="coldDrinkName">
            Fresh Brewed Iced Tea
            <br />
             *add strawberry, raspberry or pomegranate*
            </td>
            <td class="coldDrinkDescription">
              description
            </td>
            <td class="coldDrinkPrice">
              price
            </td>
          </tr>

          <tr>
            <td class="coldDrinkName">
            Fresh Brewed Sweet Tea
            </td>
            <td class="coldDrinkDescription">
              description
            </td>
            <td class="coldDrinkPrice">
              price
            </td>
          </tr>

          <tr>
            <td class="coldDrinkName">
            Iced Matcha Green Tea
            </td>
            <td class="coldDrinkDescription">
              description
            </td>
            <td class="coldDrinkPrice">
              price
            </td>
          </tr>

          <tr>
            <td class="coldDrinkName">
            Fresh Squeezed Lemonade
            <br />
            *add strawberry, raspberry or pomegranate*
            </td>
            <td class="coldDrinkDescription">
              description
            </td>
            <td class="coldDrinkPrice">
              price
            </td>
          </tr>

          <tr>
            <td class="coldDrinkName">
            Magic Mango Lemonade
            </td>
            <td class="coldDrinkDescription">
            Organic mango syrup, strawberry
            </td>
            <td class="coldDrinkPrice">
              price
            </td>
          </tr>

          <tr>
            <td class="coldDrinkName">
            
            </td>
            <td class="coldDrinkDescription">
              description
            </td>
            <td class="coldDrinkPrice">
              price
            </td>
          </tr>
          </table>
          </div>

          <br />
          <br />

          <table class="menuDisplay">
          <th class="menuName" colspan="3">
            <span>Hot Drink Menu</span>
            <br />
            <p>*all hot drinks come in 12oz, 16oz, or 20oz*</p>
            <br />
            <img src="https://drive.google.com/thumbnail?id=1sABfQ8vGXPQZvKaWphWB-q5DCHJjivQY" id="" alt="" />
            </th>
          <tr class="hotDrink">
          <th>Item</th>
          <th>Description</th>
          <th>Price</th>
          </tr>
          <tr>
            <td class="hotDrinkName">
            Single Source Drip Brew of The Day
            </td>
            <td class="hotDrinkDescription">
              description
            </td>
            <td class="hotDrinkPrice">
              price
            </td>
          </tr>

          <tr>
            <td class="hotDrinkName">
            Double Shot Espresso
            </td>
            <td class="hotDrinkDescription">
              description
            </td>
            <td class="hotDrinkPrice">
              price
            </td>
          </tr>

          <tr>
            <td class="hotDrinkName">
            Italian Macchiato
            </td>
            <td class="hotDrinkDescription">
            double shot espresso ‘marked’ with foam
            </td>
            <td class="hotDrinkPrice">
              price
            </td>
          </tr>

          <tr>
            <td class="hotDrinkName">
            Americano
            </td>
            <td class="hotDrinkDescription">
              description
            </td>
            <td class="hotDrinkPrice">
              price
            </td>
          </tr>

          <tr>
            <td class="hotDrinkName">
            Latte
            </td>
            <td class="hotDrinkDescription">
              description
            </td>
            <td class="hotDrinkPrice">
              price
            </td>
          </tr>

          <tr>
            <td class="hotDrinkName">
            Cappuccino
            </td>
            <td class="hotDrinkDescription">
              description
            </td>
            <td class="hotDrinkPrice">
              price
            </td>
          </tr>

          <tr>
            <td class="hotDrinkName">
            Mocha Latte
            </td>
            <td class="hotDrinkDescription">
              description
            </td>
            <td class="hotDrinkPrice">
              price
            </td>
          </tr>

          <tr>
            <td class="hotDrinkName">
            White Mocha Latte
            </td>
            <td class="hotDrinkDescription">
              description
            </td>
            <td class="hotDrinkPrice">
              price
            </td>
          </tr>

          <tr>
            <td class="hotDrinkName">
            Caramel Macchiato
            </td>
            <td class="hotDrinkDescription">
              description
            </td>
            <td class="hotDrinkPrice">
              price
            </td>
          </tr>

          <tr>
            <td class="hotDrinkName">
            Skinny Vanilla Latte
            </td>
            <td class="hotDrinkDescription">
              description
            </td>
            <td class="hotDrinkPrice">
              price
            </td>
          </tr>

          <tr>
            <td class="hotDrinkName">
            Chai Tea Latte
            </td>
            <td class="hotDrinkDescription">
              description
            </td>
            <td class="hotDrinkPrice">
              price
            </td>
          </tr>
          
          <tr>
            <td class="hotDrinkName">
            Golden Milk Latte
            </td>
            <td class="hotDrinkDescription">
              It's a pee thing...
            </td>
            <td class="hotDrinkPrice">
              price
            </td>
          </tr>

          <tr>
            <td class="hotDrinkName">
            Matcha Latte
            </td>
            <td class="hotDrinkDescription">
              description
            </td>
            <td class="hotDrinkPrice">
              price
            </td>
          </tr>

          <tr>
            <td class="hotDrinkName">
            Hot Chocolate
            </td>
            <td class="hotDrinkDescription">
            *add whipped cream*
            </td>
            <td class="hotDrinkPrice">
              price
            </td>
          </tr>

          </table>

          <br />
          <br />

          <table class="menuDisplay">
            <tbody>
            <tr>
            <td class="teaItems"> 
            <u><strong>Hot Tea</strong></u>
            <br />
              <ul>
                <li>english breakfast</li>
                <li>earl grey</li>
                <li>mao feng green</li>
                <li>chai</li>
                <li>peppermint</li>
                <li>superfruit</li>
              </ul>
            </td>
          </tr>
            </tbody>
          </table>

          <br />
          <br />
      
      <table class="menuDisplay">
        <tbody>
          <th class="menuName" colspan="3">
            <span>Food Menu</span>

            </th>
              <tr>
                <th class="food" colspan="3">
                  <p>Smoothies: </p>
                  
                  <p>made to order with fresh fruits and vegetables</p>
                </th>
              </tr>
              <tr>
                <td class="foodItem">
                Wild Berry
                </td>

                <td class="foodDescription">
                Mixed Berries, Banana, Spinach, Apple Juice, Chia, Flax
                </td>

                <td class="foodPrice">
                $5.00
                </td>
              </tr>

              <tr>
                <td class="foodItem">
                Tropical Green
                </td>

                <td class="foodDescription">
                Mango, Pineapple, Banana, Spinach, Soursop Juice, Chia
                </td>

                <td class="foodPrice">
                $5.00
                </td>
              </tr>

              <tr>
                <td class="foodItem">
                Strawberry Sunshine
                </td>

                <td class="foodDescription">
                Strawberry, Banana, Orange Juice
                </td>

                <td class="foodPrice">
                $5.00
                </td>
              </tr>

              <tr>
                <td class="foodItem">
                Tropical Green
                </td>

                <td class="foodDescription">
                Mango, Pineapple, Banana, Spinach, Soursop Juice, Chia
                </td>

                <td class="foodPrice">
                $5.00
                </td>
              </tr>

              <th class="food" colspan="3">
                  <p>Granola Bowls: </p>
                </th>
                <tr>
                <td class="foodItem">
                That Berry Bowl
                </td>

                <td class="foodDescription">
                Granola, Yogurt, Mixed Berries, Chia, Coconut,Honey
                </td>

                <td class="foodPrice">
                
                </td>
                </tr>

                <tr>
                <td class="foodItem">
                That Banana Bowl
                </td>

                <td class="foodDescription">
                Granola, Yogurt, Banana, Peanut Butter, Chocolate Chips
                </td>

                <td class="foodPrice">
                
                </td>
                </tr>


                <th class="food" colspan="3">
                  <p>Toasts: </p>
                </th>
                <tr>
                <td class="foodItem">
                Avocado Toast
                </td>

                <td class="foodDescription">
                Smashed Avo, Lemon, Salt, Pepper, Whole Grain Toast *add sriracha or everything bagel seasoning*
                </td>

                <td class="foodPrice">
                
                </td>
                </tr>

                <tr>
                <td class="foodItem">
                PBH
                </td>

                <td class="foodDescription">
                Peanut Butter, Banana, Honey, Whole Grain Toast
                </td>

                <td class="foodPrice">
                
                </td>
                </tr>

                <tr>
                <td class="foodItem">
                Happy Trails
                </td>

                <td class="foodDescription">
                Peanut Butter, Strawberry, Granola, Coconut, Honey
                </td>

                <td class="foodPrice">
                
                </td>
                </tr>

                <tr>
                <td class="foodItem">
                Muddy Trails
                </td>

                <td class="foodDescription">
                Nutella, Banana, Granola, Coconut, Honey
                </td>

                <td class="foodPrice">
                
                </td>
                </tr>

                <th class="food" colspan="3">
                  <p>Croissants: </p>
                </th>
                <tr>
                <td class="foodItem">
                Nutella 
                </td>

                <td class="foodDescription">
                *add strawberry or banana*
                </td>

                <td class="foodPrice">
                
                </td>
                </tr>

                <tr>
                <td class="foodItem">
                Ham & Swiss
                </td>

                <td class="foodDescription">
                Boarshead Black Forest Ham and Swiss Cheese Melted
                </td>

                <td class="foodPrice">
                
                </td>

                </tr>

                <tr>
                <td class="foodItem">
                Turkey & Cheddar
                </td>

                <td class="foodDescription">
                Boarshead Ovengold Turkey and Cheddar Cheese Melted
                </td>

                <td class="foodPrice">
                
                </td>

                </tr>

                <tr>
                <td class="foodItem">
                Cheese
                </td>

                <td class="foodDescription">
                Swiss or Cheddar Cheese
                </td>

                <td class="foodPrice">
                
                </td>

                </tr>

                <tr>
                <td class="foodItem">
                Spinach Artichoke Parmesan 
                </td>

                <td class="foodDescription">
                *add ham or turkey*
                </td>

                <td class="foodPrice">
                
                </td>

                </tr>

                <th class="food" colspan="3">
                  <p>Sandwiches: </p>
                </th>
                <tr>
                <td class="foodItem">
                Classic Ham & Swiss
                </td>

                <td class="foodDescription">
                Ham, Cheese, Lettuce, Tomato, Mayo, Mustard, Whole Grain or Sourdough Bread
                </td>

                <td class="foodPrice">
                
                </td>
                </tr>

                <tr>
                <td class="foodItem">
                Classic Turkey & Cheddar
                </td>

                <td class="foodDescription">
                Turkey, Cheese, Lettuce, Tomato, Mayo, Mustard,Whole Grain or Sourdough Bread
                </td>

                <td class="foodPrice">
                
                </td>
                </tr>

                <tr>
                <td class="foodItem">
                Caprese
                </td>

                <td class="foodDescription">
                Fresh Mozzarella, Tomato, Basil Pesto, Balsamic Reduction, Whole Grain or Sourdough Bread
                </td>

                <td class="foodPrice">
                
                </td>
                </tr>

                <tr>
                <td class="foodItem">
                Green Goddess
                </td>

                <td class="foodDescription">
                Fresh Mozzarella, Cucumber, Avocado, Lightly Dressed Greens, Whole Grain or Sourdough Bread
                </td>

                <td class="foodPrice">
                
                </td>
                </tr>

                <th class="food" colspan="3">
                  <p>Salads: </p>
                </th>
                <tr>
                <td class="foodItem">
                Garden
                </td>

                <td class="foodDescription">
                Spring Mix, Tomato, Cucumber, Carrot, Avocado, House Vinaigrette
                </td>

                <td class="foodPrice">
                
                </td>
                </tr>

                <tr>
                <td class="foodItem">
                Chef
                </td>

                <td class="foodDescription">
                Spring Mix, Cheddar, Swiss, Turkey, Ham, Tomato, Cucumber, Carrot, House Vinaigrette
                </td>

                <td class="foodPrice">
                
                </td>
                </tr>

                <tr>
                <td class="foodItem">
                Caprese
                </td>

                <td class="foodDescription">
                Spring Mix, Fresh Mozzarella, Tomato, Balsamic Reduction, Pesto Vinaigrette
                </td>

                <td class="foodPrice">
                
                </td>
                </tr>


                


                
              
              

          
        </tbody>
      </table> */}

      <br />

      {/* <table class="alternatives">
        <tbody>
          <th>
          Milk Alternatives:
          </th>
          <th colspan="2">
          Flavors:
          </th>
          <tr>
            <td>Almond</td>
            <td>vanilla or white chocolate</td>
          </tr>
          <tr>
            <td>Soy</td>
            <td>caramel or sugar free vanilla</td>

          </tr>
          <tr>
            <td>Coconut</td>
            <td>hazelnut</td>
          </tr>
          <tr>
            <td>Oat</td>
            <td>Mocha</td>
          </tr>
        </tbody>
      </table> */}
      
    </div>
    
  );
}















