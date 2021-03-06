import React from "react"
import { Link, graphql } from "gatsby"

import "prismjs/themes/prism.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

import 'gitalk/dist/gitalk.css'
import Gitalk from 'gitalk'

import SHA1 from 'crypto-js/sha1'

//import mediumZoom from 'medium-zoom'

import '../styles/blog-post.css'

class BlogPostTemplate extends React.Component {

  componentDidMount() {
    console.log(SHA1(window.location.pathname).toString())

    //mediumZoom(document.querySelectorAll('img'))

    const gitalk = new Gitalk({
      clientID: 'd34b0b7810e373619fcc',
      clientSecret: 'be07ade51d1476d7bf8778433f9fe126143a434e',
      repo: 'ping',
      owner: 'ping-lee',
      admin: ['ping-lee'],
      id: SHA1(window.location.pathname).toString(),      // Ensure uniqueness and length less than 50
      distractionFreeMode: false  // Facebook-like distraction free mode
    })
    
    gitalk.render('gitalk-container')
  }
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <div className="article-wrapper">
          <article className="article">
            <header>
              <h1
                style={{
                  marginTop: rhythm(1),
                  marginBottom: 0,
                }}
              >
                {post.frontmatter.title}
              </h1>
              <p
                style={{
                  ...scale(-1 / 5),
                  display: `block`,
                  marginBottom: rhythm(1),
                }}
              >
                {post.frontmatter.date}<br/>
                {post.frontmatter.los}
              </p>
              
            </header>
            <section dangerouslySetInnerHTML={{ __html: post.html }} />
            <hr
              style={{
                marginBottom: rhythm(1),
              }}
            />
            <footer>
              <div id="gitalk-container"></div>
            </footer>
          </article>
        </div>

        <nav className="navp">
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>

      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        los
        date(formatString: "YYYY年MM月DD日")
        description
      }
    }
  }
`
