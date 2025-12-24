
import React from 'react';
import './Section.css';

const Section = ({
    children,
    className = '',
    variant = 'white', // 'white', 'gray', 'dark'
    id = ''
}) => {
    return (
        <section
            id={id}
            className={`theme-section theme-section--${variant} ${className}`}
        >
            <div className="theme-container">
                {children}
            </div>
        </section>
    );
};

export default Section;
