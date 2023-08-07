import React, { useEffect, useState } from 'react';
import { fetchOrders } from './Api/orderApi';

const Order = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const getOrders = async () => {
            try {
                const fetchedOrders = await fetchOrders();
                setOrders(fetchedOrders)
            } catch (error) {
               console.error('Error fetching order', error);
            }
        }
        getOrders();
    }, []);
  return (
    <div className="order">
      <h2>Orders</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>{order.orderNumber}</li>
        ))}
      </ul>
    </div>
  );
};

export default Order;
