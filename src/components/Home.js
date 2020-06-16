import React from 'react';
import { Link } from 'react-router-dom'
import { Form, Col, Button, Card } from 'react-bootstrap';
import img3 from '../assets/T1 (8).jpg';
import img4 from '../assets/T1 (10).jpg';
import img5 from '../assets/T1 (12).jpg';
import img1 from '../assets/about-home.jpg';
// import img2 from '../assets/about-home2.jpg';
import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpg';


const Home = () => (
    <div>
        
        <div className="header-1">
            <h2>welcome To An Awesome Experience</h2>
        </div>
            

        <div className="second-part">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={img1} alt=""/>
                    </div>

                    <div className="col-md-6">
                        <div className="brief-abt">
                            <h2>What we do</h2>
                            <p>We make touring experience fun for all. We have our team who are constantly ready to be of service to you through out the tour. We have gone through Paris, Burkinafaso, Rwanda, Italy, Las Vegas, India and many more... </p>

                            <Link to="/about" className="butn">More</Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

        <div className="places">
            <div className="container">
                <div className="places-title">
                    <h3>Next</h3>
                    <p>This are the places to be visted this year...</p>
                </div>
                
                <div className="row">
                    <div className="col-md-4 ">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img3} />
                            <Card.Body>
                                <Card.Title>Paris</Card.Title>
                                <Card.Text>
                                We will be going throght the beautiful city of paris this summer
                                </Card.Text>
                                <Button variant="primary">Book</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img4} />
                            <Card.Body>
                                <Card.Title>Paris</Card.Title>
                                <Card.Text>
                                We will be going throght the beautiful city of paris this summer
                                </Card.Text>
                                <Button variant="primary">Book</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img5} />
                            <Card.Body>
                                <Card.Title>Paris</Card.Title>
                                <Card.Text>
                                We will be going throght the beautiful city of paris this summer
                                </Card.Text>
                                <Button variant="primary">Book</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
        

        <div className="booking">
            <div className="container book">
                <div className="row">

                    <div className="col-md-6 center">
                        <Card style={{ width: '18rem', border: 'none' }} className="card-home-abt" >
                            <Card.Img variant="top" src={p1} className="card-img" />
                            <Card.Body>
                                <Card.Title className="card-name">John Smith</Card.Title>
                                <Card.Text className="card-desc">
                               <span className="qt">&quot;</span>The tour through paris was amazing, From the hotels to the ride. I am looking forward to another tour with dullame.
                                </Card.Text>
                                
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem', border: 'none' }} className="card-home-abt" >
                            <Card.Img className="card-img" variant="top" src={p2} />
                            <Card.Body>
                                <Card.Title className="card-name"> Ashley Stone</Card.Title>
                                <Card.Text className="card-desc" >
                                <span className="qt">&quot;</span>At first i was feeling uneasy, but the warm welcome made me realize, I made the right choice. 
                                </Card.Text>
                                
                            </Card.Body>
                        </Card>

                    </div>

                    <div className="col-md-6">
                        <Form className="container booking-form">
                        
                            <Col>
                                <Form.Control placeholder="First name" /> <br/>
                                <Form.Control placeholder="Phone Number" /> <br/>
                                <Form.Control placeholder="Email" /> <br/>
                                <Form.Control placeholder="Destination" /> <br />
                                <Form.Control as="textarea" rows="5"  placeholder="What are your expectations"/>
                            
                                <br />
                                <button className="btn">Submit</button>
                            </Col>
                        
                        </Form>      
                    </div>
                </div>
            </div>
        </div>

        <div className="check">
            <h2 className="title">
                Checkout past tours
            </h2>
            <button className="center">View</button>
        </div>
    </div>
)

export default Home;