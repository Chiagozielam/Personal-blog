import React from "react"
import { graphql } from "gatsby"
import Header from "../components/Headers"
import Footer from "../components/Footer"
import SEO from "../components/SEO"
import innertext from "innertext"

const BlogpostLayout = ({data}) => {
    const post = data.markdownRemark;
  return (
    <React.Fragment>
      <div>
        <SEO
          title={innertext(post.title)}
          description={innertext(post.excerpt)}
          image={post.frontmatter.image}
          keywords={post.frontmatter.keywords}
        />
        <Header />
        <div className="container">
          <div className="row justify-content-md">
              <h1>{post.frontmatter.title}</h1>
              <img src={post.frontmatter.image}/>
              <div dangerouslySetInnerHTML= {{__html: post.html}} />    
          </div>
        </div>
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
