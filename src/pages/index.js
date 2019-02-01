import React from 'react'

import Layout from '../components/layout'
import Image from '../components/image'
import Ad from '../components/ad'
import SEO from '../components/seo'
import IntroImg from '../images/family-with-health-insurance-happy.png' // Tell Webpack this JS file uses this image
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
    return <div />
  }
}
