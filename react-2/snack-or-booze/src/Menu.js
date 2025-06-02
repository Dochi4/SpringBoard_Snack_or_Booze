import React from "react";
import { Link } from "react-router-dom";
import "./FoodMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem,
  Button,
} from "reactstrap";

function Menu({ treats, treatType }) {
  console.log("treatType is:", treatType);
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {treatType.toUpperCase()} MENU
          </CardTitle>
          <Link to={`/${treatType}/new`}>
            <Button color="primary">ADD {treatType.toUpperCase()}</Button>
          </Link>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <ListGroup>
            {treats.map((treat) => (
              <Link to={`/${treatType}/${treat.id}`} key={treat.id}>
                <ListGroupItem>{treat.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default Menu;
