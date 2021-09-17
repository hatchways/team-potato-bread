export interface Sitter {
  profile?: Profile;
  user?: User;
  images?: Image[];
}

export interface User {
  _id?: string;
  id?: string;
  email: string;
  username: string;
  avatar: string;
  images?: Image[];
  profile?: Profile;
}

export interface Image {
  _id?: string;
  imageUrl: string;
}

export interface Profile {
  _id?: string;
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
  sitters?: Profile[];
  error?: { message: string };
}

export interface UserReviewsApiData {
  reviews?: Review[];
  message?: string;
}

export interface Review {
  _id: string;
  rating: number;
  text: string;
  userId: string;
  reviewer: User;
}