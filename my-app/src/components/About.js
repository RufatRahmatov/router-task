import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import './About.scss';

const About = () => {
    return (
        <div className="about">
            <h1><FaInfoCircle className="icon" /> About</h1>
            <p>This is the About page.</p>
        </div>
    );
};

export default About;