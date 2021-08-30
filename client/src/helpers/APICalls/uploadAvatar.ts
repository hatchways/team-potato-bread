import { AuthApiData } from '../../interface/AuthApiData';
import { FetchOptions } from '../../interface/FetchOptions';

const uploadAvatar = async (email: string, avatar: FormData): Promise<AuthApiData> => {
  console.log({ email, avatar });
  const fetchOptions: FetchOptions = {
    method: 'POST',
    body: avatar,
    credentials: 'include',
  };
  return await fetch(`/image/avatar`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export default uploadAvatar;
