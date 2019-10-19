import React, { Component } from "react"
import { Carousel } from "react-bootstrap"
import "./TestimonialCarousel.css"

export default class MilestonesCarousel extends Component {
  render() {
    return (
      <div style={{ marginBottom: "10%" }} className="">
        <div className="carousel-box shadow-lg      ">
          <Carousel>
            <Carousel.Item>
              <div>
                <div className="card">
                  <img
                    src="https://media.licdn.com/dms/image/C5603AQGG5NkP0olzTg/profile-displayphoto-shrink_200_200/0?e=1574294400&v=beta&t=QRH8Uwh8513tWf-m5qA5M_MTAJYx-2FIWTEbRzhntQM"
                    className="recommendation-img"
                    alt=""
                  />
                  <p className="recommender-name">Ben Ogie</p>
                  <p className="recommender-title">
                    Lead Android Developer @ company
                  </p>
                  <p className="recommendation-text">
                    Lorem ipsum dolor sit amet, veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <div className="card">
                  <img
                    src="https://res.cloudinary.com/dcft8yhab/image/upload/v1569410404/JD_for_site.jpg"
                    className="recommendation-img"
                    alt=""
                  />
                  <p className="recommender-name">Joseph Don</p>
                  <p className="recommender-title">
                    Founder @ Kaizen Academy
                  </p>
                  <p className="recommendation-text">
                    Lorem ipsum dolor sit amet, veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>

              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <div className="card">
                  <img
                    src="https://res.cloudinary.com/dcft8yhab/image/upload/v1569179760/IMG_20190922_130327_5_1569178054293.jpg"
                    className="recommendation-img"
                    alt=""
                  />
                  <p className="recommender-name">Daniel Don</p>
                  <p className="recommender-title">
                    Lead Web Developer @ droid
                  </p>
                  <p className="recommendation-text">
                    Lorem ipsum dolor sit amet, veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>

              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <div className="card">
                  <img
                    src="https://res.cloudinary.com/dcft8yhab/image/upload/v1569179760/IMG_20190922_130327_5_1569178054293.jpg"
                    className="recommendation-img"
                    alt=""
                  />
                  <p className="recommender-name">Daniel Don</p>
                  <p className="recommender-title">
                    Lead Web Developer @ droid
                  </p>
                  <p className="recommendation-text">
                    Lorem ipsum dolor sit amet, veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>

              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    )
  }
}
