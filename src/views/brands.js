import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import SecondaryButton from '../components/secondary-button'
import FooterGray from '../components/footer-gray'
import './brands.css'

const Brands = (props) => {
  return (
    <div className="brands-container">
      <Helmet>
        <title>Brands - Soft UI Pro</title>
        <meta property="og:title" content="Brands - Soft UI Pro" />
      </Helmet>
      <Header></Header>
      <div className="brands-container1">
        <div className="brands-main">
          <div className="brands-container2">
            <h1 className="brands-text HeadingOne">You Work With</h1>
            <h1 className="brands-text1">Soft Design System</h1>
            <p className="brands-text2 Lead">
              <span className="brands-text3">
                The time is now for it be okay to be great. Subscribe now and
                get notified when it&apos;s launched!
              </span>
            </p>
            <div className="brands-container3">
              <input
                type="text"
                placeholder="Email here"
                className="brands-textinput Small input"
              />
              <SecondaryButton button="Subscribe"></SecondaryButton>
            </div>
          </div>
          <div className="brands-grid">
            <img
              alt="image"
              src="/iphone-3-1000w.png"
              className="brands-image"
            />
            <img
              alt="image"
              src="/iphone-2-1000w.png"
              className="brands-image01"
            />
            <img
              alt="image"
              src="/iphone-4-1000w.png"
              className="brands-image02"
            />
            <img
              alt="image"
              src="/iphone-1-1000w.png"
              className="brands-image03"
            />
            <img
              alt="image"
              src="/iphone-2-1000w.png"
              className="brands-image04"
            />
            <img
              alt="image"
              src="/iphone-4-1000w.png"
              className="brands-image05"
            />
            <img
              alt="image"
              src="/iphone-1-1000w.png"
              className="brands-image06"
            />
            <img
              alt="image"
              src="/iphone-3-1000w.png"
              className="brands-image07"
            />
            <img
              alt="image"
              src="/iphone-2-1000w.png"
              className="brands-image08"
            />
            <img
              alt="image"
              src="/iphone-4-1000w.png"
              className="brands-image09"
            />
            <img
              alt="image"
              src="/iphone-1-1000w.png"
              className="brands-image10"
            />
            <img
              alt="image"
              src="/iphone-3-1000w.png"
              className="brands-image11"
            />
            <img
              alt="image"
              src="/iphone-4-1000w.png"
              className="brands-image12"
            />
            <img
              alt="image"
              src="/iphone-1-1000w.png"
              className="brands-image13"
            />
            <img
              alt="image"
              src="/iphone-3-1000w.png"
              className="brands-image14"
            />
            <img
              alt="image"
              src="/iphone-2-1000w.png"
              className="brands-image15"
            />
          </div>
        </div>
      </div>
      <FooterGray></FooterGray>
    </div>
  )
}

export default Brands
