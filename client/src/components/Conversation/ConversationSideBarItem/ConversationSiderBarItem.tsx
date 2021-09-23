import React, { useEffect, useState } from 'react';
import useStyles from './useStyles';
import { Box, Typography } from '@material-ui/core';
import { Conversation } from '../../../interface/User';
import { useConversation } from '../../../context/useConversationContext';
import { useSocket } from '../../../context/useSocketContext';
import { useAuth } from '../../../context/useAuthContext';
import moment from 'moment';
interface Props {
  conversation: Conversation;
}
const ConversationItem = ({ conversation }: Props): JSX.Element => {
  const classes = useStyles();
  const { updateCurrentConversation, updateConversationContext, conversations } = useConversation();
  const { loggedInUser } = useAuth();
  const { socket } = useSocket();
  const [haveNewMessages, setHaveNewMessages] = useState(false);
  const setCurrentConverstion = () => {
    updateCurrentConversation(conversation);
    setHaveNewMessages(false);
  };
  useEffect(() => {
    if (!socket || !conversations || !loggedInUser) return;
    socket.on('updateCoversation', (updatedConversation: Conversation, senderId: string) => {
      if (senderId === loggedInUser._id) return;
      if (conversations && conversation._id === updatedConversation._id) {
        const updated = conversations.map((c) => (c._id === updatedConversation._id ? updatedConversation : c));
        updateConversationContext(updated);
        setHaveNewMessages(true);
      }
    });
    return () => {
      socket.off();
    };
  }, [socket, updateConversationContext, conversations, conversation, loggedInUser]);
  if (!loggedInUser || !conversation || !conversation.recieverId._id) return <Box></Box>;
  return (
    <Box onClick={setCurrentConverstion} className={classes.conversationRow} key={conversation._id}>
      <Box className={classes.userAvatarBox}>
        <img
          className={classes.userAvatar}
          src={
            loggedInUser._id === conversation.recieverId._id
              ? conversation.senderId.avatar
              : conversation.recieverId.avatar
          }
        />
      </Box>
      <Box className={classes.userNameBox}>
        <Typography className={classes.userName}>
          {loggedInUser._id === conversation.recieverId._id
            ? conversation.senderId.username
            : conversation.recieverId.username}
        </Typography>
        <Typography>{conversation.lastMessage}</Typography>
      </Box>
      <Box className={classes.userMessageDate}>
        <Typography>{moment(conversation.updatedAt).fromNow()}</Typography>
      </Box>
      {haveNewMessages ? <Box className={classes.newMessages}></Box> : ''}
    </Box>
  );
};

export default ConversationItem;
