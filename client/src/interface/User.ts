export interface Sitter {
  profile?: Profile;
  user?: User;
  images?: Image[];
}

export interface User {
  _id?: string;
  email: string;
  username: string;
  avatar: string;
  images?: Image[];
  profile?: Profile;
  payment?: Payment[];
}
export interface Payment {
  stripeId: string;
  last4?: string | null;
  expMonth?: number | null;
  expYear?: number | null;
  name?: string | null;
  email?: string | null;
  brand?: string | null;
}
export interface Image {
  _id?: string;
  imageUrl: string;
}

export interface Profile {
  _id?: string;
  sitter: boolean;
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
export interface Conversation {
  _id: string;
  senderId: User;
  recieverId: User;
  lastMessage: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface SearchUsersApiData {
  users?: User[];
  sitters?: Profile[];
  error?: { message: string };
}
