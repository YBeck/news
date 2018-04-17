import React from "react";
import PropTypes from "prop-types";
import { Jumbotron } from "reactstrap";

export const Header = ({ title }) => {
  return (
    <Jumbotron>
      <h1 className="text-center">{title}</h1>
    </Jumbotron>
  );
};
Header.propTypes = {
  title: PropTypes.string
};

export const Footer = ({ items }) => {
  return (
    <div className="ticker-wrap">
      <div className="ticker">{items}</div>
    </div>
  );
};

Footer.propTypes = {
  items: PropTypes.array
};
