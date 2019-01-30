import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import logo from '../images/health-insurance-coverage-logo.png' // Tell Webpack this JS file uses this image

const Footer = ({ siteTitle }) => (
  <footer>
    <div class="content">
      <p>
        THIS PAGE RECEIVES COMPENSATION FROM SERVICES AND PRODUCTS FEATURED ON
        THIS SITE. This site is in no way affiliated with any news source. This
        site contains affiliate and partner links. This website and the company
        that owns it is not responsible for any typographical or photographic
        errors. If you do not agree to our terms and policies, then please leave
        this site immediately. *Clarification of the advertising headline "New
        Rule". - Merriam-Webster's Dictionary defines the word "rule" as "a
        piece of advice about the best way to do something"
        (http://www.merriam-webster.com/dictionary/rule). This article aims to
        advise the public that comparing rates is one of the best ways that you
        can save money on car insurance. No matter what city, state or zip code
        you live in you can compare rates and get free quotes. If you truly want
        to find the best rate and save on car insurance then follow our advice
        or "rule" to compare rates. Here is a link to a survey which demonstrate
        the importance of comparing rates and how applying this "rule", in any
        state city or zip code, can help drivers save 32% and $368 per year. A
        second survey which analyzed car insurance quotes for 1,000 zip codes
        across the U.S. found that within a given zip code, rates vary by 154%
        on average, allowing drivers to find an average of 32% and $368 per year
        in savings.
      </p>
      <hr />
      <p>
        © {new Date().getFullYear()}, All Rights Reserved. Health Insurance
        Coverage{' '}
      </p>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
