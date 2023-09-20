import React from 'react';
import { GymClass } from '../types/gymClassType';
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
  gymClasses: GymClass[]; // Pass the gym classes as a prop
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
                return null; // Handle the case where a gym class with the ID is not found
              })}
            </ul>
          </li>
        ))}
      </ul>
    </div>

    // <div>
    //   <h2>User List</h2>
    //   <ul>
    //     {users.map((user, index) => (
    //       <li key={index}>
    //         Username: {user.username}, Role: {user.isAdmin ? 'Admin' : 'User'}
    //         {/* {user.bookedGymClasses.length > 0 && (
    //           <div>
    //             <strong>Booked Gym Classes:</strong>
    //             <ul>
    //               {user.bookedGymClasses.map((gymClass, gymIndex) => (
    //                 <li key={gymIndex}>
    //                   Gym Class: {gymClass.gymClassName}, Date: {gymClass.date}
    //                 </li>
    //               ))}
    //             </ul>
    //           </div>
    //         )} */}
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
};

export default UserList;
