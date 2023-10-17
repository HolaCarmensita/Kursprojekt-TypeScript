import React from 'react';
import GymClass  from '../types/GymClass';
import User  from '../types/User';

interface UserListProps {
  users: User[];
  gymClasses: GymClass[];
}

const UserList: React.FC<UserListProps> = ({ users, gymClasses }) => {
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.username}>
            <strong>Username:</strong> {user.username} <br />
            <strong>Is Admin:</strong> {user.isAdmin ? 'Yes' : 'No'} <br />
            <strong>Booked Gym Classes:</strong>
            <ul>
              {user.bookedGymClassIds.map((gymClassId) => {
                const bookedGymClass = gymClasses.find(
                  (gymClass) => gymClass.id === gymClassId
                );
                if (bookedGymClass) {
                  return (
                    <li key={gymClassId}>
                      Gym Class: {bookedGymClass.gymClassName}, Date:{' '}
                      {bookedGymClass.date}, Time: {bookedGymClass.time}
                    </li>
                  );
                }
                return null;
              })}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
