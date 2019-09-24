import React, { Component } from "react"
import { Carousel } from "react-bootstrap"

export default class MilestonesCarousel extends Component {
  render() {
    return (
      <div style={{marginBottom: "10%",}}>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/dcft8yhab/image/upload/v1569358345/undraw_investment_xv9d.svg"
              alt="First slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/dcft8yhab/image/upload/v1569358346/undraw_logo_design_bjnx.svg"
              alt="Second slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/dcft8yhab/image/upload/v1569358382/undraw_portfolio_website_lidw.svg"
              alt="Third slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/dcft8yhab/image/upload/v1569358345/undraw_link_shortener_mvf6.svg"
              alt="Third slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}
