import React from 'react';

interface GymClass {
  gymClassName: string;
  date: string;
  time: string;
  trainerName: string;
}

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
            {gymClass.date},Trainer: {gymClass.trainerName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GymClassList;
