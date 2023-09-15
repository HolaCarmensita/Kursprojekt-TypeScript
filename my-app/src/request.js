import axios from 'axios';

export const login = async (user) => {
  const result = await axios.post('api/users', user);
  return result;
};
