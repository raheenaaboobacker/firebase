import React from 'react'

export default function About() {
  return (
    <div id="about" className="section">
    {/* container */}
    <div className="container">
      {/* row */}
      <div className="row">
        <div className="col-md-6">
          <div className="section-header">
            <h2>Welcome to Edusite</h2>
            <p className="lead">Libris vivendo eloquentiam ex ius, nec id splendide abhorreant.</p>
          </div>
          {/* feature */}
          <div className="feature">
            <i className="feature-icon fa fa-flask" />
            <div className="feature-content">
              <h4>Online Courses </h4>
              <p>Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et his suas veniam nominati.</p>
            </div>
          </div>
          {/* /feature */}
          {/* feature */}
          <div className="feature">
            <i className="feature-icon fa fa-users" />
            <div className="feature-content">
              <h4>Expert Teachers</h4>
              <p>Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et his suas veniam nominati.</p>
            </div>
          </div>
          {/* /feature */}
          {/* feature */}
          <div className="feature">
            <i className="feature-icon fa fa-comments" />
            <div className="feature-content">
              <h4>Community</h4>
              <p>Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et his suas veniam nominati.</p>
            </div>
          </div>
          {/* /feature */}
        </div>
        <div className="col-md-6">
          <div className="about-img">
            <img src="./assets/img/about.png" alt />
          </div>
        </div>
      </div>
      {/* row */}
    </div>
    {/* container */}
  </div>
  )
}
