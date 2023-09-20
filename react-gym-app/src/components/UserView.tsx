import React from 'react';
import { User } from '../types/userType';

interface UserViewProps {
  user: User;
}

const UserView: React.FC<UserViewProps> = ({ user }) => {
  return (
    <div>
      {/* render available gym classes */}
      {/* Booked or not toggler next to every gym class */}
      {/* Toggler should be "disabled/activated" on gym class depending on the logged in users bookedGymClassIds */}

      <h1>Welcome, {user.username}!</h1>
      <h2>Booked Gym Classes:</h2>
      <ul>
        {user.bookedGymClassIds.map((gymClassId, index) => (
          <li key={index}>
            Gym Class ID: {gymClassId}
            {/* You can fetch additional information about the gym class using gymClassId */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserView;
