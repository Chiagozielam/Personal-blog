import React from 'react'
import "./TestimonialCard.css"

 const TestimonialCard = ({img, name, position, testimonial}) => {
    return (
        <div>
            <div className="card">
              <img
                src={img}
                className="recommendation-img"
                alt=""
              />
              <p className="recommender-name">{name}</p>
              <p className="recommender-title">{position}</p>
              <p className="recommendation-text">
                {testimonial}
              </p>
            </div>
        </div>
    )
}

export default TestimonialCard
