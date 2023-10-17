import React, { useState } from 'react';
import './App.css';
import AdminView from './pages/AdminView';
import UserView from './pages/UserView';
import { login } from './authService';
import gymClasses from './data/gymClassData';
import User from './types/User';

const App: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [user, setUser] = useState<User>();

  const handleLogin = () => {
    const loggedInUser = login(username, password);
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  };

  return (
    <div className='App'>
      <h1>MVP Gym App</h1>
      {user ? (
        user.isAdmin ? (
          <AdminView />
        ) : (
          <UserView user={user} gymClasses={gymClasses} />
        )
      ) : (
        <>
          <input
            type='text'
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </>
      )}
    </div>
  );
};

export default App;
