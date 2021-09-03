export interface Image {
  imageUrl: string;
}

export interface User {
  email: string;
  username: string;
  avatar: string;
  images?: Image[];
}

export interface SearchUsersApiData {
  users?: User[];
  error?: { message: string };
}
