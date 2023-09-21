import React, { useState } from 'react';
import '../styles/hero.css'
import AuthDetails from '../components/auth/AuthDetails';

const Hero = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const handleSearch = () => {
        onSearch(searchQuery);
    };
    const handleInputChange = (e) => {
        const { value } = e.target;
        setSearchQuery(value);
        if (!value) {
            // Reset the search when the input is empty
            onSearch('');
        }
    };
    return (
        <div className="hero">
            <AuthDetails />
            <div className="rec">
                <h1 className='text-header'> A Photo Gallery of The Nature</h1>
                <p className='hero-text'> The Nature is Beautiful
                    <br /> find your favorite picture around the world.</p>
                <div className="input-flex">
                    <input
                        type="text"
                        placeholder="Search for images..."
                        value={searchQuery}
                        onChange={handleInputChange}
                    />
                    <button onClick={handleSearch} className='search'>Search</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
