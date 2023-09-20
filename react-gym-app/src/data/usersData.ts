import { User } from '../types/userType';

// export interface User {
//   username: string;
//   isAdmin: boolean;
// }

const users: User[] = [
  {
    username: 'admin',
    isAdmin: true,
    bookedGymClassIds: [1],
  },
  {
    username: 'user',
    isAdmin: false,
    bookedGymClassIds: [2],
  },
];

export default users;
