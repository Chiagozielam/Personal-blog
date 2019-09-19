import React from "react"
import {Helment} from "react-helmet"
import { graphql } from "gatsby"
import PrimaryLayout from "../layouts/PrimaryLayout"
import Post from "../components/Post"
const Index = ({ data }) => {
  console.log(data)
  return (
    <div>
      <PrimaryLayout>
        
        <div class="row">
          {data.allMarkdownRemark.nodes.reverse().map(node => (
            <div class="col-sm-10 col-md-6 col-lg-4">
              <Post
                title={node.frontmatter.title}
                image={node.frontmatter.image}
                excerpt={node.excerpt}
                readMore={node.fields.slug}
              />
            </div>
          ))}
        </div>
      </PrimaryLayout>
    </div>
  )
}

export default Index

export const query = graphql`
  {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          date
          keywords
          image
        }
        excerpt
        html
        fields {
          slug
        }
      }
    }
  }
`
