import React from 'react'

import { Helmet } from 'react-helmet'

import './portfolio.css'

const Portfolio = (props) => {
  return (
    <div className="portfolio-container">
      <Helmet>
        <title>Portfolio - Soft UI Pro</title>
        <meta property="og:title" content="Portfolio - Soft UI Pro" />
      </Helmet>
    </div>
  )
}

export default Portfolio
