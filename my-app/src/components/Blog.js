import React from 'react';
import { FaBlog } from 'react-icons/fa';
import './Blog.scss';

const Blog = () => {
    return (
        <div className="blog">
            <h1><FaBlog className="icon" /> Blog</h1>
            <p>Welcome to the Blog page!</p>
        </div>
    );
};

export default Blog;
