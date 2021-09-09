export interface Sitter {
  profile?: Profile;
  user?: User;
  images?: Image[];
}

export interface User {
  email: string;
  username: string;
  avatar: string;
  images?: Image[];
}

export interface Image {
  _id?: string;
  imageUrl: string;
}

export interface Profile {
  _id?: string;
  email?: string;
  username?: string;
  avatar?: string;
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
  user?: User;
}

export interface SearchUsersApiData {
  users?: User[];
  error?: { message: string };
}
