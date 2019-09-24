import React, { Component } from "react"
import {
  Navbar,
  NavDropdown,
  Nav,
  Form,
  Button,
  FormControl,
} from "react-bootstrap"
import { Link } from "gatsby"

export default class Headers extends Component {
  render() {

    const searchAlert = () => {
      alert("hello world")
    }
    return (
      <Navbar
        bg="light"
        expand="lg"
        style={{ position: "fixed", zIndex: "10000" }}
      >
        <Navbar.Brand href="/">SpillCode</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link style={{ textDecoration: "none" }} to="/">
                Blog
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link style={{ textDecoration: "none" }} to="/contact">
                Contact Me
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link style={{ textDecoration: "none" }} to="/about">
                Portfolio
              </Link>
            </Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" onClick= {() => {alert("The search functionality is still under configuration and as such won't work for now.")}} className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
