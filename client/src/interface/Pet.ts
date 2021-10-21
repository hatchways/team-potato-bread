import { Image, Profile } from './User';

export interface Pet {
  _id?: string;
  name?: string;
  breed?: string;
  age?: number;
  weight?: number;
  petPhoto?: Image | File | undefined;
  description?: string;
  sex?: string;
  status?: Status[];
  spayedOrNeutered?: boolean;
  feedingSchedule?: string;
  profileId?: string;
  owner?: Profile;
  photoGallery?: Image[] | undefined | File[];
}
export interface Status {
  _id?: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}
