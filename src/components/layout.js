import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

import DarkModeToggle from './darkmodetoggle'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <div>
          <h1
            style={{
              ...scale(1.5),
              marginBottom: rhythm(1.5),
              marginTop: 0,
              display: "inline-block"
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h1>
          <DarkModeToggle ph="25px" />
        </div>
      )
    } else {
      header = (
        <div>
          <h3
            style={{
              fontFamily: `Montserrat, sans-serif`,
              marginTop: 0,
              display: "inline-block"
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h3>
          <DarkModeToggle ph="15px" />
        </div>
      )
    }
    return (
      <div>

        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <header>{header}</header>
          
          
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, 使用
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>构建
          </footer>
        </div>
      </div>
    )
  }
}

export default Layout
