import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
    return (
        <div className="landing-page">
            <h1>Welcome to the Online Plant Store</h1>
            <p>Discover a variety of plants to beautify your home and garden.</p>
            <Link to="/products">
                <button>Shop Now</button>
            </Link>
        </div>
    );
};

export default LandingPage;