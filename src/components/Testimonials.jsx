
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/testimonials';
import './Testimonials.css';

const Testimonials = () => {
    return (
        <section className="section testimonials-section">
            <div className="container">
                <div className="section-header" data-aos="fade-up">
                    <h2>Client Stories</h2>
                    <p>Trusted by investors and homeowners across Houston.</p>
                </div>

                <div className="testimonials-grid">
                    {testimonials.slice(0, 3).map((item, index) => (
                        <div
                            key={item.id}
                            className="testimonial-card"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="quote-icon">
                                <Quote size={32} />
                            </div>
                            <div className="stars">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={16}
                                        fill={i < item.rating ? "#d4af37" : "none"}
                                        stroke={i < item.rating ? "#d4af37" : "#cbd5e1"}
                                    />
                                ))}
                            </div>
                            <p className="testimonial-text">"{item.text}"</p>
                            <div className="testimonial-author">
                                <div className="author-info">
                                    <h4>{item.name}</h4>
                                    <span>{item.role} • {item.service}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
