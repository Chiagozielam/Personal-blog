import React from "react"
import { Helment } from "react-helmet"
import { graphql } from "gatsby"
import PrimaryLayout from "../layouts/PrimaryLayout"
import Post from "../components/Post"
const Index = ({ data }) => {
  console.log(data)
  return (
    <div>
      <PrimaryLayout>
        <div
          style={{
            textAlign: "center",
            backgroundColor: "#505766",
            height: "60vh",
          }}
          className="mt-5 d-md-none d-sm-block"
        >
          <h1 style={{ paddingTop: "18%" }}>I'm Daniel Don</h1>
          <h4 style={{ padding: "5%" }}>
            I write articles on web development and tackle popular myths in
            programming.
          </h4>
          <a
            href="https://twitter.com/spillcode?ref_src=twsrc%5Etfw"
            class="twitter-follow-button"
            data-size="large"
            data-show-count="true"
          >
            Follow @spillcode
          </a>
          <br />
          <a
            class="github-button"
            href="https://github.com/Chiagozielam"
            data-size="large"
            data-show-count="true"
            aria-label="Follow @Chiagozielam on GitHub"
          >
            Follow @Chiagozielam
          </a>
          <div id="fb-root"></div>
          <div
            class="fb-like"
            data-href="https://web.facebook.com/SpillCode-2293346120746646/"
            data-width="70px"
            data-layout="button_count"
            data-action="like"
            data-size="small"
            data-show-faces="true"
            data-share="true"
          >SpillCode</div>
        </div>
        <div class="row">
          <div class="col-sm-10 col-md-10 col-lg-10">
            {data.allMarkdownRemark.nodes.reverse().map(node => (
              <Post
                title={node.frontmatter.title}
                image={node.frontmatter.image}
                excerpt={node.excerpt}
                readMore={node.fields.slug}
                date={node.frontmatter.date}
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
