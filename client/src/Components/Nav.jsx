import React from 'react'

export default function Nav() {
  return (
    <header id="header" className="transparent-nav">
    <div className="container">
      <div className="navbar-header">
        {/* Logo */}
        <div className="navbar-brand">
          <a className="logo" href="/">
            <img src="./assets/img/logo-alt.png" alt="logo" />
          </a>
        </div>
        {/* /Logo */}
        {/* Mobile toggle */}
        <button className="navbar-toggle">
          <span />
        </button>
        {/* /Mobile toggle */}
      </div>
      {/* Navigation */}
      <nav id="nav">
        <ul className="main-menu nav navbar-nav navbar-right">
          <li><a href="/">Home</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/register">Register</a></li>
          <li><a href="/#">Contact</a></li>
        </ul>
      </nav>
      {/* /Navigation */}
    </div>
  </header>
  )
}
