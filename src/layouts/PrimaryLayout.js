import React from "react"
import Header from "../components/Headers"
import Footer from "../components/Footer"
import SEO from "../components/SEO"
import { Link } from "gatsby"
import Profile from "../components/profile"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const PrimaryLayout = props => (
  <React.Fragment>
    <div style={{ backgroundColor: "#141d26" }}>
      <SEO />
      <Header />
      <div className="">
        <div className="row">
          <div className="col-sm-2 col-md-2 col-lg-2 d-none d-md-block">
            <Profile />
          </div>
          <div className="col-sm-9">{props.children}</div>
        </div>
      </div>
      <Footer className="footer" />
    </div>
  </React.Fragment>
)

export default PrimaryLayout
