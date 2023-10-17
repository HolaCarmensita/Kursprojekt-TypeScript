import React, { useState } from 'react';
import { User } from '../types/userType';
import BookingComponent from '../components/BookingComponent';
import { GymClass } from '../types/gymClassType';

type UserViewProps = {
  user: User; // User object with bookedGymClassIds
  gymClasses: GymClass[]; // List of available gym classes
};

const UserView: React.FC<UserViewProps> = ({ user, gymClasses }) => {
  const [bookedGymClassIds, setBookedGymClassIds] = useState<number[]>(
    user.bookedGymClassIds
  );

  // Function to handle booking a gym class
  const handleBookGymClass = (gymClassId: number) => {
    // Check if the gym class is not already booked
    if (!bookedGymClassIds.includes(gymClassId)) {
      // Om det är ok, addera the gym class ID to the user's bookedGymClassIds!
      setBookedGymClassIds([...bookedGymClassIds, gymClassId]);
    }
  };

  return (
    <div>
      <h1>Welcome, {user.username}!</h1>
      <BookingComponent
        gymClasses={gymClasses}
        onBookGymClass={handleBookGymClass}
      />
      <h2>Booked Gym Classes</h2>
      <ul>
        {bookedGymClassIds.map((gymClassId) => {
          // Find the gym class in the gymClasses array that matches the bookedGymClassId
          const bookedGymClass = gymClasses.find(
            (gymClass) => gymClass.id === gymClassId
          );

          if (bookedGymClass) {
            return (
              <li key={gymClassId}>
                Gym Class Name: {bookedGymClass.gymClassName}
                Date: {bookedGymClass.date}
                Time: {bookedGymClass.time}
              </li>
            );
          }

          return null; // Om inget hittar returnas inget, null
        })}
      </ul>
    </div>
  );
};

export default UserView;
