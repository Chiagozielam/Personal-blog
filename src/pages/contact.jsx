import React from "react"
import PrimaryLayout from "../layouts/PrimaryLayout"
import { Form, Button } from "react-bootstrap"
const Contact = () => (
  <div>
    <PrimaryLayout>
      <div className="pb-5">
        <h2
          className="text-white"
          style={{
            textAlign: "center",
            backgroundColor: "#800000",
            width: "70%",
            margin: "0 auto",
            borderRadius: "20px",
            height: "50px",
            marginTop: "3%",
          }}
        >
          CONTACT ME
        </h2>
        <div className="pt-5" style={{ margin: "0 auto" }}>
          <div style={{ width: "400px", margin: " 0 auto" }}>
            <div className="d-none d-md-block">
              <form
                action="https://formspree.io/dandons25@gmail.com"
                method="POST"
              >
                <p>
                  <input
                    className="form-control"
                    type="text"
                    name="fullname"
                    id="full-name"
                    placeholder="Full Name..."
                    style={{ height: "50px" }}
                  />
                </p>
                <p>
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Address..."
                    style={{ height: "50px" }}
                  />
                </p>
                <textarea
                  class="form-control"
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell Me something Interesting..."
                ></textarea>
                <br />
                <button
                  type="submit"
                  class="btn btn-primary"
                  style={{
                    width: "300px",
                    height: "50px",
                    alignContent: "center",
                  }}
                >
                  SEND
                </button>
              </form>
            </div>

          </div>

          {/* THIS WOULD SHOW ON SMALL ONLY */}

          <div className="d-sm-block d-md-none">
              <form
                action="https://formspree.io/dandons25@gmail.com"
                method="POST"
              >
                <p>
                  <input
                    className="form-control"
                    type="text"
                    name="fullname"
                    id="full-name"
                    placeholder="Full Name..."
                    style={{ height: "50px" }}
                  />
                </p>
                <p>
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Address..."
                    style={{ height: "50px" }}
                  />
                </p>
                <textarea
                  class="form-control"
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell Me something Interesting..."
                ></textarea>
                <br />
                <button
                  type="submit"
                  class="btn btn-primary"
                  style={{
                    width: "300px",
                    height: "50px",
                    alignContent: "center",
                  }}
                >
                  SEND
                </button>
              </form>
            </div>
        </div>
      </div>
    </PrimaryLayout>
  </div>
)

export default Contact
