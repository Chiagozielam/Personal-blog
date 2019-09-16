import React, { Component } from "react"
import {Navbar, NavDropdown, Nav, Form, Button, FormControl} from 'react-bootstrap'
import {Link} from 'gatsby'

export default class Headers extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg" style={{position: "fixed", zIndex: "10000"}}>
        <Navbar.Brand href="/"><h3>SpillCode</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" style={{fontSize: "22px", fontWeight: "500",}}>
            <Nav.Link>
              <Link style={{textDecoration: "none"}} to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link style={{textDecoration: "none"}} to="/about">Portfolio</Link>
            </Nav.Link>
            <Nav.Link>
              <Link style={{textDecoration: "none"}} to="/contact">Contact Me</Link>
            </Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
