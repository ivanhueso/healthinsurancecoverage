import React from 'react'
import { Link } from 'gatsby'

const Footer = ({ siteTitle }) => (
  <footer>
    <div className="content">
      <p>
        © {new Date().getFullYear()}, All Rights Reserved. Getbestoffers.net{' '}
      </p>
      <ul className="nav">
        <li>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </li>
        <li>
          <span>|</span>
        </li>
        <li>
          <Link to="/terms-of-service">Terms of Services</Link>
        </li>
      </ul>
    </div>
  </footer>
)

export default Footer
