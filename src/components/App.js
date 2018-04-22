import React, { Component } from "react";
import Routes from "../routes";
import { login, logout, isLoggedIn } from "../utils/authService";
import { Nav, NavItem, NavLink, NavbarBrand, Navbar } from "reactstrap";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">All News</NavbarBrand>
          <Nav className="mr-auto" navbar>
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

          <Nav className="ml-auto" navbar>
            <NavItem>
              {isLoggedIn() ? (
                <button className="btn btn-danger log" onClick={() => logout()}>
                  Log out
                </button>
              ) : (
                <button className="btn btn-info log" onClick={() => login()}>
                  Log In
                </button>
              )}
            </NavItem>
          </Nav>
        </Navbar>
        {Routes}
      </div>
    );
  }
}

export default App;
