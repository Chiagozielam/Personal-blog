import React from "react"
import PrimaryLayout from "../layouts/PrimaryLayout"
import { Form, Button } from "react-bootstrap"
const Contact = () => (
  <div>
    <PrimaryLayout>
      <div className="">
        <h1>Contact Us</h1>
        <div className="pt-5">
          <Form classname="pt-5">
            <Form.Group controlId=" contactForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group controlId=" contactForm.ControlInput1">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" placeholder="Subject..." />
            </Form.Group>
            <Form.Group controlId=" contactForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
            <Form.Group controlId=" contactForm.Submit">
              <Button>Submit</Button>
            </Form.Group>
          </Form>
        </div>
      </div>
    </PrimaryLayout>
  </div>
)

export default Contact
