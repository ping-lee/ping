import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { rhythm } from "../utils/typography"

import '../styles/mylayout.css'

const MyLayout = ({ children }) => {
    const data = useStaticQuery(graphql`
      query MyLayoutQuery {
        header: file(absolutePath: {regex: "/ian-espinosa-311604-unsplash.jpg/"}) {
          childImageSharp {
            fluid (maxWidth: 700) {
                ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        footer: file(absolutePath: {regex: "/irina-568205-unsplash.jpg/"}) {
          childImageSharp {
            fluid (maxWidth: 700) {
                ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `)
    return (
        <div>
          <div className="cover-image">
            <Img 
              sizes={data.header.childImageSharp.fluid}
            />
          </div>
          
          <div style={{
                marginLeft: `auto`,
                marginRight: `auto`,
                maxWidth: rhythm(24),
                padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
              }}
          >
            {children}
          </div>

          <div className="foot-cover-image">
            <Img 
              sizes={data.footer.childImageSharp.fluid}
              style={{

              }}
            />
          </div>
        </div>
    )
}

export default MyLayout