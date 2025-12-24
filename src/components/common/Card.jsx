
import React from 'react';
import './Card.css';

const Card = ({
    children,
    className = '',
    hover = true,
    onClick
}) => {
    return (
        <div
            className={`theme-card ${hover ? 'theme-card--hover' : ''} ${className}`}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default Card;
