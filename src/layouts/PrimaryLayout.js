import React from "react"
import Header from "../components/Headers"
import Footer from "../components/Footer"
import SEO from '../components/SEO'
import { Link } from "gatsby"

const PrimaryLayout = props => (
  <React.Fragment>
    <div>
      <SEO />
      <Header />
      <div className="container">
        <div className="row justify-content-md">
          <div className="col-2"></div>
          <div className="col-xs-9">{props.children}</div>
        </div>
      </div>
      <Link to="/test">Test</Link>
      <Footer className="footer" />
    </div>
  </React.Fragment>
)

export default PrimaryLayout
