
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import Button from '../components/Button';
import Section from '../components/common/Section';
import Card from '../components/common/Card';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        user_phone: '',
        service_type: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Construct Mailto Link
        const subject = `New Inquiry: ${formData.service_type || 'General Contact'}`;
        const body = `Name: ${formData.user_name}%0D%0AEmail: ${formData.user_email}%0D%0APhone: ${formData.user_phone}%0D%0AService: ${formData.service_type}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;

        const mailtoLink = `mailto:clients@ashfordsolutions.org?subject=${encodeURIComponent(subject)}&body=${body}`;

        // Open Email Client
        window.location.href = mailtoLink;
    };

    return (
        <div className="contact-page">
            <Helmet>
                <title>Contact Us | Ashford Solutions LLC</title>
                <meta name="description" content="Get a quote for property maintenance or renovation in Houston. Contact Ashford Solutions LLC today." />
            </Helmet>

            <div className="page-header" data-aos="fade-down">
                <div className="container">
                    <h1>Contact Us</h1>
                    <p>Get in touch for a quote or to schedule a service.</p>
                </div>
            </div>

            <Section variant="white">
                <div className="contact-grid">
                    {/* Contact Info */}
                    <div className="contact-info" data-aos="fade-right">
                        <h2>Get In Touch</h2>
                        <div className="divider" style={{ margin: '0 0 2rem 0' }}></div>
                        <p className="contact-intro">
                            We are here to help you with all your property needs. Reach out to us via phone, email, or visit our office.
                        </p>

                        <div className="info-cards">
                            <Card className="info-card" hover={true}>
                                <div className="icon-box"><Phone size={24} /></div>
                                <div>
                                    <h3>Phone</h3>
                                    <p><a href="tel:8322631162">(832) 263-1162</a></p>
                                </div>
                            </Card>

                            <Card className="info-card" hover={true}>
                                <div className="icon-box"><Mail size={24} /></div>
                                <div>
                                    <h3>Email</h3>
                                    <p><a href="mailto:clients@ashfordsolutions.org">clients@ashfordsolutions.org</a></p>
                                </div>
                            </Card>

                            <Card className="info-card" hover={true}>
                                <div className="icon-box"><MapPin size={24} /></div>
                                <div>
                                    <h3>Address</h3>
                                    <p>2401 Fountain View Dr. Ste 464,<br />Houston, TX 77057</p>
                                </div>
                            </Card>
                        </div>

                        {/* Embedded Map */}
                        <div className="map-container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.888764834863!2d-95.48564168489146!3d29.751996981989442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c3d964696089%3A0x629555543639940!2s2401%20Fountain%20View%20Dr%20%23464%2C%20Houston%2C%20TX%2077057!5e0!3m2!1sen!2sus!4v1709568943210!5m2!1sen!2sus"
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Office Location"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <Card className="contact-form-wrapper" data-aos="fade-left">
                        <h2>Send Us a Message</h2>
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="user_name"
                                    placeholder="John Doe"
                                    required
                                    value={formData.user_name}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="user_email"
                                    placeholder="john@example.com"
                                    required
                                    value={formData.user_email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="user_phone"
                                    placeholder="(123) 456-7890"
                                    value={formData.user_phone}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="service">Service Needed</label>
                                <select
                                    id="service"
                                    name="service_type"
                                    value={formData.service_type}
                                    onChange={handleChange}
                                >
                                    <option value="">Select a Service</option>
                                    <option value="Property Preservation">Property Preservation</option>
                                    <option value="Property Maintenance">Property Maintenance</option>
                                    <option value="Renovation & Remodeling">Renovation & Remodeling</option>
                                    <option value="Inspections & Compliance">Inspections & Compliance</option>
                                    <option value="Tenant Turn Services">Tenant Turn Services</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    placeholder="How can we help you?"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            <Button variant="primary" type="submit" className="submit-btn">
                                Send Message <Send size={18} />
                            </Button>
                        </form>
                    </Card>
                </div>
            </Section>
        </div>
    );
};

export default Contact;
