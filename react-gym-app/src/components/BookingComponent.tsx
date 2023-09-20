import React from 'react';
import { GymClass } from '../types/gymClassType';

type BookingComponentProps = {
  gymClasses: GymClass[];
  onBookGymClass: (gymClassId: number) => void; // Callback function for booking...... how?!
};

const BookingComponent: React.FC<BookingComponentProps> = ({
  gymClasses,
  onBookGymClass,
}) => {
  return (
    <div>
      <h2>Available Gym Classes</h2>
      <ul>
        {gymClasses.map((gymClass) => (
          <li key={gymClass.id}>
            {gymClass.gymClassName} - {gymClass.date} - {gymClass.time}
            <button onClick={() => onBookGymClass(gymClass.id)}>Book</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingComponent;
