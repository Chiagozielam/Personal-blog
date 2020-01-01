import React, {useState} from "react"
import "./AboutFooter.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faLaptopCode } from "@fortawesome/free-solid-svg-icons"
import {
  faTwitter,
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

const AboutFooter = () => {
  const {status, setStatus} = useState(" ");

  const submitForm = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
    };
    xhr.send(data);
  }
}

  return (
    <div>
      <footer className="about-footer">
        <p style={{ textAlign: "center" }}>
          <h2 style={{ marginBottom: "5%" }}>
            Contact Me <FontAwesomeIcon icon={faLaptopCode} />
          </h2>
        </p>
        <div className="row">
          <div className="col-sm-5">
            <form
              name="Portfolio Contact Form"
              method="POST"
              action="https://formspree.io/mwkvawny"
              onSubmit={submitForm}
            >
              <input
                type="text"
                name="FullName"
                id="full-name"
                class="form-control form-inputs"
                placeholder="Full Name..."
              />
              <input
                type="email"
                name="email"
                id="email"
                class="form-control form-inputs"
                placeholder="E-Mail..."
              />
              <textarea
                name="message"
                id="message"
                class="form-control form-inputs"
                cols="30"
                rows="10"
                placeholder="Message..."
              ></textarea>
              {status === "SUCCESS" ? (
                <p>Thanks!</p>
              ) : (
                <button class="form-control btn btn-primary">Submit</button>
              )}
              {status === "ERROR" && <p>Ooops! There was an error.</p>}
            </form>
          </div>
          <div className="col-sm-5" style={{ textAlign: "center" }}>
            <h4>Quick Links</h4>
            <p>
              <span style={{ fontSize: "35px", marginLeft: "2%" }}>
                {/*TWITTER*/}
                <a href="https://twitter.com/spillcode">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                {/*FACEBOOK*/}
                <a
                  style={{ marginLeft: "3%" }}
                  href="https://web.facebook.com/spillcode"
                >
                  <FontAwesomeIcon
                    style={{ color: "#0125AD" }}
                    icon={faFacebook}
                  />
                </a>
                {/*GITHUB*/}
                <a
                  style={{ marginLeft: "3%" }}
                  href="https://web.facebook.com/spillcode"
                >
                  <FontAwesomeIcon
                    style={{ color: "#161616" }}
                    icon={faGithub}
                  />
                </a>
                {/*LINKEDIN*/}
                <a
                  style={{ marginLeft: "3%" }}
                  href="https://web.facebook.com/spillcode"
                >
                  <FontAwesomeIcon
                    style={{ color: "#0077B5" }}
                    icon={faLinkedin}
                  />
                </a>
              </span>
            </p>
            <p>
              <a
                href="spillili.netlify.com"
                style={{ textDecoration: "none", color: "black" }}
              >
                VISIT BLOG
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default AboutFooter
