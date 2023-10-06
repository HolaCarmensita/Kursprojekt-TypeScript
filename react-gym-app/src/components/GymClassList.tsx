import React from 'react';
import { GymClass } from '../types/gymClassType';

interface GymClassListProps {
  gymClasses: GymClass[];
}

const GymClassList: React.FC<GymClassListProps> = ({ gymClasses }) => {
  return (
    <div>
      <h2>Gym Class List</h2>
      <ul>
        {gymClasses.map((gymClass, index) => (
          <li key={index}>
            Gym Class: {gymClass.gymClassName}, Date: {gymClass.date}, Time:
            {gymClass.time}
            {gymClass.date},Trainer: {gymClass.trainerName}, id: {gymClass.id}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GymClassList;
