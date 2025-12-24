
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Shield, Hammer, Wrench, FileCheck, PaintBucket, Home as HomeIcon, Clock, ThumbsUp as ThumbsUpIcon, Users } from 'lucide-react';
import Button from '../components/Button';
import Testimonials from '../components/Testimonials';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            <Helmet>
                <title>Ashford Solutions LLC | Property Preservation & Renovation Houston</title>
                <meta name="description" content="Premier property preservation, maintenance, and renovation services in Houston, TX. Protecting and enhancing your real estate assets." />
            </Helmet>

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-overlay"></div>
                <div className="container hero-content" data-aos="fade-up">
                    <h1>Protecting and Enhancing Your Real Estate Assets.</h1>
                    <p>Premier Property Preservation, Maintenance, and Renovation Services in Houston, TX.</p>
                    <div className="hero-actions">
                        <Link to="/services">
                            <Button variant="primary" className="hero-btn">Explore Our Services</Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="section intro-section" data-aos="fade-up">
                <div className="container">
                    <div className="intro-text">
                        <h2>Your Trusted Partner in Property Care</h2>
                        <div className="divider"></div>
                        <p>
                            Ashford Solutions LLC is a dedicated partner for investors, landlords, and property owners.
                            We ensure your properties remain compliant, secure, and market-ready.
                            Whether it's a vacant asset needing preservation or a rental requiring routine maintenance,
                            we treat every property with the highest level of care and professionalism.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Overview Section */}
            <section className="section services-section">
                <div className="container">
                    <div className="section-header" data-aos="fade-up">
                        <h2>Our Core Services</h2>
                        <p>Comprehensive solutions for your investment.</p>
                    </div>

                    <div className="services-grid">
                        <div className="service-card" data-aos="fade-up" data-aos-delay="100">
                            <Shield size={40} strokeWidth={1.5} />
                            <h3>Property Preservation</h3>
                            <p>Protecting vacant properties from weather, vandalism, and deterioration.</p>
                        </div>

                        <div className="service-card" data-aos="fade-up" data-aos-delay="200">
                            <Wrench size={40} strokeWidth={1.5} />
                            <h3>Property Maintenance</h3>
                            <p>Routine upkeep and repairs to keep your property in top condition.</p>
                        </div>

                        <div className="service-card" data-aos="fade-up" data-aos-delay="300">
                            <Hammer size={40} strokeWidth={1.5} />
                            <h3>Renovation & Remodeling</h3>
                            <p>Full-scale upgrades to increase value and appeal for resale or rental.</p>
                        </div>

                        <div className="service-card" data-aos="fade-up" data-aos-delay="400">
                            <FileCheck size={40} strokeWidth={1.5} />
                            <h3>Inspections & Compliance</h3>
                            <p>Ensuring properties meet local codes, safety standards, and regulations.</p>
                        </div>

                        <div className="service-card" data-aos="fade-up" data-aos-delay="500">
                            <PaintBucket size={40} strokeWidth={1.5} />
                            <h3>Tenant Turn Services</h3>
                            <p>Rapid preparation between tenants including painting and cleaning.</p>
                        </div>
                    </div>

                    <div className="services-action" data-aos="fade-up">
                        <Link to="/services">
                            <Button variant="outline">View All Details</Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="section why-us-section">
                <div className="container">
                    <div className="section-header" data-aos="fade-up">
                        <h2>Why Choose Ashford Solutions?</h2>
                    </div>

                    <div className="features-grid">
                        <div className="feature-item" data-aos="fade-right" data-aos-delay="100">
                            <div className="feature-icon">
                                <Clock size={32} />
                            </div>
                            <div className="feature-content">
                                <h3>Reliable & Timely</h3>
                                <p>We understand that time is money in real estate. We deliver prompt, efficient service you can count on.</p>
                            </div>
                        </div>

                        <div className="feature-item" data-aos="fade-right" data-aos-delay="200">
                            <div className="feature-icon">
                                <ThumbsUpIcon size={32} />
                            </div>
                            <div className="feature-content">
                                <h3>Quality Craftsmanship</h3>
                                <p>From minor repairs to major renovations, we uphold high standards of quality in every job.</p>
                            </div>
                        </div>

                        <div className="feature-item" data-aos="fade-right" data-aos-delay="300">
                            <div className="feature-icon">
                                <Users size={32} />
                            </div>
                            <div className="feature-content">
                                <h3>Local Houston Experts</h3>
                                <p>Based in Houston, we know the local market, regulations, and specific needs of properties in the area.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section cta-section" data-aos="zoom-in">
                <div className="container">
                    <h2>Ready to Enhance Your Property?</h2>
                    <p>Contact us today for a quote or to schedule a service.</p>
                    <Link to="/contact">
                        <Button variant="primary">Contact Us Now</Button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
