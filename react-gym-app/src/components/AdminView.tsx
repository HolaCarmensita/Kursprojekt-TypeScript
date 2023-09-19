import React, { useState } from 'react';
import UserList from './UserList';
import gymClassData from '../data/gymClassData';
import GymClassList from './GymClassList';

interface User {
  username: string;
  isAdmin: boolean;
}

const AdminView: React.FC = () => {
  const gymClasses = gymClassData;

  const [newUser, setNewUser] = useState<User>({
    username: '',
    isAdmin: false,
  });
  const [users, setUsers] = useState<User[]>([
    {
      username: 'admin',
      isAdmin: true,
    },
    {
      username: 'user',
      isAdmin: false,
    },
  ]);

  const handleAddUser = () => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
    setNewUser({ username: '', isAdmin: false });
  };

  return (
    <div>
      <h1>Welcome, Admin!</h1>
      <UserList users={users} />
      <GymClassList gymClasses={gymClasses} />
      <h2>Add New User</h2>
      <div>
        <label>
          Username:
          <input
            type='text'
            value={newUser.username}
            onChange={(e) =>
              setNewUser({ ...newUser, username: e.target.value })
            }
          />
        </label>
      </div>
      <div>
        <label>
          Is Admin:
          <input
            type='checkbox'
            checked={newUser.isAdmin}
            onChange={(e) =>
              setNewUser({ ...newUser, isAdmin: e.target.checked })
            }
          />
        </label>
      </div>
      <button onClick={handleAddUser}>Add User</button>
    </div>
  );
};

export default AdminView;
