
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import logo from '../assets/logo.png';
import Button from './Button';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="container header-container">
                <Link to="/" className="logo-container">
                    <img src={logo} alt="Ashford Solutions LLC" className="logo" />
                </Link>

                {/* Desktop Navigation */}
                <nav className="desktop-nav">
                    <ul className="nav-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li>
                            <div className="dropdown">
                                <Link to="/services" className="dropbtn">Services</Link>
                                <div className="dropdown-content">
                                    <Link to="/services#preservation">Property Preservation</Link>
                                    <Link to="/services#maintenance">Property Maintenance</Link>
                                    <Link to="/services#renovation">Renovation & Remodeling</Link>
                                    <Link to="/services#inspections">Inspections & Compliance</Link>
                                    <Link to="/services#turn">Tenant Turn Services</Link>
                                </div>
                            </div>
                        </li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </nav>

                <div className="header-actions">
                    <a href="tel:8322631162" className="phone-link">
                        <Phone size={18} />
                        <span>(832) 263-1162</span>
                    </a>
                    <div className="quote-btn-wrapper">
                        <Link to="/quote"><Button variant="primary">Get a Quote</Button></Link>
                    </div>

                    <button className="mobile-menu-btn" onClick={toggleMenu}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
                <ul className="mobile-nav-links">
                    <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                    <li><Link to="/about" onClick={toggleMenu}>About Us</Link></li>
                    <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
                    <li><Link to="/portfolio" onClick={toggleMenu}>Portfolio</Link></li>
                    <li><Link to="/contact" onClick={toggleMenu}>Contact Us</Link></li>
                    <li>
                        <Link to="/quote" onClick={toggleMenu}>
                            <Button variant="primary" className="mobile-quote-btn">Get a Quote</Button>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
