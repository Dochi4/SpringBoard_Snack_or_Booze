import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function Item({ items, cantFind }) {
  const { id } = useParams();

  let treat = items.find((treat) => treat.id === id);

  if (!treat) return <Navigate to={cantFind} />;

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {treat.name}
          </CardTitle>
          <CardText className="font-italic">{treat.description}</CardText>
          <p>
            <b>Recipe:</b> {treat.recipe}
          </p>
          <p>
            <b>Serve:</b> {treat.serve}
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default Item;
