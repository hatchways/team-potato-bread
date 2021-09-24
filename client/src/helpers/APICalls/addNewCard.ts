import { FetchOptions } from '../../interface/FetchOptions';
import { AuthApiData } from '../../interface/AuthApiData';
import { Payment } from '../../interface/User';
const AddNewCard = async (payment: Payment): Promise<AuthApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ payment }),
    credentials: 'include',
  };
  return await fetch(`/users/payment`, fetchOptions)
    .then((res) => res.json())
    .catch((err) => {
      error: {
        message: err;
      }
    });
};

export default AddNewCard;
