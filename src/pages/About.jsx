
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Award, UserCheck, Target } from 'lucide-react';
import teamImage from '../assets/images/about-team.png';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <Helmet>
                <title>About Us | Ashford Solutions LLC</title>
                <meta name="description" content="Learn about Ashford Solutions LLC, your trusted partner for integrity-driven property care in Houston." />
            </Helmet>

            <div className="page-header" data-aos="fade-down">
                <div className="container">
                    <h1>About Us</h1>
                    <p>Building trust through quality and reliability.</p>
                </div>
            </div>

            <div className="container section">
                <div className="about-grid">
                    <div className="about-text" data-aos="fade-right">
                        <h2>Our Mission</h2>
                        <p>
                            At Ashford Solutions LLC, our mission is to provide premier property preservation, maintenance, and renovation services
                            that protecting and enhancing the value of real estate assets. We are dedicated to serving investors, landlords,
                            and property owners in Houston, TX with integrity, efficiency, and superior craftsmanship.
                        </p>
                        <p>
                            We understand the challenges of property management and aim to be the partner you can rely on to handle
                            everything from routine upkeep to complex renovations, ensuring your investment remains profitable
                            and compliant.
                        </p>
                    </div>
                    <div className="about-image-wrapper" data-aos="fade-left">
                        <img
                            src={teamImage}
                            alt="Team working on renovation"
                            className="about-image"
                        />
                    </div>
                </div>
            </div>

            <div className="section values-section">
                <div className="container">
                    <h2 className="section-title" data-aos="fade-up">Our Core Values</h2>
                    <div className="values-grid">
                        <div className="value-card" data-aos="fade-up" data-aos-delay="100">
                            <div className="value-icon"><UserCheck size={40} /></div>
                            <h3>Integrity</h3>
                            <p>We believe in honest communication and transparent pricing. You can trust us to do what we say we will do.</p>
                        </div>
                        <div className="value-card" data-aos="fade-up" data-aos-delay="200">
                            <div className="value-icon"><Award size={40} /></div>
                            <h3>Quality</h3>
                            <p>We take pride in our work. Every project, big or small, is completed to the highest standards of workmanship.</p>
                        </div>
                        <div className="value-card" data-aos="fade-up" data-aos-delay="300">
                            <div className="value-icon"><Target size={40} /></div>
                            <h3>Reliability</h3>
                            <p>We respect your time and property. Our team is punctual, professional, and dedicated to meeting deadlines.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
