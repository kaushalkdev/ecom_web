"use client";
import ProductDetail from "../components/ProductDetail";
import { useState, useEffect } from 'react';

interface Product {
    _id: string;
    id: number;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    category: string;
    brand: string;
    rating: number;
    reviews: number;
    createdAt: string;
    updatedAt: string;
}

interface ApiResponse {
    result: Product;
}

export default function Home() {
    const [data, setData] = useState<Product | null>(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3001/api/v1/products/details', {
            method: 'POST',
            body: JSON.stringify({
                'id': '6703a94e13ff5eff14c0b925',
            }),
        })
            .then((res) => res.json())
            .then((res: ApiResponse) => {
                setData(res.result); // Accessing the "result" key directly
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }, []);

    if (isLoading) return <p>Loading...</p>;
    if (!data) return <p>No data Found</p>;

    return (
        <div>
            <ProductDetail product={data} />
        </div>
    );
}
