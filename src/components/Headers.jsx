import React, { Component } from "react"
import {Navbar, NavDropdown, Nav, Form, Button, FormControl} from 'react-bootstrap'
import {Link} from 'gatsby'

export default class Headers extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Bloggey</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about">About Us</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contact">Contact Us</Link>
            </Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
