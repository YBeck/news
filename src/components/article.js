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

const Article = ({ item }) => {
  // console.log(item);
  return (
    <Card body>
      <CardImg
        height="35%"
        width="100%"
        src={item.urlToImage}
        alt="Image not available"
      />
      <CardBody>
        <CardTitle>{item.title}</CardTitle>
        <CardText>{item.description}</CardText>
        <CardLink href={item.url}>{item.url}</CardLink>
      </CardBody>
    </Card>
  );
};

Article.propTypes = {
  item: PropTypes.object
};

export default Article;
