import React from "react"
import PrimaryLayout from "../layouts/PrimaryLayout"
import { Form, Button } from "react-bootstrap"
const Contact = () => (
  <div>
    <PrimaryLayout>
      <div className="">
        <h1>Contact Us</h1>
        <div className="pt-5">
          <form action="https://formspree.io/email@domain.tld" method="POST" >
            <Form classname="pt-5">
              <Form.Group controlId=" contactForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group controlId=" contactForm.ControlInput1">
                <Form.Label>Subject</Form.Label>
                <Form.Control name="subject" type="text" placeholder="Subject..." />
              </Form.Group>
              <Form.Group controlId=" contactForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control nane="message" as="textarea" rows="3" />
              </Form.Group>
              <Form.Group controlId=" contactForm.Submit">
                <Button>Submit</Button>
              </Form.Group>
            </Form>
          </form>
        </div>
      </div>
    </PrimaryLayout>
  </div>
)

export default Contact
