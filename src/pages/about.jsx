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
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons"
import "./about.css"
import {
  faAccessibleIcon,
  faLine,
  faDashcube,
} from "@fortawesome/free-brands-svg-icons"
import Caurosel from "../components/about/MilestonesCarousel"
import AboutFooter from "../components/about/AboutFooter"

const About = () => (
  <div className="about-body">
    <AboutMeLayout>
      <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-12">
          <img
            src="https://res.cloudinary.com/dcft8yhab/image/upload/v1569178853/IMG_20190922_130327_5_1569178149915.jpg"
            width="210px"
            height="250px"
            style={{ borderRadius: "25px", margin: "0 auto" }}
            alt=""
            id="about-me-head-img"
          />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-8">
          <div className="skills padding-on-small-screen">
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
          <p id="intro-text" className=" padding-on-small-screen">
            <h3>
              <FontAwesomeIcon
                style={{ marginLeft: "2px" }}
                icon={faDashcube}
              />
              BIO
            </h3>
            Hey! I'm a Passionate software developer with 2+ years of
            experience. I build amazing web applications targeted to suite a
            vast variety of individuals. I make imaginations come alive by
            working to bring out the best we possibly can while maintaining
            accessibility and scalability <br />
            <button className="btn btn-primary">
              <a
                href="https://res.cloudinary.com/dcft8yhab/image/upload/v1569324256/Daniel_Don_-_Software_Developer__Community_Lead_Co-lead.pdf"
                target="_blank"
                style={{ color: "white", textDecoration: "none" }}
                download
              >
                Download Resume
              </a>
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

        <div className="row padding-on-small-screen">
          <div className="col-sm-8 col-md-5 col-lg-4 testimonial-cards">
            <TestimonialCard
              img="https://media.licdn.com/dms/image/C5603AQGG5NkP0olzTg/profile-displayphoto-shrink_200_200/0?e=1574294400&v=beta&t=QRH8Uwh8513tWf-m5qA5M_MTAJYx-2FIWTEbRzhntQM"
              name="Ben Ogie"
              position="Lead Android Developer @ company"
              testimonial="Lorem ipsum dolor sit amet, veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />
          </div>

          <div className="col-sm-8 col-md-5 col-lg-4 testimonial-cards">
            <TestimonialCard
              img="https://res.cloudinary.com/dcft8yhab/image/upload/v1569179760/IMG_20190922_130327_5_1569178054293.jpg"
              name="Daniel Don"
              position="Lead Web Developer @ droid"
              testimonial="Lorem ipsum dolor sit amet, veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />
          </div>
          <div className="col-sm-8 col-md-5 col-lg-4 testimonial-cards">
            <TestimonialCard
              img="https://res.cloudinary.com/dcft8yhab/image/upload/v1569178853/IMG_20190922_130327_5_1569178149915.jpg"
              name="Daniel Don"
              position="Founder || SpillCode"
              testimonial="Lorem ipsum dolor sit amet, veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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
        <div className="row padding-on-small-screen">
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
          <a
            href="http://github.com/Chiagozielam"
            target="_blank"
            rel="noopener noreferrer"
          >
            View more on Github <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>
      </div>
      <div className="milestones">
        <p style={{ textAlign: "center", marginTop: "5%", marginBottom: "1%" }}>
          <h1>
            MileStones{" "}
            <FontAwesomeIcon icon={faLightbulb} style={{ color: "#EBC403" }} />
          </h1>
          <FontAwesomeIcon icon={faGripHorizontal} style={{ color: "red" }} />
        </p>
        <div className="row">
          <div className="col-sm-10 col-md-2 col-lg-3"></div>
          <div className="col-sm-10 col-md-8 col-lg-6"><Caurosel /></div>
          <div className="col-sm-10 col-md-2 col-lg-3"></div>
          
        </div>
      </div>
    </AboutMeLayout>
    <AboutFooter />
  </div>
)

export default About
