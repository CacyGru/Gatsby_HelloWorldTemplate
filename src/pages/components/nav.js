import React from "react"
import { Link } from "gatsby"

const Nav = () => {
  return (
    <div>
      <nav>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/blog">
            <li>Blog</li>
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
