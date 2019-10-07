import React from "react"
import {Card, Button} from 'react-bootstrap'
import "./Post.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

const Post = (props) => (
  <div className="mt-5 shadow-lg post-card-container">
    <Card className="post-card-main">
      <a href={props.readMore} style={{color: "white", textDecoration: "none"}}>
      <Card.Body>
        <Card.Title>
          <h1>{props.title}</h1> 
          <p id="post-date">{props.date}</p>
        </Card.Title>
        <Card.Text>
          {props.excerpt}
        </Card.Text>
        <Button variant="primary" href={props.readMore}>Read More <FontAwesomeIcon icon={faArrowRight} /></Button>
      </Card.Body>
      </a>
    </Card>
  </div>
)

export default Post
