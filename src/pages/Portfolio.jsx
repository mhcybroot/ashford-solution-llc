
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../components/common/Section';
import Card from '../components/common/Card';
import './Portfolio.css';

// Import Images
import imgApartment from '../assets/images/portfolio-apartment.jpg';
import imgCommercial from '../assets/images/portfolio-commercial.png';
import imgVacant from '../assets/images/portfolio-vacant.jpg';
import imgKitchen from '../assets/images/portfolio-kitchen.png';
import imgRoof from '../assets/images/portfolio-roof.jpg';
import imgPaint from '../assets/images/portfolio-paint.jpg';


const Portfolio = () => {
    const [filter, setFilter] = useState('All');

    const projects = [
        {
            id: 1,
            title: 'Modern Apartment Renovation',
            category: 'Renovation',
            image: imgApartment,
            description: 'Complete interior overhaul of a 2-bedroom apartment complex unit.'
        },
        {
            id: 2,
            title: 'Commercial Cleaning & Prep',
            category: 'Maintenance',
            image: imgCommercial,
            description: 'Deep cleaning and preparation of office space for new leasing.'
        },
        {
            id: 3,
            title: 'Vacant Home Preservation',
            category: 'Preservation',
            image: imgVacant,
            description: 'Securing and lawn maintenance for a foreclosed property.'
        },
        {
            id: 4,
            title: 'Kitchen Remodel',
            category: 'Renovation',
            image: imgKitchen,
            description: 'High-end kitchen upgrade with new cabinets and countertops.'
        },
        {
            id: 5,
            title: 'Roof Inspection & Repair',
            category: 'Maintenance',
            image: imgRoof,
            description: 'Emergency patch work and full inspection report.'
        },
        {
            id: 6,
            title: 'Tenant Turnaround Paint',
            category: 'Tenant Turn',
            image: imgPaint,
            description: 'Fresh coat of paint and minor drywall repairs for incoming tenant.'
        }
    ];

    const categories = ['All', 'Renovation', 'Maintenance', 'Preservation', 'Tenant Turn'];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(project => project.category === filter);

    return (
        <div className="portfolio-page">
            <Helmet>
                <title>Portfolio | Ashford Solutions LLC</title>
                <meta name="description" content="Browse our recent property renovation and maintenance projects in Houston." />
            </Helmet>

            <div className="page-header" data-aos="fade-down">
                <div className="container">
                    <h1>Our Portfolio</h1>
                    <p>A showcase of our recent projects and quality craftsmanship.</p>
                </div>
            </div>

            <Section variant="white">
                {/* Filter Buttons */}
                <div className="filter-container" data-aos="fade-up">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`filter-btn ${filter === cat ? 'active' : ''}`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Project Grid */}
                <div className="projects-grid">
                    {filteredProjects.map((project) => (
                        <Card
                            key={project.id}
                            className="project-card"
                            data-aos="fade-up"
                        >
                            <div className="project-image-container">
                                <img src={project.image} alt={project.title} className="project-image" />
                                <div className="project-overlay">
                                    <span className="project-category">{project.category}</span>
                                </div>
                            </div>
                            <div className="project-details">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default Portfolio;
