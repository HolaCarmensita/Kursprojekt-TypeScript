interface User {
  username: string;
  isAdmin: boolean;
}

const users: User[] = [
  { username: 'admin', isAdmin: true },
  { username: 'user', isAdmin: false },
];

export function login(username: string, password: string): User | null {
  // Simulate user authentication (kan ersättas med AUTH-token etc)
  const user = users.find((user) => user.username === username);
  if (user) {
    // Skippar lösenord har inte tid
    return user;
  }
  return null;
}
