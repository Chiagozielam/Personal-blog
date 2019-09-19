import React from "react"
import footerStyles from "./Footer.module.css"
import { Link } from "gatsby"

const Footer = () => (
  <footer className={footerStyles.footer}>
    <div className="container">
      <div className="row">
        <div className="col-7">
          <span className="text-muted">With ♥ ♥ from Daniel Don</span>
        </div>
        <div className="col-5">
          <Link style={{ textDecoration: "none" }} to="/contact">
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
