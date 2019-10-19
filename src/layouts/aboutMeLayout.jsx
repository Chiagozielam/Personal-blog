import React from "react"
import Header from "../components/Headers"
import Footer from "../components/Footer"
import SEO from '../components/SEO'
import {
  Navbar,
  NavDropdown,
  Nav,
  Button,
} from "react-bootstrap"
import { Link } from "gatsby"
import Profile from "../components/profile"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./css/aboutMeLayout.css"
import MessengerCustomerChat from 'react-messenger-customer-chat'



const PrimaryLayout = props => (
  <React.Fragment>
    <MessengerCustomerChat
      pageId="SpillCode-2293346120746646"
      appId="wepPage"
    />
    <Navbar
        bg="light"
        expand="lg"
        style={{ position: "fixed", zIndex: "10000", width: "100vw" }}
        className="shadow-lg"
      >
        <Navbar.Brand className="nav-box" href="/about">SpillCode</Navbar.Brand>
      </Navbar>
    <div style={{backgroundColor: ""}}  >
      <SEO />
      <div className="" style={{paddingTop: "5%",}}>
        <div className="row justify-content-md">
          <div className="col-12">{props.children}</div>
        </div>
      </div>
    </div>
  </React.Fragment>
)

export default PrimaryLayout
