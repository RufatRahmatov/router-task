import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import './Contact.scss';

const Contact = () => {
    return (
        <div className="contact">
            <h1><FaEnvelope className="icon" /> Contact</h1>
            <p>Get in touch with us.</p>
            <button>Login</button>
        </div>
    );
};

export default Contact;
