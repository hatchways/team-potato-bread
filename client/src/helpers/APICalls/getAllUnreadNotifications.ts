import { FetchOptions } from '../../interface/FetchOptions';

const getAllUnreadNotifications = async () => {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  };
  return await fetch(`/notification/unread`, fetchOptions)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export default getAllUnreadNotifications;
