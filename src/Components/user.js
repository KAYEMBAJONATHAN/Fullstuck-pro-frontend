import React, { useEffect} from 'react';
import { fetchUsersAPI } from './Api/userApi';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from "../redux/slices/userSlice";
import './users.css';

const User = () => {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchUsersAPI()
      .then((data) => {
        dispatch(fetchUsers(data));
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [dispatch]);

  return  (
    <div className="user">
      <h2>Users</h2>
      <ul>
        {users && users.map((user) => (
          <li 
             key={user.id}>
                 {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default User;
