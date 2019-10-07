import React from 'react'
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"


const SEO = ({title, description, image, keywords}) => (
    <StaticQuery
        query={query}
        render={({
            site: {
                siteMetadata: {
                    defaultTitle,
                    defaultDescription,
                    defaultImage,
                    url,
                    defaultKeywords
                }
            }
        }) => {
            const seo = {
                title: title || defaultTitle,
                description: description || defaultDescription,
                image: `${image ? image : url + defaultImage}`,
                keywords: keywords || defaultKeywords
            }
            return (
                <div>
                    <Helmet>
                        <title>{seo.title}</title>
                        <meta name="image" content={seo.image} />
                        <meta name="description" content={seo.description} />
                        <meta name="keywords" content={seo.keywords} />
                        <meta name="robots" content="index,follow" />
                        <script async defer src="https://buttons.github.io/buttons.js"></script>
                        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                        <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v4.0"></script>
                    </Helmet>
                </div>
            )
        }}
    />
)

export default SEO


const query = graphql`
    {
  site {
    siteMetadata {
      defaultTitle: title
      defaultDescription: description
      defaultImage: image 
      url
      defaultKeywords: keywords
    }
  }
}
`