import React from 'react'

import Layout from '../components/layout-offer'
import SEO from '../components/seo'

export default class BabySamplesSavings extends React.Component {
  affiliateLink() {
    let link =
      'https://www.mb102.com/lnk.asp?o=12088&c=918277&a=367983&k=18C219D555218DF6260B6A9C28EC5F5D&l=12366'
    if (this.props.location.search.length) {
      return link + '&' + this.props.location.search.substring(1)
    }
    return link
  }
  render() {
    return (
      <Layout>
        <SEO
          title="Free Diapers Samples"
          keywords={[`free diapers`, `diapers samples`, `best samples`]}
        />
        <div className="wrapper">
          <div className="main">
            <div className="box">
              <h1>How Did You Hear About This Offer?</h1>
              <h3>RECEIVE A FREE BOX OF BABY SAMPLES</h3>

              <a
                href={this.affiliateLink()}
                title="Instagram"
                className="btn-blue"
              >
                INSTAGRAM
              </a>
              <a
                href={this.affiliateLink()}
                title="Facebook"
                className="btn-blue"
              >
                FACEBOOK
              </a>
              <a
                href={this.affiliateLink()}
                title="Google"
                className="btn-blue"
              >
                GOOGLE
              </a>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
