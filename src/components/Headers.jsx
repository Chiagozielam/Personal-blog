import React, { Component } from "react"
import {
  Navbar,
  NavDropdown,
  Nav,
  Button,
} from "react-bootstrap"
import { Link } from "gatsby"

export default class Headers extends Component {
  render() {
    return (
      <Navbar
        bg="light"
        expand="lg"
        style={{ position: "fixed", zIndex: "10000", width: "100vw" }}
        className="d-sm-block d-md-none"
      >
        <Navbar.Brand href="/">SpillCode</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link style={{display: "inline"}}>
              <Link style={{ textDecoration: "none" }} to="/">
                Blog
              </Link>
            </Nav.Link>
            <Nav.Link style={{display: "inline"}}>
              <Link style={{ textDecoration: "none" }} to="/contact">
                Contact Me
              </Link>
            </Nav.Link>
            <Nav.Link style={{display: "inline"}}>
              <Link style={{ textDecoration: "none" }} to="/about">
                Portfolio
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
