import React, { useState } from 'react';
import UserList from './UserList';
import usersData from '../data/usersData';
import { GymClass } from '../types/gymClassType';
import GymClassList from './GymClassList';
import gymClassData from '../data/gymClassData';
import GymClassForm from './gymClassForm';
import { User } from '../types/userType';

// import gymClassData from '../data/gymClassData';

// interface User {
//   username: string;
//   isAdmin: boolean;
// }

const AdminView: React.FC = () => {
  const [newUser, setNewUser] = useState<User>({
    username: '',
    isAdmin: false,
    bookedGymClassIds: [],
  });
  const [users, setUsers] = useState<User[]>(usersData);
  const [gymClasses, setGymClasses] = useState<GymClass[]>(gymClassData);

  const handleAddUser = () => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
    setNewUser({ username: '', isAdmin: false, bookedGymClassIds: [] });
  };

  const handleAddGymClass = (newGymClass: GymClass) => {
    setGymClasses((prevGymClasses) => [...prevGymClasses, newGymClass]);
  };

  return (
    <div>
      <h1>Welcome, Admin!</h1>
      <UserList users={users} />

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

      {/* Display the GymClassForm component for adding gym classes */}
      <GymClassForm onAddGymClass={handleAddGymClass} />

      {/* Display the GymClassList component */}
      <GymClassList gymClasses={gymClasses} />
    </div>
  );
};

export default AdminView;
