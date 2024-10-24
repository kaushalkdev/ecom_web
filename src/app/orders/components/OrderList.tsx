// components/OrderList.tsx
import React from 'react';

interface Order {
    id: number;
    productName: string;
    price: number;
    description: string;
    boughtAt: Date;
}

const orders: Order[] = [
    { id: 1, productName: 'Product A', price: 29.99, description: 'Description for Product A', boughtAt: new Date('2023-10-01T10:00:00Z') },
    { id: 2, productName: 'Product B', price: 19.99, description: 'Description for Product B', boughtAt: new Date('2023-10-02T11:00:00Z') },
    { id: 3, productName: 'Product C', price: 49.99, description: 'Description for Product C', boughtAt: new Date('2023-10-03T12:00:00Z') },
    { id: 4, productName: 'Product D', price: 39.99, description: 'Description for Product D', boughtAt: new Date('2023-10-04T13:00:00Z') },
];

const OrderList: React.FC = () => {
    return (
        <div>
            <h2>Order List</h2>
            <ul>
                {orders.map((order) => (
                    <li key={order.id}>
                        <strong>{order.productName}</strong> - ${order.price.toFixed(2)}<br />
                        <em>{order.description}</em><br />
                        Bought at: {order.boughtAt.toLocaleString()}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrderList;
