
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import logo from '../assets/logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-col brand-col">
                    <img src={logo} alt="Ashford Solutions LLC" className="footer-logo" />
                    <p className="footer-desc">
                        Your trusted partner for property preservation, maintenance, and renovation in Houston, TX.
                    </p>
                </div>

                <div className="footer-col links-col">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>

                <div className="footer-col contact-col">
                    <h3>Contact Us</h3>
                    <ul className="contact-list">
                        <li>
                            <MapPin size={18} className="icon" />
                            <span>2401 Fountain View Dr. Ste 464,<br />Houston, TX 77057</span>
                        </li>
                        <li>
                            <Phone size={18} className="icon" />
                            <a href="tel:8322631162">(832) 263-1162</a>
                        </li>
                        <li>
                            <Mail size={18} className="icon" />
                            <a href="mailto:clients@ashfordsolutions.org">clients@ashfordsolutions.org</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Ashford Solutions LLC. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
