import { Pet } from './Pet';

export interface PetsApiDataSuccess {
  message: string;
  pets: Pet[];
  token: string;
}
export interface PetApiDataSuccess {
  message: string;
  pet: Pet;
  token: string;
}
export interface PetApiData {
  error?: { message: string };
  success?: PetApiDataSuccess;
}
export interface PetsApiData {
  error?: { message: string };
  success?: PetsApiDataSuccess;
}
