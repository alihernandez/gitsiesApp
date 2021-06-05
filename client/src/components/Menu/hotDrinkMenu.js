import React from "react";
// import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardDeck,
  CardTitle,
  CardSubtitle,
  Button,
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



import "./Menu.css";

export default function hotDrink(props) {
  return (
    <div className="container" id="menuContainer">

      <CardDeck>

      <div id="menuItem">
        <Card>
          <CardImg
            top
            width="100%"
            src={drip}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle tag="h5">Single Source Drip Brew of The Day</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Card subtitle
            </CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>

      <div id="menuItem">
        <Card>
          <CardImg
            top
            width="100%"
            src={ess}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle tag="h5">Double Shot Espresso</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Card subtitle
            </CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>

      <div id="menuItem">
        <Card>
          <CardImg
            top
            width="100%"
            src={machiato}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle tag="h5">Italian Macchiato</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Card subtitle
            </CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>

      <div id="menuItem">
        <Card>
          <CardImg
            top
            width="100%"
            src={americano}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle tag="h5">Americano</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Card subtitle
            </CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>

      </CardDeck>

      <CardDeck>
        
      <div id="menuItem">
        <Card>
          <CardImg
            top
            width="100%"
            src={latte}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle tag="h5">Latte</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Card subtitle
            </CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>

      <div id="menuItem">
        <Card>
          <CardImg
            top
            width="100%"
            src={cappucino}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle tag="h5">Cappuccino</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Card subtitle
            </CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>

      <div id="menuItem">
        <Card>
          <CardImg
            top
            width="100%"
            src={whiteLatte}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle tag="h5">White Mocha Latte</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Card subtitle
            </CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>

      <div id="menuItem">
        <Card>
          <CardImg
            top
            width="100%"
            src={matcha}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle tag="h5">Matcha Latte</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Card subtitle
            </CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>

      </CardDeck>

      <CardDeck>
        
      <div id="menuItem">
        <Card>
          <CardImg
            top
            width="100%"
            src={caramelMach}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle tag="h5">Caramel Macchiato</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Card subtitle
            </CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>

      <div id="menuItem">
        <Card>
          <CardImg
            top
            width="100%"
            src={skinny}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle tag="h5">Skinny Vanilla Latte</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Card subtitle
            </CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>

      <div id="menuItem">
        <Card>
          <CardImg
            top
            width="100%"
            src={chaiTea}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle tag="h5">Chai Tea Latte</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Card subtitle
            </CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>

      <div id="menuItem">
        <Card>
          <CardImg
            top
            width="100%"
            src={drip}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle tag="h5">Golden Milk Latte</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Card subtitle
            </CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>

      <div id="menuItem">
        <Card>
          <CardImg
            top
            width="100%"
            src={drip}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle tag="h5">Hot Chocolate</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Card subtitle
            </CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>

      </CardDeck>
    </div>
   

    
  );
}
