import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function StudentNav() {
  const navigate = useNavigate()
  const logout = () => {
    localStorage.clear();
    window.sessionStorage.clear();
    navigate('/')
  }
  return (

        <header id="header" style={{backgroundColor:"black"}} >
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
              <li><a href="/studentViewMarks">Marks</a></li>
              <li><a href="/register">Contact us</a></li>
              <li><a href="/studentprofile"><i className="fa fa-user fa-lg"></i></a></li>
              <li><a onClick={logout}>logout</a></li>

            </ul>
          </nav>
          {/* /Navigation */}
        </div>
      </header>
  )
}
