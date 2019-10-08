import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"

const Profile = () => (
  <div
    className="d-none d-md-block shadow"
    style={{
      position: "relative",
      marginRight: "10%",
      backgroundColor: "blue !important",
    }}
  >
    <div
      className="shadow-lg"
      style={{
        height: "100vh",
        borderRight: "1px solid black",
        position: "fixed",
        width: "250px",
      }}
    >
      <div style={{}}>
        {/* THIS SHOWS ON LARGE AND MEDIUM*/}
        <div
          style={{
            color: "white",
          }}
        >
          <div className="" style={{ margin: "0 auto" }}>
            <Link to="/">
              <img
                src="https://i7.pngguru.com/preview/791/1002/510/computer-icons-user-profile-avatar-avatar.jpg"
                width="150px"
                style={{
                  borderRadius: "50%",
                  marginLeft: "20%",
                  marginTop: "4%",
                  width: "60%",
                }}
                alt=""
              />
            </Link>
          </div>
          <div className="" style={{ textAlign: "center" }}>
            <div style={{ paddingTop: "2%", fontSize: "90%" }}>
              <h3>Daniel Don</h3>
              <p>
                JavaScript Developer, NodeJs, React, Gatsby. Teens' In Tech
                advocate. I LOVE FUN! ⚡⚡
              </p>
              <span style={{ fontSize: "25px", marginLeft: "2%" }}>
                <a href="https://twitter.com/spillcode">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a
                  style={{ marginLeft: "3%" }}
                  href="https://web.facebook.com/spillcode"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </span>
            </div>

            <a
              class="github-button"
              href="https://github.com/Chiagozielam"
              data-size="large"
              data-show-count="true"
              aria-label="Follow @Chiagozielam on GitHub"
            >
              Follow @Chiagozielam
            </a>
            <br />
            <a
              href="https://twitter.com/spillcode?ref_src=twsrc%5Etfw"
              class="twitter-follow-button"
              data-size="large"
              data-show-count="true"
            >
              Follow @spillcode
            </a>
            <div>
              <p>
                <button className="btn" style={{ backgroundColor: "#D48B08" }}>
                  <Link
                    to="/about"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    About Me
                    <span style={{paddingLeft: "10px"}}><FontAwesomeIcon icon={faArrowRight} /></span>
                  </Link>
                </button>
              </p>
              <p>
                <button className="btn" style={{ backgroundColor: "#FE5419" }}>
                  <Link
                    to="/contact"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Contact Me
                  </Link>
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Profile
