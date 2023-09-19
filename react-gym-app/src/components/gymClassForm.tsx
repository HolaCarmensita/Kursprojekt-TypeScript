import React, { useState } from 'react';

interface GymClass {
  gymClassName: string;
  date: string;
  time: string;
  trainerName: string;
}

interface GymClassFormProps {
  onAddGymClass: (newGymClass: GymClass) => void;
}

const GymClassForm: React.FC<GymClassFormProps> = ({ onAddGymClass }) => {
  const [newGymClass, setNewGymClass] = useState<GymClass>({
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
      setNewGymClass({
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
