import React, { Component } from "react";

class Header extends Component
{
    render()
    {
        return(

            <div>
      <header>
<div className="collapse bg-dark" id="navbarHeader">
<div className="container">
<div className="row">
  <div className="col-sm-8 col-md-7 py-4">
    <h4 className="text-white">About</h4>
    <p className="text-muted">Subject-6210</p>
    <p className="text-muted">Assginment-1</p>
    <p className="text-muted">SCP Files</p>
    <p className="text-muted">React</p>    
  </div>
  <div className="col-sm-4 offset-md-1 py-4">
    <h4 className="text-white">Contact</h4>
    <ul className="list-unstyled">
      <li>Submitted by Gagandeep Singh</li>
      <li>Student ID-30029497</li>
      <li>Submitted to Bruce</li>
    </ul>
  </div>
</div>
</div>
</div>
<div className="navbar navbar-dark bg-dark shadow-sm">
<div className="container">
<p className="navbar-brand d-flex align-items-center">
  <svg className="svg-icon" viewBox="0 0 20 20">
      <path d="M14.911,1.295H5.09c-0.737,0-1.339,0.603-1.339,1.339v14.733c0,0.736,0.603,1.338,1.339,1.338h9.821c0.737,0,1.339-0.602,1.339-1.338V2.634C16.25,1.898,15.648,1.295,14.911,1.295 M15.357,17.367c0,0.24-0.205,0.445-0.446,0.445H5.09c-0.241,0-0.446-0.205-0.446-0.445v-0.893h10.714V17.367z M15.357,15.58H4.644V4.42h10.714V15.58z M15.357,3.527H4.644V2.634c0-0.241,0.205-0.446,0.446-0.446h9.821c0.241,0,0.446,0.206,0.446,0.446V3.527z"></path>
  </svg>
  <strong>Assginment 1 React-6210</strong>
</p>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
</div>
</div>
</header>
<section className="py-5 text-center container">
<div className="row py-lg-5">
<div className="col-lg-6 col-md-8 mx-auto">
  
  <h1 className="card-header">SCP Files</h1>
  <p className="card-text">The data shown in this application is 5 SCP Files with Iamges</p>
  <div className="card text-white bg-dark mb-3"></div>
  <img className="card-img-top" src="images/SCP_-_Containment_Breach.jpg" alt="SCP Foundation"></img>
  
  
</div>
</div>
</section>
</div>

        );
    }
}

export default Header;