import React, { Component } from 'react';
import {Jumbotron} from 'react-bootstrap'
import { Link } from 'react-router-dom';

import img1 from '../assets/T1 (1).jpg';
import img2 from '../assets/T1 (2).jpg';
import img3 from '../assets/T1 (3).jpg';
import img4 from '../assets/T1 (4).jpg';
import img5 from '../assets/T1 (5).jpg';
import img6 from '../assets/T1 (6).jpg';
import img8 from '../assets/T1 (8).jpg';
import img9 from '../assets/T1 (9).jpg';
import img10 from '../assets/T1 (10).jpg';
import img11 from '../assets/T1 (11).jpg';
import img12 from '../assets/T1 (12).jpg';

class Gallery extends Component {
    render() {
        return (
            <div className="gallery">

                <Jumbotron>
                <h1>Hello, world!</h1>
                <p>
                    Check out places our tourists have visted. Fill you eyes with beautiful pictures and let the urge to go on adventure dwell in you
                </p>
                <p>
                 & if you like what you see? <Link to="/contact-us">Contact Us</Link>
                    
                </p>
                </Jumbotron>

                <div className="container">
                      <div className="heading">
                          <h2 className="text-center">Tour Gallery</h2>
                      </div>

                      <div className="row">
                          <div className="col-md-6 col-lg-4">
                              <div className="card border-0 transform-on-hover">
                                  <a href="../assets/T1 (1).jpg"><img src={img1} alt="" className="card-img-top"/></a>
                                  <div className="card--body">
                                      <h6>The palace</h6>
                                      <p className="text-muted card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-6 col-lg-4">
                              <div className="card border-0 transform-on-hover">
                                  <a href="../assets/T1 (2).jpg"><img src={img2} alt="" className="card-img-top"/></a>
                                  <div className="card--body">
                                      <h6>The palace</h6>
                                      <p className="text-muted card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-6 col-lg-4">
                              <div className="card border-0 transform-on-hover">
                                  <a href="../assets/T1 (1).jpg"><img src={img3} alt="" className="card-img-top"/></a>
                                  <div className="card--body">
                                      <h6>The palace</h6>
                                      <p className="text-muted card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                  </div>
                              </div>
                          </div>
                          
                      </div>

                      <div className="row">
                          <div className="col-md-6 col-lg-4">
                              <div className="card border-0 transform-on-hover">
                                  <a href="../assets/T1 (1).jpg"><img src={img10} alt="" className="card-img-top"/></a>
                                  <div className="card--body">
                                      <h6>The palace</h6>
                                      <p className="text-muted card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-6 col-lg-4">
                              <div className="card border-0 transform-on-hover">
                                  <a href="../assets/T1 (2).jpg"><img src={img8} alt="" className="card-img-top"/></a>
                                  <div className="card--body">
                                      <h6>The palace</h6>
                                      <p className="text-muted card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-6 col-lg-4">
                              <div className="card border-0 transform-on-hover">
                                  <a href="../assets/T1 (1).jpg"><img src={img9} alt="" className="card-img-top"/></a>
                                  <div className="card--body">
                                      <h6>The palace</h6>
                                      <p className="text-muted card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="row">
                          <div className="col-md-6 col-lg-4">
                              <div className="card border-0 transform-on-hover">
                                  <a href="../assets/T1 (1).jpg"><img src={img4} alt="" className="card-img-top"/></a>
                                  <div className="card--body">
                                      <h6>The palace</h6>
                                      <p className="text-muted card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-6 col-lg-4">
                              <div className="card border-0 transform-on-hover">
                                  <a href="../assets/T1 (2).jpg"><img src={img5} alt="" className="card-img-top"/></a>
                                  <div className="card--body">
                                      <h6>The palace</h6>
                                      <p className="text-muted card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-6 col-lg-4">
                              <div className="card border-0 transform-on-hover">
                                  <a href="../assets/T1 (1).jpg"><img src={img6} alt="" className="card-img-top"/></a>
                                  <div className="card--body">
                                      <h6>The palace</h6>
                                      <p className="text-muted card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="row">
                          <div className="col-md-6 col-lg-4">
                              <div className="card border-0 transform-on-hover">
                                  <a href="../assets/T1 (1).jpg"><img src={img11} alt="" className="card-img-top"/></a>
                                  <div className="card--body">
                                      <h6 className="text-center"> Hotel</h6>
                                      <p className="text-muted card-text"> Our tourist get to have good accomodation at the  best places in whatever location we are touring</p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-6 col-lg-4">
                              <div className="card border-0 transform-on-hover">
                                  <a href="../assets/T1 (2).jpg"><img src={img12} alt="" className="card-img-top"/></a>
                                  <div className="card--body">
                                      <h6>The palace</h6>
                                      <p className="text-muted card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-6 col-lg-4">
                              <div className="card border-0 transform-on-hover">
                                  <a href="../assets/T1 (1).jpg"><img src={img2} alt="" className="card-img-top"/></a>
                                  <div className="card--body">
                                      <h6>The palace</h6>
                                      <p className="text-muted card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                </div>
            </div>
        )
    }
}

export default Gallery
