export interface User {
  email: string;
  username: string;
  avatar: string;
}

export interface SearchUsersApiData {
  users?: User[];
  error?: { message: string };
}
