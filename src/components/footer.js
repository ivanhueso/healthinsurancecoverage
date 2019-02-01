import PropTypes from 'prop-types'
import React from 'react'

const Footer = ({ siteTitle }) => (
  <footer>
    <div class="content">
      <p>
        THIS PAGE RECEIVES COMPENSATION FROM SERVICES AND PRODUCTS FEATURED ON
        THIS SITE. This site is in no way affiliated with any news source. This
        site contains affiliate and partner links. This website and the company
        that owns it is not responsible for any typographical or photographic
        errors. If you do not agree to our terms, then please leave this site
        immediately. *Clarification of the advertising headline "New Rule". -
        Merriam-Webster's Dictionary defines the word "rule" as "a piece of
        advice about the best way to do something"
        (http://www.merriam-webster.com/dictionary/rule). This article aims to
        advise the public that having proffesional advice is one of the best
        ways that you can save money on health insurance. No matter what city,
        state or zip code you live in you can compare rates and get free quotes.
        If you truly want to find the best rate and save on health insurance
        then follow our advice or "rule" to compare rates.
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
