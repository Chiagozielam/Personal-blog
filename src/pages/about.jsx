import React from "react"
import { Link } from "gatsby"
import AboutMeLayout from "../layouts/aboutMeLayout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faArrowCircleDown,
  faBook,
  faPlaneDeparture,
  faPeopleCarry,
  faLink,
  faLaptopCode,
  faRulerHorizontal,
} from "@fortawesome/free-solid-svg-icons"
import "./about.css"
import { faAccessibleIcon, faLine } from "@fortawesome/free-brands-svg-icons"

const About = () => (
  <div className="about-body">
    <AboutMeLayout>
      <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-8">
          <img
            src="https://avatars3.githubusercontent.com/u/39469800?s=400&u=be7ccfa082d7bc7c924bb0cb18e6c3becf99c000&v=4"
            width="210px"
            height="250px"
            style={{ borderRadius: "25px" }}
            alt=""
          />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-8">
          <div className="skills">
            <p>
              Content Writer
              <FontAwesomeIcon style={{ marginLeft: "2px" }} icon={faBook} />
            </p>
            <hr />
            <p>
              Web Developer
              <FontAwesomeIcon
                style={{ marginLeft: "2px" }}
                icon={faArrowCircleDown}
              />
            </p>
            <hr />
            <p>
              Community Leader
              <FontAwesomeIcon
                style={{ marginLeft: "2px" }}
                icon={faPlaneDeparture}
              />
            </p>
            <hr />
            <p>
              DevC PH Co / Content Lead
              <FontAwesomeIcon
                style={{ marginLeft: "2px" }}
                icon={faPeopleCarry}
              />
            </p>
            <hr />
            <p>
              I Pride Myself In Learning
              <FontAwesomeIcon
                style={{ marginLeft: "2px" }}
                icon={faAccessibleIcon}
              />
            </p>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-8"></div>
        <div className="col-lg-4 col-md-4 col-sm-8">
          <p id="intro-text">
            Luckily friends do ashamed to do suppose. Tried meant mr smile so.
            Exquisite behaviour as to middleton perfectly. Chicken no wishing
            waiting am. Say concerns dwelling graceful six humoured. Whether mr
            up savings talking an. Active mutual nor father mother exeter change
            six did all.
            <button className="btn btn-primary">
              Download Resume
              <FontAwesomeIcon
                style={{ marginLeft: "2px" }}
                icon={faArrowCircleDown}
              />
            </button>
          </p>
        </div>
      </div>
      <div className= "testimonials">
        <p
          style={{ textAlign: "center", marginTop: "10%", marginBottom: "10%" }}
        >
          <h2>Here's What People Say About Me</h2>
          <FontAwesomeIcon icon={faRulerHorizontal} />
        </p>

        <div className="row">
          <div className="col-sm-8 col-md-5 col-lg-4">
            <div className="card">
              <img
                src="https://media.licdn.com/dms/image/C5603AQGG5NkP0olzTg/profile-displayphoto-shrink_200_200/0?e=1574294400&v=beta&t=QRH8Uwh8513tWf-m5qA5M_MTAJYx-2FIWTEbRzhntQM"
                className="recommendation-img"
                alt=""
              />
              <p className="recommender-name"> Ben Ogie</p>
              <p className="recommender-title">Lead Andriod Developer @ droid</p>
              <p className="recommendation-text">
                Luckily friends do ashamed to do suppose. Tried meant mr smile
                so. Exquisite behaviour as to middleton perfectly. Chicken no
                wishing waiting am. Say concerns dwelling graceful six humoured.
              </p>
            </div>
          </div>
          <div className="col-sm-8 col-md-5 col-lg-4">
            <div className="card">
              <img
                src="https://avatars3.githubusercontent.com/u/39469800?s=400&u=be7ccfa082d7bc7c924bb0cb18e6c3becf99c000&v=4"
                className="recommendation-img"
                alt=""
              />
              <p className="recommender-name"> Daniel Don</p>
              <p className="recommender-title">Lead Web Developer @ droid</p>
              <p className="recommendation-text">
                Luckily friends do ashamed to do suppose. Tried meant mr smile
                so. Exquisite behaviour as to middleton perfectly. Chicken no
                wishing waiting am. Say concerns dwelling graceful six humoured.
              </p>
            </div>
          </div>
          <div className="col-sm-8 col-md-5 col-lg-4">
            <div className="card">
              <img
                src="https://avatars3.githubusercontent.com/u/39469800?s=400&u=be7ccfa082d7bc7c924bb0cb18e6c3becf99c000&v=4"
                className="recommendation-img"
                alt=""
              />
              <p className="recommender-name"> Daniel Don</p>
              <p className="recommender-title"> Founder || SpillCode</p>
              <p className="recommendation-text">
                Luckily friends do ashamed to do suppose. Tried meant mr smile
                so. Exquisite behaviour as to middleton perfectly. Chicken no
                wishing waiting am. Say concerns dwelling graceful six humoured.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AboutMeLayout>
  </div>
)

export default About
