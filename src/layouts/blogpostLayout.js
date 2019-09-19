import React from "react"
import { graphql } from "gatsby"
import Header from "../components/Headers"
import Footer from "../components/Footer"
import SEO from "../components/SEO"
import Profile from "../components/profile"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons"

const BlogpostLayout = ({ data }) => {
  const post = data.markdownRemark
  return (
    <React.Fragment>
      <div style={{ backgroundColor: "#141d26" }}>
        <SEO
          title={post.title}
          description={post.excerpt}
          image={post.frontmatter.image}
          keywords={post.frontmatter.keywords}
        />
        <Header />
        <div className="container" style={{ paddingTop: "5%", color: "white" }}>
          <Profile />
          <div className="row justify-content-md">
            <h1>{post.frontmatter.title}</h1>
            <p style={{ margin: "4% auto" }}>
              <img src={post.frontmatter.image} style={{ width: "100%" }} />
            </p>
            <div
              style={{ fontSize: "20px" }}
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </div>
        </div>
        <span style={{ fontSize: "25px", marginLeft: "2%" }}>
          <a href="https://twitter.com/spillcode">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            style={{ marginLeft: "1%" }}
            href="https://web.facebook.com/spillcode"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </span>
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default BlogpostLayout

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        keywords
        title
        image
      }
    }
  }
`
