import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from './Api/orderApi';
import { addOrder } from '../redux/slices/orderSlice';
import './order.css';

const Order = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.orders);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const fetchedOrders = await fetchOrders();
        dispatch( addOrder(fetchedOrders));
      } catch (error) {
        console.error('Error fetching orders', error);
      }
    };

    getOrders();
  }, [dispatch]);

  return (
    <div className="order">
      <h2>Orders</h2>
      <ul>
        {orders.map((order, index) => (
          <li key={index}>
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
