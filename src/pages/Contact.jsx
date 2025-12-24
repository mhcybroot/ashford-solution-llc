
import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Check, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Button from '../components/Button';
import './Contact.css';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('idle'); // idle, sending, success, error

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        // Replace with your actual Service ID, Template ID, and Public Key from EmailJS
        // For now, we simulate a successful send if no keys are present, or use variables
        const serviceId = 'YOUR_SERVICE_ID';
        const templateId = 'YOUR_TEMPLATE_ID';
        const publicKey = 'YOUR_PUBLIC_KEY';

        if (serviceId === 'YOUR_SERVICE_ID') {
            // Simulate success for demo
            setTimeout(() => {
                setStatus('success');
                e.target.reset();
            }, 1500);
            return;
        }

        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
            .then((result) => {
                setStatus('success');
                e.target.reset();
            }, (error) => {
                setStatus('error');
                console.log(error.text);
            });
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

            <div className="container section">
                <div className="contact-grid">
                    {/* Contact Info */}
                    <div className="contact-info" data-aos="fade-right">
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
                    <div className="contact-form-wrapper" data-aos="fade-left">
                        <h2>Send Us a Message</h2>
                        {status === 'success' ? (
                            <div className="success-message">
                                <Check size={48} className="success-icon" />
                                <h3>Message Sent!</h3>
                                <p>Thank you for contacting us. We will get back to you shortly.</p>
                                <Button variant="outline" onClick={() => setStatus('idle')}>Send Another</Button>
                            </div>
                        ) : (
                            <form className="contact-form" ref={form} onSubmit={sendEmail}>
                                <div className="form-group">
                                    <label htmlFor="name">Full Name</label>
                                    <input type="text" id="name" name="user_name" placeholder="John Doe" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" id="email" name="user_email" placeholder="john@example.com" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input type="tel" id="phone" name="user_phone" placeholder="(123) 456-7890" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="service">Service Needed</label>
                                    <select id="service" name="service_type">
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

                                {status === 'error' && (
                                    <div className="error-message">
                                        <AlertCircle size={20} />
                                        <span>Something went wrong. Please try again or call us directly.</span>
                                    </div>
                                )}

                                <Button variant="primary" type="submit" className="submit-btn" disabled={status === 'sending'}>
                                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                                </Button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
