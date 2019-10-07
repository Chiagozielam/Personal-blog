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
        <div className="row" style={{color: "white" }}>
          <div className="col-sm-2 col-md-2 col-lg-2 ">
            <Profile />
          </div>
          <div className="col-sm-10">
            <div className="ml-5">
              <h1 style={{textAlign: "center",}}>{post.frontmatter.title}</h1>
              <p style={{ margin: "4% auto", display: "block" }}>
                <img src={post.frontmatter.image} style={{ width: "80%", margin: "0 auto", display: "block" }} />
              </p>
              <div
                style={{ fontSize: "20px", margin: "5%" }}
                dangerouslySetInnerHTML={{ __html: post.html }}
              />
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
          </div>
        </div>
        
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
