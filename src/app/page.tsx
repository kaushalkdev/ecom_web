'use client'

import React from 'react';
import { useRouter } from 'next/navigation';

const HomePage: React.FC = () => {
    const router = useRouter();

    const handleRedirect = (path: string) => {
        router.push(path);
    };

    return (
        <div>
            <h1>Welcome to Our E-Commerce Site!</h1>
            <div>
                <button onClick={() => handleRedirect('/orders')} style={{ display: 'block', marginBottom: '5px', marginTop: '10px' }}>Go to Orders</button>
                <button onClick={() => handleRedirect('/home')} style={{ display: 'block' }}>Go to Home</button>
            </div>
        </div>
    );
};

export default HomePage;
