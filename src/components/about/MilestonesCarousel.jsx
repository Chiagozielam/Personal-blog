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
              src="https://res.cloudinary.com/dcft8yhab/image/upload/v1569169571/collabyImg.png"
              alt="First slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/dcft8yhab/image/upload/v1569171712/weatherguage.png"
              alt="Second slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/dcft8yhab/image/upload/v1569172347/cryptocheck.png"
              alt="Third slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}
