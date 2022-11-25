import React from 'react'
import About from '../Components/About'
import Courses from '../Components/Courses'
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'

export default function Home() {
  return (
    <><Nav/>

    <div id="home" className="hero-area">
   {/* Backgound Image */}
   <div className="bg-image bg-parallax overlay" style={{backgroundImage: 'url(./assets/img/home-background.jpg)'}} />
   {/* /Backgound Image */}
   <div className="home-wrapper">
     <div className="container">
       <div className="row">
         <div className="col-md-8">
           <h1 className="white-text">Edusite  Courses</h1>
           {/* <p className="lead white-text">Libris vivendo eloquentiam ex ius, nec id splendide abhorreant, eu pro alii error homero.</p> */}
           <a className="main-button icon-button" href="#">Get Started!</a>
         </div>
       </div>
     </div>
   </div>
 </div>
 
 <About/>
 <Courses/>
 {/* Call To Action */}
 <div id="cta" className="section">
   {/* Backgound Image */}
   <div className="bg-image bg-parallax overlay" style={{backgroundImage: 'url(./assets/img/post01.jpg)'}} />
   {/* /Backgound Image */}
   {/* container */}
   <div className="container">
     {/* row */}
     <div className="row">
       <div className="col-md-6">
         <h2 className="white-text">Ceteros fuisset mei no, soleat epicurei adipiscing ne vis.</h2>
         <p className="lead white-text">Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et his suas veniam nominati.</p>
         <a className="main-button icon-button" href="#">Get Started!</a>
       </div>
     </div>
     {/* /row */}
   </div>
   {/* /container */}
 </div>
 {/* /Call To Action */}
 {/* Why us */}
 <div id="why-us" className="section">
   {/* container */}
   <div className="container">
     {/* row */}
     <div className="row">
       <div className="section-header text-center">
         <h2>Why Edusite</h2>
         <p className="lead">Libris vivendo eloquentiam ex ius, nec id splendide abhorreant.</p>
       </div>
       {/* feature */}
       <div className="col-md-4">
         <div className="feature">
           <i className="feature-icon fa fa-flask" />
           <div className="feature-content">
             <h4>Online Courses</h4>
             <p>Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et his suas veniam nominati.</p>
           </div>
         </div>
       </div>
       {/* /feature */}
       {/* feature */}
       <div className="col-md-4">
         <div className="feature">
           <i className="feature-icon fa fa-users" />
           <div className="feature-content">
             <h4>Expert Teachers</h4>
             <p>Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et his suas veniam nominati.</p>
           </div>
         </div>
       </div>
       {/* /feature */}
       {/* feature */}
       <div className="col-md-4">
         <div className="feature">
           <i className="feature-icon fa fa-comments" />
           <div className="feature-content">
             <h4>Community</h4>
             <p>Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et his suas veniam nominati.</p>
           </div>
         </div>
       </div>
       {/* /feature */}
     </div>
     {/* /row */}
     <hr className="section-hr" />
     {/* row */}
     <div className="row">
       <div className="col-md-6">
         <h3>Persius imperdiet incorrupte et qui, munere nusquam et nec.</h3>
         <p className="lead">Libris vivendo eloquentiam ex ius, nec id splendide abhorreant.</p>
         <p>No vel facete sententiae, quodsi dolores no quo, pri ex tamquam interesset necessitatibus. Te denique cotidieque delicatissimi sed. Eu doming epicurei duo. Sit ea perfecto deseruisse theophrastus. At sed malis hendrerit, elitr deseruisse in sit, sit ei facilisi mediocrem.</p>
       </div>
       <div className="col-md-5 col-md-offset-1">
         <a className="about-video" href="#">
           <img src="assets/img/about-video.jpg" alt />
           <i className="play-icon fa fa-play" />
         </a>
       </div>
     </div>
     {/* /row */}
   </div>
   {/* /container */}
 </div>
 {/* /Why us */}
 {/* Contact CTA */}
 <div id="contact-cta" className="section">
   {/* Backgound Image */}
   <div className="bg-image bg-parallax overlay" style={{backgroundImage: 'url(assets/img/cta2-background.jpg)'}} />
   {/* Backgound Image */}
   {/* container */}
   <div className="container">
     {/* row */}
     <div className="row">
       <div className="col-md-8 col-md-offset-2 text-center">
         <h2 className="white-text">Contact Us</h2>
         <p className="lead white-text">Libris vivendo eloquentiam ex ius, nec id splendide abhorreant.</p>
         <a className="main-button icon-button" href="#">Contact Us Now</a>
       </div>
     </div>
     {/* /row */}
   </div>
   {/* /container */}
 </div>
   <Footer/>
   </>
  )
}

