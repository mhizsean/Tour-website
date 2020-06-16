import React from 'react';
import img from '../assets/T1 (4).jpg'

function Footer() {
    return (
        <div className="main-footer">
            <div className="container footer-top">
                <div className="row">


                {/* column 1 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>Dullame</h4>
                        <p>We are a tour company that make touring experience worth every decision made. Reach out to us for more information.</p>
                        <i class="fab fa-facebook"></i>
                            
                        <i class="fab fa-twitter"></i>
                        
                        <i class="fab fa-instagram"></i>
                        
                        <i class="fab fa-pinterest"></i>
                        
                    </div>

                {/* column 1 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>Quick Links</h4>
                        <ul className="list-1">
                            <li>FAQ</li>
                            <li>Consultancy</li>
                            <li>Share our interest</li>
                            <li>Careers</li>
                            <li>Privacy policy</li>
                            <li>Terms & Conditions</li>
                        </ul>
                        
                    </div>

                {/* column 1 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>Gallery</h4>
                        <div className="img-footer">
                            <img src={img} alt=""/>
                        </div>
                        
                    </div>

                {/* column 1 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>Subscribe</h4>
                        <input type="text" placeholder="Enter email"/>
                        <button type="submit">Subscribe</button>
                        
                    </div>
                </div>
                

                   
            </div>
             {/* footer bottom */}
             <div className="footer-bottom">
                        <p className="text-xs-center">
                            &copy;{new Date().getFullYear()} Dullame. All Rights Reserved.
                        </p>
                    </div>
        </div>
    )
}

export default Footer
