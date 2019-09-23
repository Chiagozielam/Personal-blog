import React from "react"
import Header from "../components/Headers"
import Footer from "../components/Footer"
import SEO from '../components/SEO'
import { Link } from "gatsby"
import Profile from "../components/profile"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const PrimaryLayout = props => (
  <React.Fragment>
    <div style={{backgroundColor: "#141d26",}}  >
      <SEO />
      <Header />
      <div className="container" style={{paddingTop: "8%",}}>
        <div className="row justify-content-md">
          <div className="col-2"></div>
          <div className="col-12">{props.children}</div>
        </div>
      </div>
    </div>
  </React.Fragment>
)

export default PrimaryLayout
