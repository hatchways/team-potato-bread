import { FetchOptions } from '../../interface/FetchOptions';

const updateRequest = async (id: string, action: string) => {
  const fetchOptions: FetchOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ _id: id, action: action }),
    credentials: 'include',
  };
  return await fetch(`/request`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export default updateRequest;
