"use client";
import Link from "next/link";
import ProductDetail from "../components/ProductDetail";
import { useSearchParams, useRouter } from "next/navigation";
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
    const searchParams = useSearchParams();
    const router = useRouter();
    const id = searchParams.get('id');


    const [data, setData] = useState<Product | null>(null);
    const [isLoading, setLoading] = useState(true);

    const handleOnClick = () => {
        router.push('/orders')
        console.log("BUtton clicked");
    }

    if (!id) return <p>In correct Id</p>;

    useEffect(() => {
        fetch('http://localhost:3001/api/v1/products/details', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id
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
    }, [id]);

    if (isLoading) return <p>Loading...</p>;
    if (!data) return <p>No data Found</p>;

    return (
        <div>
            <ProductDetail product={data} />
            <div>
                <button type="button" onClick={handleOnClick}>
                    Buy Me</button>
            </div>
        </div>
    );
}
