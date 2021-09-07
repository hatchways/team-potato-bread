export interface Image {
  imageUrl: string;
}

export interface User {
  email: string;
  username: string;
  avatar: string;
  images?: Image[];
}

export interface Profile {
  email: string;
  username: string;
  avatar: string;
  avgRating?: number;
  firstName: string;
  lastName: string;
  subtitle?: string;
  gender?: string;
  birthDate?: Date;
  phone?: string;
  location: string;
  ratePerHour?: number;
  description?: string;
  availability?: string;
  user?: string;
}

export interface SearchUsersApiData {
  users?: User[];
  error?: { message: string };
}
