import React from 'react'

export default function Footer() {
  return (
    <footer id="footer" className="section">
    {/* container */}
    <div className="container">
      {/* row */}
      <div className="row">
        {/* footer logo */}
        <div className="col-md-6">
          <div className="footer-logo">
            <a className="logo" href="index.html">
              <img src="assets/img/logo.png" alt="logo" />
            </a>
          </div>
        </div>
        {/* footer logo */}
        {/* footer nav */}
        <div className="col-md-6">
          <ul className="footer-nav">
            <li><a href="index.html">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        {/* /footer nav */}
      </div>
      {/* /row */}
      {/* row */}
      <div id="bottom-footer" className="row">
        {/* social */}
        <div className="col-md-4 col-md-push-8">
          <ul className="footer-social">
            <li><a href="#" className="facebook"><i className="fa fa-facebook" /></a></li>
            <li><a href="#" className="twitter"><i className="fa fa-twitter" /></a></li>
            <li><a href="#" className="google-plus"><i className="fa fa-google-plus" /></a></li>
            <li><a href="#" className="instagram"><i className="fa fa-instagram" /></a></li>
            <li><a href="#" className="youtube"><i className="fa fa-youtube" /></a></li>
            <li><a href="#" className="linkedin"><i className="fa fa-linkedin" /></a></li>
          </ul>
        </div>
        {/* /social */}
        {/* copyright */}
        <div className="col-md-8 col-md-pull-4">
          <div className="footer-copyright">
            <span>© Copyright 2018. All Rights Reserved. | This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="https://colorlib.com">Colorlib</a></span>
          </div>
        </div>
        {/* /copyright */}
      </div>
      {/* row */}
    </div>
    {/* /container */}
  </footer>
  )
}
