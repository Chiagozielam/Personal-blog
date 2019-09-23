import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons"

const Profile = () => (
  <div>
    {/* THIS SHOWS ON THE SMALL ONLY */}
    <div
      className="row"
      className="d-sm-block d-md-none"
      style={{ marginTop: "40%", color: "white" }}
    >
      <div className="col-1">
        <img
          src="https://res.cloudinary.com/dcft8yhab/image/upload/v1569179760/IMG_20190922_130327_5_1569178054293.jpg"
          width="100px"
          style={{ borderRadius: "35px" }}
          alt=""
        />
      </div>
      <div className="col-lg-4 col-sm-7">
        <div style={{ paddingLeft: "4%", paddingTop: "2%", fontSize: "14px" }}>
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
      </div>
    </div>

    {/* THIS SHOWS ON LARGE AND MEDIUM*/}

    <div
      className="row"
      className="d-none d-md-block"
      style={{ marginTop: "8%", color: "white",}}
    >
      <div className="col-1">
        <img
          src="https://res.cloudinary.com/dcft8yhab/image/upload/v1569179760/IMG_20190922_130327_5_1569178054293.jpg"
          width="100px"
          style={{ borderRadius: "35px" }}
          alt=""
        />
      </div>
      <div className="col-lg-4 col-sm-7">
        <div style={{ paddingLeft: "4%", paddingTop: "2%", fontSize: "80%" }}>
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
      </div>
    </div>
  </div>
)

export default Profile
