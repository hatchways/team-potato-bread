import { FetchOptions } from '../../interface/FetchOptions';

const updateNotificationStatus = async (userId: string, type: string) => {
  const fetchOptions: FetchOptions = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, type }),
    credentials: 'include',
  };
  return await fetch(`/notification`, fetchOptions)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export default updateNotificationStatus;
