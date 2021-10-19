import { FetchOptions } from '../../interface/FetchOptions';

const sendAndSaveMessage = async (conversationId: string, senderId: string, text: string) => {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ conversationId, senderId, text }),
    credentials: 'include',
  };
  return await fetch(`/conversation/sendMessage`, fetchOptions)
    .then((res) => res.json())
    .catch((err) => {
      err: {
        message: err;
      }
    });
};

export default sendAndSaveMessage;
