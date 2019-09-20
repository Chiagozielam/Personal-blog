import React from "react"
import {Card, Button} from 'react-bootstrap'
import "./Post.css"

const Post = (props) => (
  <div className="mt-5 shadow post-cards">
    <Card>
      <a href={props.readMore} style={{color: "black", textDecoration: "none"}}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.excerpt}
        </Card.Text>
        <Button variant="primary" href={props.readMore}>Read More...</Button>
      </Card.Body>
      </a>
    </Card>
  </div>
)

export default Post
