import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Footer from './footer'
import './layout.css'
import BackgroundImage from 'gatsby-background-image'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "background.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          fluid={imageData}
          backgroundColor={`#040e18`}
          style={{ minHeight: '100vh' }}
        >
          <div className="content-page">{children}</div>
          <Footer />
        </BackgroundImage>
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
