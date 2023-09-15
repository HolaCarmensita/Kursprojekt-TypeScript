import React, { useState, useEffect } from 'react';
import { login } from '../request';
import { createServer } from 'miragejs';

type User = {
  name: string;
  password: string;
};

const emtyUser = { name: '', password: '' };

const Login = () => {
  const [user, setUser] = useState<User>(emtyUser);

  const handleLogin = () => {
    login(user).then((response) => {
      console.log(response);
      // setAuthenticated(true);
      // navigate('/');
    });
  };

  // useEffect(() => {
  //   console.log(user);
  // }, [user]);

  return (
    <div>
      <h1>Login</h1>
      <input
        type='text'
        placeholder='username'
        value={user.name}
        onChange={(event) =>
          setUser((state) => ({ ...state, name: event.target.value }))
        }
      ></input>
      <input
        type='text'
        placeholder='password'
        value={user.password}
        onChange={(event) =>
          setUser((state) => ({ ...state, password: event.target.value }))
        }
      ></input>
      <button onClick={() => handleLogin()}>Authenticate</button>
    </div>
  );
};

export default Login;
