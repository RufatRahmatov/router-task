import React from 'react';
import { FaHome } from 'react-icons/fa';
import './Home.scss';

const Home = () => {
    return (
        <div className="home">
            <h1><FaHome className="icon" /> Home</h1>
            <p>Welcome to the Home page!</p>
        </div>
    );
};

export default Home;
