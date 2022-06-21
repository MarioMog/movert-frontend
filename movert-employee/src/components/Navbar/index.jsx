import React, { useState } from 'react'

import './style.css'
const Navbar = () => {
  const [logged] = useState(false)
  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <label className="brand-logo">
            Movert
          </label>
        </div>
        {logged && <>
          <div className="nav-btn">
            <label htmlFor="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
          <div className="nav-links">
            <a
              className="nav-link"
              to="/movert-servicios/user/register"
            >
              Home
            </a>
            <a
              className="nav-link"
              to="/movert-servicios/user/asociatecard"
              >
              Users
            </a>
            <a
              className="nav-link"
              to="/movert-servicios/user/asociatecard"
              >
              Cards
            </a>
            <button className="btn-logout">
              Sign out
            </button>
          </div>
        </>}
      </nav>
    </>
  )
}

export default Navbar
