import { FetchOptions } from '../../interface/FetchOptions';

const getAllNotifications = async () => {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  };
  return await fetch(`/notification`, fetchOptions)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export default getAllNotifications;
