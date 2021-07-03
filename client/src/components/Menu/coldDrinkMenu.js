import React from "react";
import { Link } from "react-router-dom";
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
import "./Menu.css";
export default function coldDrink(props) {
    return (
        <div id="container">
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
            </CardDeck>
        </div>
    )
}