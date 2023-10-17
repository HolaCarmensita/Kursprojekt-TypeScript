import React from 'react';

const BookingComponent = ({ gymClasses, onBookGymClass }) => {
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

//Detta är ett exempel på hur en React-komponentet skulle se ut utan Typescript.   Gymclasses-TStype och prop-TStypes har tagits bort. Resten av koden förblir densamma. BookingComponent tar två props, gymClasses och onBookGymClass, som skickas in som parametrar i funktionen.