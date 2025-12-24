
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Shield, Hammer, Wrench, FileCheck, PaintBucket } from 'lucide-react';
import Section from '../components/common/Section';
import Card from '../components/common/Card';
import './Services.css';

const Services = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [hash]);

    const services = [
        {
            id: 'preservation',
            title: 'Property Preservation',
            icon: <Shield size={48} strokeWidth={1.5} />,
            content: 'We provide comprehensive property preservation services to protect vacant properties from weather, vandalism, and deterioration. Our team secures assets for banks, investors, and realtors, ensuring they remain in optimal condition.'
        },
        {
            id: 'maintenance',
            title: 'Property Maintenance',
            icon: <Wrench size={48} strokeWidth={1.5} />,
            content: 'Routine upkeep is essential for retaining property value. We offer reliable maintenance services for occupied and vacant properties, covering everything from landscaping and lawn care to minor repairs and systems checks.'
        },
        {
            id: 'renovation',
            title: 'Renovation & Remodeling',
            icon: <Hammer size={48} strokeWidth={1.5} />,
            content: 'Unlock the full potential of your investment with our renovation services. We specialize in full-scale upgrades to increase property value and appeal for resale or rental, delivering high-quality craftsmanship on every project.'
        },
        {
            id: 'inspections',
            title: 'Inspections & Compliance',
            icon: <FileCheck size={48} strokeWidth={1.5} />,
            content: 'Stay compliant with local codes and HOA regulations. Our detailed inspections identify safety hazards and compliance issues, providing you with actionable reports to mitigate risks.'
        },
        {
            id: 'turn',
            title: 'Tenant Turn Services',
            icon: <PaintBucket size={48} strokeWidth={1.5} />,
            content: 'Minimize vacancy times with our rapid tenant turn services. We handle everything from deep cleaning and painting to necessary repairs, getting your unit ready for the next tenant quickly and efficiently.'
        }
    ];

    return (
        <div className="services-page">
            <Helmet>
                <title>Our Services | Ashford Solutions LLC</title>
                <meta name="description" content="Comprehensive property services including preservation, maintenance, renovation, inspections, and tenant turns in Houston." />
            </Helmet>

            <div className="page-header" data-aos="fade-down">
                <div className="container">
                    <h1>Our Services</h1>
                    <p>Comprehensive property solutions tailored to your needs.</p>
                </div>
            </div>

            <Section variant="white">
                <div className="services-list">
                    {services.map((service) => (
                        <Card
                            key={service.id}
                            id={service.id}
                            className="service-item-card"
                            hover={false}
                            data-aos="fade-up"
                        >
                            <div className="service-icon-wrapper">
                                {service.icon}
                            </div>
                            <div className="service-content">
                                <h2>{service.title}</h2>
                                <div className="service-divider"></div>
                                <p>{service.content}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default Services;
