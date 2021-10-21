import { FetchOptions } from '../../interface/FetchOptions';
import { Pet } from '../../interface/Pet';

export const getPets = async (profileId: string) => {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  };
  return await fetch(`/pet/${profileId}/all`, fetchOptions)
    .then((res) => res.json())
    .catch((err) => ({ err: { message: err } }));
};

export const createPet = async (formData: FormData) => {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    body: formData,
    credentials: 'include',
  };

  return await fetch(`/pet/create`, fetchOptions)
    .then((res) => res.json())
    .catch((err) => ({ err: { message: err } }));
};

export const addPhotoGallery = async (formData: FormData) => {
  const fetchOptions: FetchOptions = {
    method: 'PUT',
    body: formData,
    credentials: 'include',
  };

  return await fetch(`/pet/uploadGallery`, fetchOptions)
    .then((res) => res.json())
    .catch((err) => ({ err: { message: err } }));
};

export const postStatus = async (petId: string, description: string) => {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ petId, description }),
    credentials: 'include',
  };

  return await fetch(`/pet/postStatus`, fetchOptions)
    .then((res) => res.json())
    .catch((err) => ({ err: { message: err } }));
};

export const updatePet = async (pet: Pet) => {
  const fetchOptions: FetchOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(pet),
    credentials: 'include',
  };

  return await fetch(`/pet/update`, fetchOptions)
    .then((res) => res.json())
    .catch((err) => ({ err: { message: err } }));
};

export const deletePet = async (petId: string) => {
  const fetchOptions: FetchOptions = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  };

  return await fetch(`/pet/${petId}`, fetchOptions)
    .then((res) => res.json())
    .catch((err) => ({ err: { message: err } }));
};
