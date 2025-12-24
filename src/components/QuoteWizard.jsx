
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Send } from 'lucide-react';
import Button from '../components/Button';
import './QuoteWizard.css';

const QuoteWizard = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        serviceType: '',
        propertyType: '',
        urgency: '',
        budget: '', // Added budget field
        description: '',
        name: '',
        email: '',
        phone: '',
        address: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSelection = (name, value) => {
        setFormData({ ...formData, [name]: value });
    };

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Construct Mailto Link
        const subject = `Quote Request: ${formData.serviceType} (${formData.propertyType})`;
        const body =
            `Request Details:
----------------
Service: ${formData.serviceType}
Property Type: ${formData.propertyType}
Urgency: ${formData.urgency}
Budget: ${formData.budget}

Description:
${formData.description}

Contact Info:
-------------
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Property Address: ${formData.address}`;

        const mailtoLink = `mailto:clients@ashfordsolutions.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Open Email Client
        window.location.href = mailtoLink;
    };

    return (
        <div className="wizard-page">
            <div className="wizard-container" data-aos="fade-up">
                <div className="wizard-header">
                    <h1>Request a Quote</h1>
                    <div className="progress-bar">
                        <div className={`step-dot ${step >= 1 ? 'active' : ''}`}>1</div>
                        <div className={`step-line ${step >= 2 ? 'active' : ''}`}></div>
                        <div className={`step-dot ${step >= 2 ? 'active' : ''}`}>2</div>
                        <div className={`step-line ${step >= 3 ? 'active' : ''}`}></div>
                        <div className={`step-dot ${step >= 3 ? 'active' : ''}`}>3</div>
                    </div>
                </div>

                <form className="wizard-form" onSubmit={handleSubmit}>
                    {step === 1 && (
                        <div className="wizard-step">
                            <h2>Step 1: Project Details</h2>
                            <div className="form-group">
                                <label>What service do you need?</label>
                                <div className="options-grid">
                                    {['Property Preservation', 'Maintenance', 'Renovation', 'Inspections', 'Tenant Turn'].map((opt) => (
                                        <div
                                            key={opt}
                                            className={`option-card ${formData.serviceType === opt ? 'selected' : ''}`}
                                            onClick={() => handleSelection('serviceType', opt)}
                                        >
                                            {opt}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Property Type</label>
                                <select name="propertyType" value={formData.propertyType} onChange={handleInputChange} required>
                                    <option value="">Select Type</option>
                                    <option value="Single Family">Single Family Home</option>
                                    <option value="Multi-Family">Multi-Family / Apartment</option>
                                    <option value="Commercial">Commercial</option>
                                </select>
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="wizard-step">
                            <h2>Step 2: Scope & Budget</h2>
                            <div className="form-group">
                                <label>How urgent is this request?</label>
                                <div className="options-grid">
                                    {['Emergency', 'Urgent (1-3 Days)', 'Standard', 'Planning'].map((opt) => (
                                        <div
                                            key={opt}
                                            className={`option-card ${formData.urgency === opt ? 'selected' : ''}`}
                                            onClick={() => handleSelection('urgency', opt)}
                                        >
                                            {opt}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Estimated Budget</label>
                                <select name="budget" value={formData.budget} onChange={handleInputChange}>
                                    <option value="">Select Range</option>
                                    <option value="Under $1,000">Under $1,000</option>
                                    <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                                    <option value="$5,000 - $15,000">$5,000 - $15,000</option>
                                    <option value="$15,000+">$15,000+</option>
                                    <option value="Not Sure">Not Sure / To Be Determined</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Describe the work needed</label>
                                <textarea
                                    name="description"
                                    rows="4"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    placeholder="E.g., Roof leak, full kitchen remodel, lawn care..."
                                    required
                                ></textarea>
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="wizard-step">
                            <h2>Step 3: Contact Info</h2>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} required placeholder="Jane Doe" />
                                </div>
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required placeholder="(555) 123-4567" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder="jane@example.com" />
                            </div>
                            <div className="form-group">
                                <label>Property Address</label>
                                <input type="text" name="address" value={formData.address} onChange={handleInputChange} required placeholder="123 Main St, Houston, TX" />
                            </div>
                        </div>
                    )}

                    <div className="wizard-actions">
                        {step > 1 && (
                            <Button type="button" variant="outline" onClick={prevStep} className="action-btn">
                                <ArrowLeft size={18} /> Back
                            </Button>
                        )}

                        {step < 3 ? (
                            <Button type="button" variant="primary" onClick={nextStep} className="action-btn ml-auto" disabled={step === 1 && !formData.serviceType}>
                                Next <ArrowRight size={18} />
                            </Button>
                        ) : (
                            <Button type="submit" variant="primary" className="action-btn ml-auto">
                                Open Email Client <Send size={18} />
                            </Button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default QuoteWizard;
