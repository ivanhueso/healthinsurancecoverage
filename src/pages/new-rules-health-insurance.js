import React from 'react'

import Layout from '../components/layout'
import Image from '../components/image'
import Ad from '../components/ad'
import SEO from '../components/seo'
import IntroImg from '../images/family-with-health-insurance-happy.png' // Tell Webpack this JS file uses this image
import CompareImg from '../images/health-insurance-price-comparison.png' // Tell Webpack this JS file uses this image

export default class NewRulesHealthInsurance extends React.Component {
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
          keywords={[
            `health insurance`,
            `save money`,
            `free health insurance quote`,
          ]}
        />
        <div class="wrapper">
          <div class="main">
            <h1>New Rules for Health Insurance Leaves People Shocked!</h1>
            <h3>
              Do not pay your next health insurance bill until you read this...
            </h3>
            <p class="date-text">{this.getCurrentDate()}</p>

            <img src={IntroImg} class="float-right" width="308" />
            <p>
              <strong>United States </strong>
              -- New rules are indicating great benefits for people in states
              that have health insurance they can not afford.
              <br />
              <br />
              The simple truth is your health insurance company doesn't want you
              to know this.
              <br />
              <br />
              Did you know that starting from January 1st you can now{' '}
              <a
                href="http://track.healthinsurancecoverage.net/get-quote/choose-year-long-link"
                target="_blank"
              >
                choose a year long short-term plans without paying tax
                penalties?
              </a>{' '}
              Also, depending on your status, you will have the possibility to
              renew it up to a 36 month plan in total. Has your insurance agent
              ever told you that?
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
              <a
                href="http://track.healthinsurancecoverage.net/get-quote/comparing-discounts-link"
                target="_blank"
              >
                comparing the discounts available online first.
              </a>
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
              <a
                href="http://track.healthinsurancecoverage.net/get-quote/lowest-rates-link"
                target="_blank"
              >
                lowest rates right down to your exact ZIP CODE
              </a>
              , and who are now offering exceptional discounts. You can get a
              great rate in mere minutes WITHOUT A PHONE CALL. It’s ridiculously
              simple and YOU WILL SAVE MONEY.
            </p>

            <h2>Here's How You Do It:</h2>
            <p>
              <strong>Step 1:</strong>{' '}
              <a
                href="http://track.healthinsurancecoverage.net/get-quote/instantly-check-zipcode-link"
                target="_blank"
              >
                Click your state to instantly check your zip code for free
              </a>
            </p>
            <p>
              <strong>Step 2:</strong> Once you go through a few questions, a
              qualified representative will contact you with the latest{' '}
              <strong>Rates from Less than $89 a Month!</strong>
            </p>
            <div style={{ maxWidth: `500px`, marginBottom: `2.5rem` }}>
              <a
                href="http://track.healthinsurancecoverage.net/get-quote"
                target="_blank"
              >
                {' '}
                <Image />
              </a>
            </div>
            <a
              class="btn"
              href="http://track.healthinsurancecoverage.net/get-quote/get-new-rate-btn"
              target="_blank"
            >
              Get Your New Rate - FREE »
            </a>
          </div>
          <div class="sidenav">
            <a
              href="http://track.healthinsurancecoverage.net/get-quote/sidenav-ad"
              target="_blank"
            >
              <Ad />
            </a>
          </div>
        </div>
      </Layout>
    )
  }
}
