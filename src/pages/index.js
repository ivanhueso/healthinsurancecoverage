import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import banner from '../images/selectcars.gif' // Tell Webpack this JS file uses this image

export default class Index extends React.Component {
  getCurrentDate() {
    var m = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]

    var now = new Date()
    var month = now.getMonth()
    return m[month] + ' ' + now.getDate() + ', ' + now.getFullYear()
  }
  render() {
    return (
      <Layout>
        <SEO
          title="Exclusive Coverage"
          keywords={[`gatsby`, `application`, `react`]}
        />
        <div class="wrapper">
          <div class="main">
            <h1>New Rule Leaves Washington Drivers Furious and Shocked!</h1>
            <h3>
              Do not pay your next car insurance bill until you read this...
            </h3>
            <p class="date-text">{this.getCurrentDate()}</p>

            <p>Welcome to your new Gatsby site. </p>
            <p>
              Now go build something great.Now go build something great.Now go
              build something great.Now go build something great.Now go build
              something great.Now go build something great.Now go build
              something great.Now go build something great.Now go build
              something great.Now go build something great.Now go build
              something great.Now go build something great.Now go build
              something great.Now go build something great.
              <br /> Now go build something great.Now go build something
              great.Now go build something great.Now go build something
              great.Now go build something great.Now go build something
              great.Now go build something great.Now go build something
              great.Now go build something great.Now go build something
              great.Now go build something great.Now go build something
              great.Now go build something great.Now go build something great.
              <br /> Now go build something great.Now go build something
              great.Now go build something great.Now go build something
              great.Now go build something great.Now go build something
              great.Now go build something great.Now go build something
              great.Now go build something great.Now go build something
              great.Now go build something great.Now go build something
              great.Now go build something great.Now go build something great.
              <br /> Now go build something great.Now go build something
              great.Now go build something great.Now go build something
              great.Now go build something great.Now go build something
              great.Now go build something great.Now go build something
              great.Now go build something great.Now go build something
              great.Now go build something great.Now go build something
              great.Now go build something great.Now go build something great.
              <br />
            </p>
            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
              <Image />
            </div>
            <Link to="/page-2/">Go to page 2</Link>
          </div>
          <div class="sidenav">
            <img src={banner} alt="Select Cars" />
          </div>
        </div>
      </Layout>
    )
  }
}
