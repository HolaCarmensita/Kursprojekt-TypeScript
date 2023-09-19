export interface User {
  username: string;
  isAdmin: boolean;
}

const users: User[] = [
  {
    username: 'admin',
    isAdmin: true,
  },
  {
    username: 'user',
    isAdmin: false,
  },
];

export default users;
