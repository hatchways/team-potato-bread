import { Image } from '../../interface/User';
import { FetchOptions } from '../../interface/FetchOptions';

const uploadMeetupImage = async (formData: FormData): Promise<Image> => {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    body: formData,
    credentials: 'include',
  };
  return await fetch(`/meetup/image`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export default uploadMeetupImage;
