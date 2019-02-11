import React from 'react'

import Layout from '../components/layout'
import Image from '../components/image'
import Banner from '../components/banner'
import SEO from '../components/seo'
import { Link } from 'gatsby'

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <SEO
          title="Latest Offers"
          keywords={[`free diapers`, `diapers samples`, `best samples`]}
        />
        <div class="wrapper">
          <div class="main" style={{ width: '300px', margin: '0 auto 40px' }}>
            <Image />
          </div>
          <Link to="/baby-samples-savings" title="Get Free Diapers Samples">
            <Banner />
          </Link>
        </div>
      </Layout>
    )
  }
}
