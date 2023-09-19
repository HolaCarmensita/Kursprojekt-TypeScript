interface User {
  username: string;
  isAdmin: boolean;
  bookedGymClasses: {
    gymClassName: string;
    date: string; // Eller HTMLDate??? Får se när jag på något sätt skapar bokningsystemet
  }[];
}

const users: User[] = [
  { username: 'admin', isAdmin: true, bookedGymClasses: [] },
  { username: 'user', isAdmin: false, bookedGymClasses: [] },
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
