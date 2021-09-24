import { FetchOptions } from '../../interface/FetchOptions';

export const getAllUnreadNotifications = async () => {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  };
  return await fetch(`/notification/unread`, fetchOptions)
    .then((res) => res.json())
    .catch((err) => console.log('----', err));
};

export const getUnreadStatus = async (type: string) => {
  try {
    const { notifications } = await getAllUnreadNotifications();
    let isUnread = false;
    if (notifications) {
      for (let i = 0; i < notifications.length; i++) {
        if (notifications[i].type.toLowerCase() === type.toLowerCase()) {
          isUnread = true;
          break;
        }
      }
    }
    return isUnread;
  } catch (e) {
    console.log(e);
  }
};
