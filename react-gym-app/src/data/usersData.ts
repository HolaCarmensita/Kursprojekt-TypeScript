import User from "../types/User";
const users: User[] = [
  {
    username: 'admin',
    isAdmin: true,
    bookedGymClassIds: [1],
  },
  {
    username: 'user',
    isAdmin: false,
    bookedGymClassIds: [1],
  },
];

export default users;
