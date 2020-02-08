import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import glamorous from 'glamorous';
//import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

import '../styles/index.scss'

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
            const profile = node.frontmatter.profile
            return (
                <li className="col-3" key={node.fields.slug}>
                  <div className="box-item">
                    <glamorous.Figure className="rollover">
                      <div className="hover-cover"></div>
                      <div to={node.fields.slug}>
                        <div className="box-photo">
                          <Image
                            fluid={profile.childImageSharp.fluid} 
                            alt="Oops!!!" 
                            className="lazy lazy-loaded"
                          />
                        </div>
                        <div className="hover-item top">
                          <span className="bt-item bt-default bt-likeit js-bt-like js-collect-like ">
                            <svg className="ico-svg" viewBox="0 0 15 14">
                              <path d="M7.504,14C-0.305,7.809-0.02,5.619,0.007,3.801C0.032,2.101,1.406,0,3.705,0s3.698,2.5,3.698,2.5 S8.902,0,11.201,0s3.798,2.101,3.798,3.801C14.999,5.601,15.198,7.801,7.504,14"></path>
                            </svg>
                            <span className="number">138</span>
                          </span>
                          <strong className="bt-item bt-default js-collect">Collect</strong>
                        </div>
                      </div>
                      <div className="hover-item bottom">
                        <Link to="/" className="bt-item bt-link">
                          <svg className="ico-svg" viewBox="0 0 22.24 14">
                            <path d="M13.84,14V9.801C8.492,8.463,4.42,9.041,0.408,12.144c-0.05,0.038-0.101,0.078-0.15,0.117 c-0.137,0.104-0.192,0.103-0.226,0.077c-0.035-0.027-0.055-0.066,0.014-0.234c0.092-0.228,0.196-0.445,0.298-0.658 C3.208,5.443,7.902,4.2,13.84,4.2V0l8.4,7L13.84,14z"></path>
                          </svg>
                        </Link>
                      </div>
                      <div className="hover-item center">
                        <Link to={node.fields.slug} className="bt-default white-fill large vote-now">查看更多</Link>
                      </div>
                    </glamorous.Figure>
                    <div className="box-info">
                      <div className="bcontent">
                        <div className="row">
                          <h3><Link to={node.fields.slug}>{title}</Link></h3>
                        </div>
                        <div className="row row-2col">
                          <div className="box-left">来自：{node.frontmatter.lo}</div>
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
                              通过
                            </div>
                            <strong><a href="/" className="text-block">Tristan</a></strong>
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, filter: {frontmatter: {date: {ne: null}}}) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MM月DD日, YYYY")
            title
            lo
            description
            profile {
              childImageSharp {
                fluid(maxWidth: 417, maxHeight: 298) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
