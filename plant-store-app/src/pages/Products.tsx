import React from 'react';
import ProductList from '../components/ProductList';

const Products: React.FC = () => {
    return (
        <div>
            <h1>Our Plants</h1>
            <h2>Aromatic Plants</h2>
            <ProductList category="aromatic" />
            <h2>Medicinal Plants</h2>
            <ProductList category="medicinal" />
        </div>
    );
};

export default Products;