import React from 'react';
import { User } from '../types/userType';

// interface User {
//   username: string;
//   isAdmin: boolean;
//   //   bookedGymClasses: {
//   //     gymClassName: string;
//   //     date: string; // You can choose the appropriate date format here
//   //   }[];
// }

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            Username: {user.username}, Role: {user.isAdmin ? 'Admin' : 'User'}
            {/* {user.bookedGymClasses.length > 0 && (
              <div>
                <strong>Booked Gym Classes:</strong>
                <ul>
                  {user.bookedGymClasses.map((gymClass, gymIndex) => (
                    <li key={gymIndex}>
                      Gym Class: {gymClass.gymClassName}, Date: {gymClass.date}
                    </li>
                  ))}
                </ul>
              </div>
            )} */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
