import React, { useEffect, useState } from 'react';
import { fetchOrders } from './Api/orderApi'; // Import your API function

const Order = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const fetchedOrders = await fetchOrders(); // Call your fetchOrders function
        setOrders(fetchedOrders);
      } catch (error) {
        console.error('Error fetching orders', error);
      }
    };

    getOrders();
  }, []);

  return (
    <div className="order">
      <h2>Orders</h2>
      <ul>
        {orders.map((order) => (
          <li key={order._id}>{/* Use the appropriate field from your order object */}</li>
        ))}
      </ul>
    </div>
  );
};

export default Order;
