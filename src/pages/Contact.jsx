
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import Button from '../components/Button';
import './Contact.css';

const Contact = () => {

    return (
        <div className="contact-page">
            <div className="page-header">
                <div className="container">
                    <h1>Contact Us</h1>
                    <p>Get in touch for a quote or to schedule a service.</p>
                </div>
            </div>

            <div className="container section">
                <div className="contact-grid">
                    {/* Contact Info */}
                    <div className="contact-info">
                        <h2>Get In Touch</h2>
                        <p className="contact-intro">
                            We are here to help you with all your property needs. Reach out to us via phone, email, or visit our office.
                        </p>

                        <div className="info-item">
                            <div className="icon-box"><Phone size={24} /></div>
                            <div>
                                <h3>Phone</h3>
                                <p><a href="tel:8322631162">(832) 263-1162</a></p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon-box"><Mail size={24} /></div>
                            <div>
                                <h3>Email</h3>
                                <p><a href="mailto:clients@ashfordsolutions.org">clients@ashfordsolutions.org</a></p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon-box"><MapPin size={24} /></div>
                            <div>
                                <h3>Address</h3>
                                <p>2401 Fountain View Dr. Ste 464,<br />Houston, TX 77057</p>
                            </div>
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
                    <div className="contact-form-wrapper">
                        <h2>Send Us a Message</h2>
                        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input type="text" id="name" name="name" placeholder="John Doe" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" id="email" name="email" placeholder="john@example.com" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input type="tel" id="phone" name="phone" placeholder="(123) 456-7890" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="service">Service Needed</label>
                                <select id="service" name="service">
                                    <option value="">Select a Service</option>
                                    <option value="preservation">Property Preservation</option>
                                    <option value="maintenance">Property Maintenance</option>
                                    <option value="renovation">Renovation & Remodeling</option>
                                    <option value="inspections">Inspections & Compliance</option>
                                    <option value="turn">Tenant Turn Services</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" rows="5" placeholder="How can we help you?" required></textarea>
                            </div>

                            <Button variant="primary" type="submit" className="submit-btn" onClick={() => alert("Thank you for your message. We will contact you shortly!")}>
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
