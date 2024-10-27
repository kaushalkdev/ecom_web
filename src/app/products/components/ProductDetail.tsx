
import React from 'react';

interface Product {
    _id: string;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    brand: string;
    rating: number;
    reviews: number;
}

interface ProductDetailProp {
    product: Product;
}

const ProductDetail: React.FC<ProductDetailProp> = ({ product }) => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
            <div key={product._id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', width: '200px' }}>
                <img src={product.imageUrl} alt={product.name} style={{ width: '100%', borderRadius: '8px' }} />
                <h3>{product.name}</h3>
                <p>Price: ${product.price.toFixed(2)}</p>
                <p>{product.description}</p>
                <p>Brand: {product.brand}</p>
                <p>Rating: {product.rating} ({product.reviews} reviews)</p>
            </div>

        </div>
    );
};

export default ProductDetail;
