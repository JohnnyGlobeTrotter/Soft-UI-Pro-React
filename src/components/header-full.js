import React from 'react'
import { Link } from 'react-router-dom'

import PrimaryPinkButton from './primary-pink-button'
import './header-full.css'

const HeaderFull = (props) => {
  return (
    <div className="header-full-header">
      <nav className="header-full-nav">
        <div className="header-full-container">
          <Link to="/" className="header-full-navlink Large">
            Soft UI Design System
          </Link>
          <div className="header-full-menu">
            <Link to="/" className="header-full-navlink1 Large">
              Home
            </Link>
            <Link to="/about" className="header-full-navlink2 Large">
              About
            </Link>
            <Link to="/brands" className="header-full-navlink3">
              Brands
            </Link>
            <Link to="/brands" className="header-full-navlink4">
              Portfolios
            </Link>
          </div>
          <div className="header-full-container1">
            <div className="header-full-container2">
              <PrimaryPinkButton button="buy now"></PrimaryPinkButton>
            </div>
            <svg viewBox="0 0 1024 1024" className="header-full-icon">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default HeaderFull
