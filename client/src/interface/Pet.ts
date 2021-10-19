import { Image, Profile } from './User';
export interface Pet {
  name?: string;
  breed?: string;
  age?: number;
  weight?: number;
  petPhoto?: Image;
  description?: string;
  sex?: string;
  spayedOrNeutered?: boolean;
  feedingSchedule?: string;
  owner?: Profile;
  photoGallery?: Image[] | undefined;
}
