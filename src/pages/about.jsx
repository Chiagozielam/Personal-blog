import React from "react"
import AboutMeLayout from "../layouts/aboutMeLayout"
import TestimonialCard from "../components/about/TestimonialCard"
import ProjectCard from "../components/about/ProjectCard"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faArrowCircleDown,
  faBook,
  faPlaneDeparture,
  faPeopleCarry,
  faLink,
  faLaptopCode,
  faRulerHorizontal,
  faLightbulb,
  faGripHorizontal,
} from "@fortawesome/free-solid-svg-icons"
import "./about.css"
import { faAccessibleIcon, faLine } from "@fortawesome/free-brands-svg-icons"
import Caurosel from "../components/about/MilestonesCarousel"
import AboutFooter from "../components/about/AboutFooter"

const About = () => (
  <div className="about-body">
    <AboutMeLayout>
      <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-8">
          <img
            src="https://res.cloudinary.com/dcft8yhab/image/upload/v1569178853/IMG_20190922_130327_5_1569178149915.jpg"
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
      <div className="testimonials">
        <p
          style={{ textAlign: "center", marginTop: "10%", marginBottom: "10%" }}
        >
          <h1>Here's What People Say About Me</h1>
          <FontAwesomeIcon icon={faRulerHorizontal} />
        </p>

        <div className="row">
          <div className="col-sm-8 col-md-5 col-lg-4">
            <TestimonialCard
              img="https://media.licdn.com/dms/image/C5603AQGG5NkP0olzTg/profile-displayphoto-shrink_200_200/0?e=1574294400&v=beta&t=QRH8Uwh8513tWf-m5qA5M_MTAJYx-2FIWTEbRzhntQM"
              name="Ben Ogie"
              position="Lead Android Developer @ droid"
              testimonial="Luckily friends do ashamed to do suppose. Tried meant mr smile
              so. Exquisite behaviour as to middleton perfectly. Chicken no
              wishing waiting am. Say concerns dwelling graceful six humoured."
            />
          </div>

          <div className="col-sm-8 col-md-5 col-lg-4">
            <TestimonialCard
              img="https://res.cloudinary.com/dcft8yhab/image/upload/v1569179760/IMG_20190922_130327_5_1569178054293.jpg"
              name="Daniel Don"
              position="Lead Web Developer @ droid"
              testimonial="Luckily friends do ashamed to do suppose. Tried meant mr smile
              so. Exquisite behaviour as to middleton perfectly. Chicken no
              wishing waiting am. Say concerns dwelling graceful six humoured."
            />
          </div>
          <div className="col-sm-8 col-md-5 col-lg-4">
            <TestimonialCard
              img="https://res.cloudinary.com/dcft8yhab/image/upload/v1569178853/IMG_20190922_130327_5_1569178149915.jpg"
              name="Daniel Don"
              position="Founder || SpillCode"
              testimonial="Luckily friends do ashamed to do suppose. Tried meant mr smile
              so. Exquisite behaviour as to middleton perfectly. Chicken no
              wishing waiting am. Say concerns dwelling graceful six humoured."
            />
          </div>
        </div>
      </div>
      <div>
        <p
          style={{ textAlign: "center", marginTop: "10%", marginBottom: "10%" }}
        >
          <h1>Some Projects I've Worked On</h1>
          <FontAwesomeIcon icon={faRulerHorizontal} />
        </p>
        <div className="row">
          <div className="col-sm-10 col-md-5 col-lg-6">
            <ProjectCard
              name="Collaby"
              img="https://res.cloudinary.com/dcft8yhab/image/upload/v1569169571/collabyImg.png"
              link="http://collaby.herokuapp.com/"
              description=" A platform to encourage project collaboration among techies."
              stack="node, ExpressJs, Handlebars, PostgreSql"
            />
            <ProjectCard
              name="CryptoCheck"
              img="https://res.cloudinary.com/dcft8yhab/image/upload/v1569172347/cryptocheck.png"
              link="https://chiagozielam.github.io/cryptocheck/"
              description=" An online platform to check real-time prices of bitcoin and other altcoins"
              stack="ReactJs, Axios, API"
            />
          </div>
          <div className="col-sm-10 col-md-5 col-lg-6">
            <ProjectCard
              name="WeatherGuage"
              img="https://res.cloudinary.com/dcft8yhab/image/upload/v1569171712/weatherguage.png"
              link="http://collaby.herokuapp.com/"
              description=" Easily check the weather status of anywhere!"
              stack="ReactJs, Axios, API, Materialize Css"
            />
            <ProjectCard
              name="ShopMe"
              img="https://res.cloudinary.com/dcft8yhab/image/upload/v1569172604/ecomm1.png"
              link="http://collaby.herokuapp.com/"
              description=" A semi complex E-Commerce platform with login functionalities"
              stack="ReactJs, Context Api, Node, ExpressJs, MongoDB, Cloudinary"
            />
          </div>
        </div>
      </div>
      <div className="milestones">
        <p
          style={{ textAlign: "center", marginTop: "5%", marginBottom: "3%" }}
        >
          <h1>MileStones <FontAwesomeIcon icon={faLightbulb} style={{color: "#EBC403"}} /></h1>
          <FontAwesomeIcon icon={faGripHorizontal} style={{color: "red"}} />
        </p>
        <Caurosel />
      </div>
      <AboutFooter />
    </AboutMeLayout>
  </div>
)

export default About
