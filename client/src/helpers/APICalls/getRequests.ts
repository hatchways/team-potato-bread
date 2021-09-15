import { FetchOptions } from '../../interface/FetchOptions';

const getRequests = async () => {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  };
  return await fetch(`/request`, fetchOptions)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export default getRequests;
