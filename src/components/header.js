import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import logo from '../images/health-insurance-coverage-logo.png' // Tell Webpack this JS file uses this image

const Header = ({ siteTitle }) => (
  <div
    style={{
      borderBottom: `1px solid #ebecef`,
      marginBottom: `0.5rem`,
    }}
  >
    <div class="header">
      <div style={{ textAlign: `center`, fontSize: `16px` }}>
        - Advertorial -
      </div>

      <h1 style={{ margin: 0, float: 'left' }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <img
            src={logo}
            alt="Health Insurance Coverage"
            style={{
              marginBottom: `0.1rem`,
            }}
          />
        </Link>
      </h1>
      <ul class="top-menu hidden-xs">
        <li>
          <a href="#">LIFE INSURANCE SAVINGS</a>
        </li>
        <li>
          <a href="#">LOWEST HEALTH INSURANCE RATES</a>
        </li>
      </ul>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header