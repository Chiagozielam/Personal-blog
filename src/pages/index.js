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
          <div class="col-sm-10 col-md-8 col-lg-10">
          {data.allMarkdownRemark.nodes.reverse().map(node => (
              <Post
                title={node.frontmatter.title}
                image={node.frontmatter.image}
                excerpt={node.excerpt}
                readMore={node.fields.slug}
                date = {node.frontmatter.date}
              />
          ))}
          </div>

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
          date
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
