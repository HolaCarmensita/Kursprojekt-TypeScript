import React, { useState } from 'react';
import { GymClass } from '../types/gymClassType';

// interface GymClass {
//   gymClassName: string;
//   date: string;
//   time: string;
//   trainerName: string;
// }

interface GymClassFormProps {
  onAddGymClass: (newGymClass: GymClass) => void;
}

const GymClassForm: React.FC<GymClassFormProps> = ({ onAddGymClass }) => {
  const [newGymClass, setNewGymClass] = useState<GymClass>({
    id: 3, //börjar med ett och ska växa 3 då vi har två redan existerade från början
    gymClassName: '',
    date: '',
    time: '',
    trainerName: '',
  });

  const handleAddGymClass = () => {
    if (
      newGymClass.gymClassName &&
      newGymClass.date &&
      newGymClass.time &&
      newGymClass.trainerName
    ) {
      onAddGymClass(newGymClass);
      setNewGymClass((prevGymClass) => ({
        ...prevGymClass,
        id: prevGymClass.id + 1, // för den nya gymklassen
      }));

      //reset inputfields men behåller + 1 på id för att hålla rätt ökning
      setNewGymClass({
        id: newGymClass.id + 1, // igen???
        gymClassName: '',
        date: '',
        time: '',
        trainerName: '',
      });
    }
  };

  return (
    <div>
      <h2>Add New Gym Class</h2>
      <div>
        <label>
          Gym Class Name:
          <input
            type='text'
            value={newGymClass.gymClassName}
            onChange={(e) =>
              setNewGymClass({ ...newGymClass, gymClassName: e.target.value })
            }
          />
        </label>
      </div>
      <div>
        <label>
          Date:
          <input
            type='date'
            value={newGymClass.date}
            onChange={(e) =>
              setNewGymClass({ ...newGymClass, date: e.target.value })
            }
          />
        </label>
      </div>
      <div>
        <label>
          Time:
          <input
            type='time'
            value={newGymClass.time}
            onChange={(e) =>
              setNewGymClass({ ...newGymClass, time: e.target.value })
            }
          />
        </label>
      </div>
      <div>
        <label>
          Trainer Name:
          <input
            type='text'
            value={newGymClass.trainerName}
            onChange={(e) =>
              setNewGymClass({ ...newGymClass, trainerName: e.target.value })
            }
          />
        </label>
      </div>
      <button onClick={handleAddGymClass}>Add Gym Class</button>
    </div>
  );
};

export default GymClassForm;
