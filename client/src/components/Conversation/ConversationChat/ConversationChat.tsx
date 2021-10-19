import React, { useEffect, useState } from 'react';
import useStyles from './useStyles';
import MessageInput from '../MessageInput/MessageInput';
import { Box, Container, Typography } from '@material-ui/core';
import { User } from '../../../interface/User';
import getMessages from '../../../helpers/APICalls/getMessages';
import sendAndSaveMessage from '../../../helpers/APICalls/sendMessage';
import { useAuth } from '../../../context/useAuthContext';
import { useSocket } from '../../../context/useSocketContext';
import { useConversation } from '../../../context/useConversationContext';
import moment from 'moment';
import './chat.css';

const ConversationChat = (): JSX.Element => {
  const classes = useStyles();
  const { socket } = useSocket();

  const { currentConversation, conversations, updateConversationContext } = useConversation();
  const { loggedInUser } = useAuth();
  const [sender, setSender] = useState<User | undefined>();
  const [reciever, setReciever] = useState<User | undefined>();
  const [messages, setMessages] = React.useState<
    Array<{
      senderId?: string;
      text?: string;
      sentTime?: string;
    }>
  >([]);

  useEffect(() => {
    if (!currentConversation) return;
    if (loggedInUser?._id === currentConversation.senderId?._id) {
      setSender(currentConversation.senderId);
      setReciever(currentConversation.recieverId);
    } else {
      setSender(currentConversation.recieverId);
      setReciever(currentConversation.senderId);
    }
    getMessages(currentConversation._id).then((data) => {
      data.success.messages ? setMessages(data.success.messages) : setMessages([]);
    });
  }, [currentConversation, loggedInUser]);

  useEffect(() => {
    if (!socket || !currentConversation) return;
    socket.on('message', (newMessage, conversation) => {
      conversation._id === currentConversation._id ? setMessages([...messages, newMessage]) : '';
      if (conversations) {
        const updated = conversations.map((c) => (c._id === conversation._id ? conversation : c));
        updateConversationContext(updated);
      }
    });
    return () => {
      socket.off();
    };
  }, [messages, socket, updateConversationContext, currentConversation, conversations]);

  const sendMessage = (e: { preventDefault: () => void }, message: string, setMessage: (arg0: string) => any) => {
    e.preventDefault();
    if (!loggedInUser || !loggedInUser._id || !currentConversation) return;
    if (message) {
      sendAndSaveMessage(currentConversation._id, loggedInUser._id, message).then(() => {
        setMessage('');
      });
    }
  };

  const renderTitleInfo = () => {
    if (!loggedInUser || !currentConversation) return;
    return (
      <Box>
        <Typography className={classes.chatReceiverName}>
          {loggedInUser._id === currentConversation.senderId._id
            ? currentConversation.recieverId.username
            : currentConversation.senderId.username}
        </Typography>
      </Box>
    );
  };
  const renderMessages = () => {
    if (!sender || !reciever) return;
    return messages.map((m, i) => {
      if (m.senderId === sender._id) {
        return (
          <Box key={i.toString()} className={classes.messagerWrapRight}>
            <Box>
              <Box className={classes.userMessages}>
                <Typography className={classes.textStyle}>{m.text}</Typography>
              </Box>
              <Box className={classes.sentTimeStyleRight}>{moment(m.sentTime).format('h:mm a')}</Box>
            </Box>
            <Box>
              <img className={classes.senderAvatar} src={sender.avatar} />
            </Box>
          </Box>
        );
      } else {
        return (
          <Box key={i.toString()} className={classes.messagerWrap}>
            <Box>
              <img className={classes.senderAvatar} src={reciever.avatar} />
            </Box>
            <Box>
              <Box className={classes.messageText}>
                <Typography className={classes.textStyle}>{m.text} </Typography>
              </Box>
              <Box className={classes.sentTimeStyleLeft}>{moment(m.sentTime).format('h:mm a')}</Box>
            </Box>
          </Box>
        );
      }
    });
  };
  return (
    <Box className={classes.chatContainer}>
      <Box className={classes.chatTitle}>{renderTitleInfo()}</Box>
      <Box className={classes.chatContentWrap}>
        <Container>
          <Box className={classes.chatContentBox}>{renderMessages()}</Box>
        </Container>
      </Box>
      <MessageInput sendMessage={sendMessage} />
    </Box>
  );
};

export default ConversationChat;
