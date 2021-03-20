
import React from 'react';
import '../../index.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
export default class Footer extends React.Component{
    render(){
        return(
            <footer>
                <hr/>
                <div className="footer-container">
                    <p className="copyright-text">Copyright &copy; 2021 All Rights Reserved</p>
                    <ul className="social-icons">
                        {/* <li><a href="#"><i className="fab fa-facebook" color="red"></i></a></li> */}
                    <li><a className="facebook" href="#"><FontAwesomeIcon icon={faFacebook} size="lg" color="#4267B2"/></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faInstagram} size="lg" color="#8a3ab9" /></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faLinkedin} size="lg" color="#0e76a8"/></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faTwitter} size="lg" color="#1DA1F2"/></a></li>
                    </ul>
                </div>
            </footer>
        );
    }
}