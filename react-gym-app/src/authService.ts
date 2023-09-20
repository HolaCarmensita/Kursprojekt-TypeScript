import users from './data/usersData';
import { User } from './types/userType'; // Import the User type from userType.ts

const allUsers: User[] = users;

export function login(username: string, password: string): User | null {
  // Simulate user authentication (kan ersättas med AUTH-token etc)
  const user = allUsers.find((user) => user.username === username);
  if (user) {
    // Skippar lösenord har inte tid
    return user;
  }
  return null;
}
