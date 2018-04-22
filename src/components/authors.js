import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { getAccessToken } from "../utils/authService";

class Authors extends Component {
  state = {
    authors: []
  };
  componentDidMount() {
    fetch("http://localhost:8080/authors", {
      headers: {
        Authorization: `Bearer ${getAccessToken()}`
      }
    })
      .then(res => res.json())
      .then(authors => this.setState({ authors }))
      .catch(() => console.error);
  }

  handleClick = event => {
    event.preventDefault();
    this.props.setAuthor(event.target.innerText);
  };

  render() {
    const { authors } = this.state;

    const selectAuthor = authors.map(author => {
      return (
        <DropdownItem key={author._id} onClick={this.handleClick}>
          {author.author}
        </DropdownItem>
      );
    });

    return (
      <UncontrolledDropdown>
        <DropdownToggle>Sources</DropdownToggle>
        <DropdownMenu>{selectAuthor}</DropdownMenu>
      </UncontrolledDropdown>
    );
  }
}
Authors.propTypes = {
  setAuthor: PropTypes.func
};

export default Authors;
