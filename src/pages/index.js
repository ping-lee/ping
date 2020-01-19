import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"

//import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

import '../styles/index.css'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    const { author } = data.site.siteMetadata

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <div className="grid">
          <ul className="list-items list-flex">
            {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
                <li className="col-3" key={node.fields.slug}>
                  <div className="box-item">
                    <figure className="rollover">
                      <Link to={node.fields.slug}>
                        <div className="box-photo">
                          <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaEAAAEqAQMAAACGEX2aAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAACZJREFUaN7twTEBAAAAwiD7pzbFPmAAAAAAAAAAAAAAAAAAAAAQOz7cAAG8Je16AAAAAElFTkSuQmCC" 
                            data-srcset="https://assets.awwwards.com/awards/media/cache/thumb_417_299/submissions/2019/09/5d7fc428dfb1a005466764.png 1x, https://assets.awwwards.com/awards/media/cache/optimize/submissions/2019/09/5d7fc428dfb1a005466764.png 2x" 
                            alt="Helias Oils" 
                            className="lazy lazy-loaded" 
                            srcSet="https://assets.awwwards.com/awards/media/cache/thumb_417_299/submissions/2019/09/5d7fc428dfb1a005466764.png 1x, https://assets.awwwards.com/awards/media/cache/optimize/submissions/2019/09/5d7fc428dfb1a005466764.png 2x" 
                            width="417" 
                            height="298"
                          />
                        </div>
                        <div className="hover-item top">
                          <span className="bt-item bt-default bt-likeit js-bt-like js-collect-like "></span>
                          <strong className="bt-item bt-default js-collect">Collect</strong>
                        </div>
                      </Link>
                    </figure>
                    <div className="box-info">
                      <div className="bcontent">
                        <div className="row">
                          <h3><Link to={node.fields.slug}>{title}</Link></h3>
                        </div>
                        <div className="row row-2col">
                          <div className="box-left"> From KunMing Chain</div>
                          <div className="box-right">{node.frontmatter.date}</div>
                        </div>
                      </div>
                      <div className="footer style2">
                        <div className="box-left">
                          <div className="box-byuser">
                            <div className="item">
                              <a>
                              <Image
                                fixed={data.avatar.childImageSharp.fixed}
                                alt={author}
                                style={{
                                  width: `26px`,
                                  height: `26px`,
                                  verticalAlign: `middle`,
                                  borderRadius: `500%`,
                                }}
                                imgStyle={{
                                  borderRadius: `50%`,
                                }}
                              />
                              </a>
                            </div>
                            <div className="by">
                              by
                            </div>
                            <strong><a href="/" className="text-block">Lee Ping</a></strong>
                          </div>
                        </div>
                        <div className="box-right">
                          <ul className="list-tags size-small">
                            <li className="hm">
                              <div className="tooltip">
                                <span className="item item-hm">HM</span>
                              </div>
                            </li>
                            <li className="sotd">
                              <div className="tooltip">
                                <span className="item item-sotd">SOTD</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        title
        author
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MM月DD日, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
