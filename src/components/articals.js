import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardLink
} from "reactstrap";

const Articals = ({ item }) => {
  console.log(item);
  return (
    <Card body>
      <CardImg
        height="35%"
        width="100%"
        src={item.urlToImage}
        alt="Card image cap"
      />
      <CardBody>
        <CardTitle>{item.title}</CardTitle>
        <CardText>{item.description}</CardText>
        <CardLink href={item.url}>{item.url}</CardLink>
      </CardBody>
    </Card>
  );
};

Articals.propTypes = {
  item: PropTypes.array
};

export default Articals;
