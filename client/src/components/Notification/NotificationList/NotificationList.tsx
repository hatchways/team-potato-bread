import { useState, useEffect } from 'react';
import NotificationItem from '../NotificationItem/NotificationItem';
import getAllNotifications from '../../../helpers/APICalls/getAllNotifications';
import { getAllUnreadNotifications } from '../../../helpers/APICalls/getAllUnreadNotifications';
import { isTuesday } from 'date-fns';
export interface Notification {
  createdAt: string;
  description: string;
  read: boolean;
  title: string;
  type: string;
  _v: number;
  _id: string;
  owner: {
    avatar: string;
    images: never[];
    _id: string;
    username: string;
    email: string;
    password: string;
    register_date: string;
    __v: number;
  };
  recipient: {
    avatar: string;
    images: never[];
    _id: string;
    username: string;
    email: string;
    password: string;
    register_date: string;
    __v: number;
  };
}

interface NotificationTypeProps {
  text: string;
}

const NotificationList: React.FC<NotificationTypeProps> = ({ text }): JSX.Element => {
  const [messageNotifications, setMessageNotifications] = useState<Notification[] | null>();
  const [bookingNotifications, setBookingNotifications] = useState<Notification[] | null>();

  useEffect(() => {
    const getData = async () => {
      const { notifications } = await getAllNotifications();
      const messages: Notification[] = [];
      const bookings: Notification[] = [];
      notifications.map((item: Notification) => {
        if (item.type === 'message') {
          messages.push(item);
        } else {
          bookings.push(item);
        }
      });
      setMessageNotifications(messages);
      setBookingNotifications(bookings);
    };

    getData();
  }, []);

  if (text === 'message') {
    return (
      <>
        {messageNotifications &&
          messageNotifications.map((notification) => {
            return <NotificationItem key={notification._id} bookingNotification={notification} type="message" />;
          })}
      </>
    );
  } else {
    return (
      <>
        {bookingNotifications &&
          bookingNotifications.map((notification) => {
            return <NotificationItem key={notification._id} bookingNotification={notification} type="booking" />;
          })}
      </>
    );
  }
};

export default NotificationList;
