import React from "react"
import AboutMeLayout from "../layouts/aboutMeLayout"
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
import {
  faTwitter,
  faFacebook,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"
import "./about.css"
import {
  faAccessibleIcon,
  faLine,
  faDashcube,
} from "@fortawesome/free-brands-svg-icons"
import { Link } from "gatsby"
import Typed from "react-typed"
import Caurosel from "../components/about/MilestonesCarousel"
import AboutFooter from "../components/about/AboutFooter"
import TestimonialCarousel from "../components/about/TestimonialCarousel"

const About = () => (
  <div className="about-body">
    <AboutMeLayout>
      <div className="head-box">
        <div className="head-box-content">
          <h3>
            <Typed
              strings={[
                "Hello! I'm Daniel Don",
                "I'm a Software Developer.",
                "I write articles on Web development",
                "I write articles that tackle popular programming myths",
                "I'm in love with React and Node !",
                "I'm FUN ☀⚡",
              ]}
              typeSpeed={100}
              backSpeed={50}
              loop
            />
          </h3>
          <br />
          <span style={{ marginLeft: "2%" }}>
            <div className="twitter-follow-btn">
              <a href="https://twitter.com/spillcode">
                <span style={{ fontSize: "17px", marginRight: "7px" }}>
                  <FontAwesomeIcon icon={faTwitter} />
                </span>
                Follow @spillcode
              </a>
            </div>
            <div className="github-follow-btn">
              <a
                style={{ marginLeft: "3%" }}
                href="https://github.com/Chiagozielam"
              >
                <span style={{ fontSize: "17px", marginRight: "7px" }}><FontAwesomeIcon icon={faGithub} /></span>
                Follow @Chiagozielam
              </a>
            </div>
            <div className="blog-btn">
              <Link
                style={{ marginLeft: "3%" }}
                to="/"
              >
                VIEW BLOG 
                <span style={{ fontSize: "22px", marginLeft: "12px" }}><FontAwesomeIcon icon={faArrowRight}/></span>
              </Link>
            </div>
          </span>
        </div>
      </div>
      <div className="container" style={{ marginTop: "7%" }}>
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-12">
            <img
              src="https://res.cloudinary.com/dcft8yhab/image/upload/v1571280730/IMG_20191006_123809_3_2.jpg"
              width="260px"
              height="290px"
              style={{ borderRadius: "25px", margin: "0 auto" }}
              alt=""
              id="about-me-head-img"
              className="shadow-lg"
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
                Campus Community Leader
                <FontAwesomeIcon
                  style={{ marginLeft: "2px" }}
                  icon={faPlaneDeparture}
                />
              </p>
              <hr />
              <p>
                DevC PH Content Lead
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
            style={{
              textAlign: "center",
              marginTop: "10%",
              marginBottom: "10%",
            }}
          >
            <h1>Here's What People Say About Me</h1>
            <FontAwesomeIcon icon={faRulerHorizontal} />
          </p>

          <div className="padding-on-small-screen">
            <TestimonialCarousel />
          </div>
        </div>
        <div>
          <p
            style={{
              textAlign: "center",
              marginTop: "10%",
              marginBottom: "10%",
            }}
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
                linkText=" View Live Demo"
                description=" A platform to encourage project collaboration among techies."
                stack="node, ExpressJs, Handlebars, PostgreSql"
              />
              <ProjectCard
                name="CryptoCheck"
                img="https://res.cloudinary.com/dcft8yhab/image/upload/v1569172347/cryptocheck.png"
                link="https://chiagozielam.github.io/cryptocheck/"
                description=" An online platform to check real-time prices of bitcoin and other altcoins"
                stack="ReactJs, Axios, API"
                linkText=" View Live Demo"
              />
            </div>
            <div className="col-sm-10 col-md-5 col-lg-6">
              <ProjectCard
                name="WeatherGuage"
                img="https://res.cloudinary.com/dcft8yhab/image/upload/v1569171712/weatherguage.png"
                link="http://weatherguage.herokuapp.com"
                description=" Easily check the weather status of anywhere!"
                stack="ReactJs, Axios, API, Materialize Css"
                linkText=" View Live Demo"
              />
              <ProjectCard
                name="ShopMe"
                img="https://res.cloudinary.com/dcft8yhab/image/upload/v1569172604/ecomm1.png"
                link="https://github.com/Chiagozielam/ShopMe"
                description=" A semi complex E-Commerce platform with login functionalities"
                stack="ReactJs, Context Api, Node, ExpressJs, MongoDB, Cloudinary"
                linkText=" View Git Repo"
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
          <p
            style={{ textAlign: "center", marginTop: "5%", marginBottom: "1%" }}
          >
            <h1>
              MileStones{" "}
              <FontAwesomeIcon
                icon={faLightbulb}
                style={{ color: "#EBC403" }}
              />
            </h1>
            <FontAwesomeIcon icon={faGripHorizontal} style={{ color: "red" }} />
          </p>
          <div className="row">
            <div className="col-sm-10 col-md-2 col-lg-3"></div>
            <div className="col-sm-10 col-md-8 col-lg-6">
              <Caurosel />
            </div>
            <div className="col-sm-10 col-md-2 col-lg-3"></div>
          </div>
        </div>
      </div>
    </AboutMeLayout>
    <AboutFooter />
  </div>
)

export default About
