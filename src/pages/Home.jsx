
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Shield, Hammer, Wrench, FileCheck, PaintBucket, Clock, ThumbsUp as ThumbsUpIcon, Users, ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import Testimonials from '../components/Testimonials';
import Section from '../components/common/Section';
import Card from '../components/common/Card';
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

            {/* Introduction Section - White Background */}
            <Section variant="white" className="intro-section">
                <div className="intro-text" data-aos="fade-up">
                    <h2>Your Trusted Partner in Property Care</h2>
                    <div className="divider"></div>
                    <p>
                        Ashford Solutions LLC is a dedicated partner for investors, landlords, and property owners.
                        We ensure your properties remain compliant, secure, and market-ready.
                        Whether it's a vacant asset needing preservation or a rental requiring routine maintenance,
                        we treat every property with the highest level of care and professionalism.
                    </p>
                </div>
            </Section>

            {/* Services Overview Section - Gray Background */}
            <Section variant="gray" className="services-section">
                <div className="section-header" data-aos="fade-up">
                    <h2>Our Core Services</h2>
                    <p>Comprehensive solutions for your investment.</p>
                </div>

                <div className="services-grid">
                    <Card className="service-card" data-aos="fade-up" data-aos-delay="100">
                        <Shield size={40} className="service-icon" strokeWidth={1.5} />
                        <h3>Property Preservation</h3>
                        <p>Protecting vacant properties from weather, vandalism, and deterioration.</p>
                    </Card>

                    <Card className="service-card" data-aos="fade-up" data-aos-delay="200">
                        <Wrench size={40} className="service-icon" strokeWidth={1.5} />
                        <h3>Property Maintenance</h3>
                        <p>Routine upkeep and repairs to keep your property in top condition.</p>
                    </Card>

                    <Card className="service-card" data-aos="fade-up" data-aos-delay="300">
                        <Hammer size={40} className="service-icon" strokeWidth={1.5} />
                        <h3>Renovation & Remodeling</h3>
                        <p>Full-scale upgrades to increase value and appeal for resale or rental.</p>
                    </Card>

                    <Card className="service-card" data-aos="fade-up" data-aos-delay="400">
                        <FileCheck size={40} className="service-icon" strokeWidth={1.5} />
                        <h3>Inspections & Compliance</h3>
                        <p>Ensuring properties meet local codes, safety standards, and regulations.</p>
                    </Card>

                </div>

                <div className="services-action" data-aos="fade-up">
                    <Link to="/services">
                        <Button variant="primary">
                            Explore Full Service Catalog <ArrowRight size={18} />
                        </Button>
                    </Link>
                </div>
            </Section>

            {/* Why Choose Us Section - White Background */}
            <Section variant="white" className="why-us-section">
                <div className="section-header" data-aos="fade-up">
                    <h2>Why Choose Ashford Solutions?</h2>
                </div>

                <div className="features-grid">
                    <div className="feature-item" data-aos="fade-right" data-aos-delay="100">
                        <div className="feature-icon-wrapper">
                            <Clock size={32} />
                        </div>
                        <div className="feature-content">
                            <h3>Reliable & Timely</h3>
                            <p>We understand that time is money in real estate. We deliver prompt, efficient service you can count on.</p>
                        </div>
                    </div>

                    <div className="feature-item" data-aos="fade-right" data-aos-delay="200">
                        <div className="feature-icon-wrapper">
                            <ThumbsUpIcon size={32} />
                        </div>
                        <div className="feature-content">
                            <h3>Quality Craftsmanship</h3>
                            <p>From minor repairs to major renovations, we uphold high standards of quality in every job.</p>
                        </div>
                    </div>

                    <div className="feature-item" data-aos="fade-right" data-aos-delay="300">
                        <div className="feature-icon-wrapper">
                            <Users size={32} />
                        </div>
                        <div className="feature-content">
                            <h3>Local Houston Experts</h3>
                            <p>Based in Houston, we know the local market, regulations, and specific needs of properties in the area.</p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Testimonials Section */}
            <Testimonials />

            {/* CTA Section - Dark Background */}
            {/* CTA Section - Executive Modern Update */}
            <section className="cta-section">
                <div className="cta-overlay"></div>
                <div className="cta-container" data-aos="fade-up">
                    <h2>Ready to Enhance Your Property?</h2>
                    <p>Stop settling for subpar maintenance. Partner with Houston's premier preservation experts today.</p>
                    <div className="cta-actions">
                        <Link to="/quote">
                            <Button variant="gold" className="cta-btn">Get a Free Quote</Button>
                        </Link>
                        <Link to="/contact">
                            <Button variant="outline-white" className="cta-btn">Contact Us</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
