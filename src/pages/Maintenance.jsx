
import React from 'react';
import { Phone, Mail } from 'lucide-react';
import logo from '../assets/logo.png';
import './Maintenance.css';

const Maintenance = () => {
    return (
        <div className="maintenance-container">
            <div className="maintenance-content">
                <img src={logo} alt="Ashford Solutions LLC" className="maintenance-logo" />
                <h1>We'll be back soon!</h1>
                <p className="maintenance-message">
                    We are currently performing scheduled maintenance to improve your experience.
                    The site will be back shortly.
                </p>
                <div className="maintenance-divider"></div>
                <p className="maintenance-sub">Need urgent assistance?</p>

                <div className="maintenance-contact">
                    <a href="tel:8322631162" className="contact-item">
                        <Phone size={20} /> (832) 263-1162
                    </a>
                    <a href="mailto:clients@ashfordsolutions.org" className="contact-item">
                        <Mail size={20} /> clients@ashfordsolutions.org
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Maintenance;
