import { AuthApiData } from '../../interface/AuthApiData';
import { FetchOptions } from '../../interface/FetchOptions';

const getRequests = async (userId: string) => {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  };
  return await fetch(`/request?userId=${userId}`, fetchOptions)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export default getRequests;
