import React, { Component } from "react";
import Routes from "../routes";
import { Nav, NavItem, NavLink, NavbarBrand, Navbar } from "reactstrap";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">All News</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/news">News</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/business">Business</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/weather">Weather</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
        {Routes}
      </div>
    );
  }
}

export default App;
