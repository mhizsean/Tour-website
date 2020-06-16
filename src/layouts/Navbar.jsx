import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Logo from '../assets/logo.png';

function NavBar() {
    return (
        <div>
            <Navbar expand="lg">
            <Navbar.Brand href="/">
                <img src={Logo} alt=""/>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto" style={{padding: "15px" }}>
                        <Nav.Item>
                            <Nav.Link href="/">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/about">About us</Nav.Link>
                        </Nav.Item>
                        {/* <Nav.Item>
                            <Nav.Link href="/pricing">Pricing</Nav.Link>
                        </Nav.Item> */}
                        <Nav.Item>
                            <Nav.Link href="/gallery">Gallery</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/blog">Blog</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/contact-us">Contact</Nav.Link>
                        </Nav.Item>
                    
                        <Nav.Item>
                            <i class="fab fa-facebook"></i>
                        
                        <i class="fab fa-twitter"></i>
                        
                        <i class="fab fa-instagram"></i>
                        
                        <i class="fab fa-pinterest"></i>
                        </Nav.Item>
                    </Nav>
    
                </Navbar.Collapse>
            </Navbar>


        </div>
    )
}

export default NavBar
