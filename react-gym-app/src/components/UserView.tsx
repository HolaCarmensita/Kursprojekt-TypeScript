import React from 'react';

const UserView: React.FC = () => {
  return (
    <div>
      <h1>Welcome, User!</h1>
      {/* render available gym classes */}
      {/* Booked or not toggler next to every gym class */}
      {/* Toggler should be "disabled/activated" on gym class depending on the logged in users bookedGymClassIds */}
    </div>
  );
};

export default UserView;
