import React from 'react';
// import about from '../assets/about.jpg';
import second from '../assets/second.jpg'
import { Card } from 'react-bootstrap';

const About = () => {
    return (
        <div className="about-us">
            <header>
                <div className="top">
                    {/* <img src={about} alt="" /> */}
                    <div className="info">
                        <h3>Welcome to <span>Dullame</span></h3>
                        <p>Your <span>#1</span> Tour Guide.</p>
                        <button>More</button>
                    </div>
                    
                </div>
                <div className="bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-sm-6">
                            <Card className="card">
                                {/* <Card.Body><i class="fas fa-globe-africa"></i></Card.Body> */}
                            <i class="fas fa-globe-africa"></i>
                                <Card.Body>Where ever you are in Africa, we are always here to serve you.</Card.Body>
                            </Card>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <Card>
                                <i class="fas fa-users"></i>
                                    <Card.Body>No matter the crowd, we are able to host everyone </Card.Body>
                                </Card>
                            </div>
                                
                            <div className="col-md-4 col-sm-6">
                                <Card>
                                <i class="fas fa-comment"></i>
                                    <Card.Body>There is room to meet new people with our multiple events that has been put in place</Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="second-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-6">
                            <p>We make touring experience fun for all. We have our team who are constantly ready to be of service to you through out the tour. We have gone through Paris, Burkinafaso, Rwanda, Italy, Las Vegas, India and many more. <br/> We have also organized birthdays, weddings,surprise proposal and all have been successful. We aim at  bringin smiles to all people, regardless of age, race or status. Do reach out to us today and let us make you experience a once in a life time experience, but you can come back for more.
                            <button>Contact us</button>
                            </p>

                            
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <img src={second} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
