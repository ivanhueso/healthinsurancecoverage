import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import banner from '../images/selectcars.gif' // Tell Webpack this JS file uses this image
import virginia from '../images/virginia_mp.png' // Tell Webpack this JS file uses this image

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
            <p>
              <img
                src={virginia}
                style={{ float: `right`, marginLeft: '20px' }}
                alt="Virginia Photo"
                width="308"
                height="185"
              />
              <strong>Seattle, Washington</strong>— New policies are indicating
              that for years many Washington drivers have likely overpaid on
              their car insurance.
              <br />
              <br />
              The simple truth is your car insurance company doesn't want you to
              know this.
              <br />
              <br />
              Did you know,{' '}
              <strong>
                if you drive less than 50 miles/day and live in a{' '}
                <a href="#">qualified zip code</a>
              </strong>{' '}
              you can get an extremely high discount. Additionally, depending on
              your age you can get even higher discounts. Has your insurance
              agent ever told you that?
            </p>
            <p>
              The problem is that insurance agents are paid on commission and
              want to sell you the highest possible rate to increase their
              paycheck. To fight back, many drivers have turned to BRAND NEW &
              super popular <strong>"IAIS Technology"</strong> services to
              discover{' '}
              <strong>
                MASSIVE discounts and policies as low as $29/month.
              </strong>
            </p>
            <p>
              Making a smart health insurance choice can save you hundreds or
              even thousands in a year. We are experts in finding affordable
              health insurance plans that meet your needs. These affordable
              medical Insurance plans have a wide range of deductibles and low
              cost premiums to fit your lifestyle needs and budget. Affordable
              health Insurance quotes don’t have to be complicated. We make it
              simple.
            </p>
            <h2>Here's How You Do It:</h2>
            <p>
              <strong>Step 1:</strong>{' '}
              <a href="#">
                Tap your state to instantly check your zip code for free
              </a>
            </p>
            <p>
              <strong>Step 2:</strong>
              Once you go through a few questions, you will have the opportunity
              to compare the best carrier quotes in your area for an average
              savings of 32% a month.
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
