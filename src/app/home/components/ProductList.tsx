// components/ProductList.tsx
import React from 'react';

interface Product {
    id: number;
    name: string;
    price: number;
}

const products: Product[] = [
    { id: 1, name: 'Product A', price: 29.99 },
    { id: 2, name: 'Product B', price: 19.99 },
    { id: 3, name: 'Product C', price: 49.99 },
    { id: 4, name: 'Product D', price: 39.99 },
];

const ProductList: React.FC = () => {
    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - ${product.price.toFixed(2)}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
