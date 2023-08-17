import React, { useEffect, useState } from 'react';
import { fetchOrders } from './Api/orderApi';
import './order.css';

const Order = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const fetchedOrders = await fetchOrders();
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
         <li key={order._id}>
          Order ID: {order._id}<br />
          Total Price: ${order.totalPrice}<br />
          Status: {order.status}<br />
          Shipping Address: {order.shippingAddress1}, {order.city}, {order.country}<br />
       </li> 
       ))}
     </ul>
    </div>
  );
};

export default Order;
