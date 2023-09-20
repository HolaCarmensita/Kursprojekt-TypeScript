import React from 'react';
import { User } from '../types/userType';
import gymClasses from '../data/gymClassData';

interface UserViewProps {
  user: User;
}

const UserView: React.FC<UserViewProps> = ({ user }) => {
  // hämtar gym klass om det finns en id matchning i användaren, funkar!
  const getGymClassInfo = (gymClassId: number) => {
    return gymClasses.find((gymClass) => gymClass.id === gymClassId);
  };

  return (
    <div>
      {/* render available gym classes */}
      {/* Booked or not toggler next to every gym class */}
      {/* Toggler should be "disabled/activated" on gym class depending on the logged in users bookedGymClassIds */}

      <h1>Welcome, {user.username}!</h1>
      <h2>Booked Gym Classes:</h2>
      <ul>
        {user.bookedGymClassIds.map((gymClassId, index) => {
          const gymClass = getGymClassInfo(gymClassId);
          if (gymClass) {
            return (
              <li key={index}>
                <div>
                  {gymClass.gymClassName}: Date: {gymClass.date}
                  Time: {gymClass.time}
                </div>
              </li>
            );
          } else {
            return (
              <li key={index}>
                We did not find any booked gym classes with the Gym Class ID:
                {gymClassId}
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default UserView;
