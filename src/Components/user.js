import React, { useEffect, useState } from 'react';
import { fetchUsers } from './Api/userApi';

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const fetchedUsers = await fetchUsers();
        setUsers(fetchedUsers);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    getUsers();
  }, []);

  return (
    <div className="user">
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default User;
