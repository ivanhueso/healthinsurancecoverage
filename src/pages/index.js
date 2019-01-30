import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import banner from '../images/banner-1.png' // Tell Webpack this JS file uses this image

import IntroImg from '../images/five-ways-change-2019-intro-image.png' // Tell Webpack this JS file uses this image
import CompareImg from '../images/health-insurance-price-comparison.png' // Tell Webpack this JS file uses this image

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
          title="New Rules for Health Insurance"
          keywords={[`gatsby`, `application`, `react`]}
        />
        <div class="wrapper">
          <div class="main">
            <h1>New Rules for Health Insurance Leaves People Shocked!</h1>
            <h3>
              Do not pay your next health insurance bill until you read this...
            </h3>
            <p class="date-text">{this.getCurrentDate()}</p>

            <img
              src={IntroImg}
              class="float-right"
              alt="Virginia Photo"
              width="308"
            />
            <p>
              <strong>United States </strong>
              -- New policies are indiacting people in the states are overpaying
              for their health insurance plan.
              <br />
              <br />
              The simple truth is your health insurance company doesn't want you
              to know this.
              <br />
              <br />
              Did you know that you can now choose an Year-Long{' '}
              <strong>Short-Term Plans</strong> that last up to 364 days{' '}
              <a href="#">without paying tax penalties</a>. Additionally,
              depending on your status you will have the possibility to renew it
              up to a 36 month plan in total. Has your insurance agent ever told
              you that?
            </p>

            <p>
              The problem is that insurance agents are paid on commission and
              want to sell you the highest possible rate to increase their
              paycheck. To fight back, many people have turned to BRAND NEW &
              super popular services to discover{' '}
              <strong>
                MASSIVE discounts and policies from less than $89/month.
              </strong>{' '}
            </p>

            <p>
              As an authority on everything insurance, we decided to put this
              new tecnology to the test and after entering our zip code and
              brief information we were shocked at the results we found.
              <br />
              <br />
            </p>

            <img src={CompareImg} alt="Health Insurance Price Comparison" />

            <p>
              <strong>So, what is the "New Rule?"</strong> NEVER buy health
              insurance plan without{' '}
              <a href="#">comparing the discounts available online first.</a>
            </p>

            <p style={{ color: '#BF3116' }}>
              <strong>Note:</strong> You're NEVER LOCKED into your current
              policy. If you've already paid your bill, you can very easily
              cancel, and be refunded your balance!
            </p>
            <p>
              To help you SAVE, Health Insurance Coverage team has partnered
              with industry leading providers to match you with carriers who
              typically have some of the{' '}
              <a href="#">lowest rates right down to your exact ZIP CODE</a>,
              and who are now offering exceptional discounts. You can get a
              great rate in mere minutes WITHOUT A PHONE CALL. It’s ridiculously
              simple and YOU WILL SAVE MONEY.
            </p>

            <h2>Here's How You Do It:</h2>
            <p>
              <strong>Step 1:</strong>{' '}
              <a href="#">
                Tap your state to instantly check your zip code for free
              </a>
            </p>
            <p>
              <strong>Step 2:</strong> Once you go through a few questions, a
              qualified representative will contact you with the latest and best
              oportunities with{' '}
              <strong>Rates from Less than $89 a Month!</strong>
            </p>
            <div style={{ maxWidth: `500px`, marginBottom: `2.5rem` }}>
              <a href="#">
                {' '}
                <Image />
              </a>
            </div>
            <a
              class="btn"
              href="http://track.htrck402.com/click"
              target="_blank"
            >
              Get Your New Rate - FREE »
            </a>
          </div>
          <div class="sidenav">
            <a href="#">
              <img src={banner} alt="Need Help With Health Insurance Ad" />
            </a>
          </div>
        </div>
      </Layout>
    )
  }
}
