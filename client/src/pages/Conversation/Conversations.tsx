import React, { useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import ConversationSideBar from '../../components/Conversation/ConversationSideBar/ConversationSideBar';
import ConversationChat from '../../components/Conversation/ConversationChat/ConversationChat';
import { useConversation } from '../../context/useConversationContext';
import { useSocket } from '../../context/useSocketContext';
import { useAuth } from '../../context/useAuthContext';
import useStyles from './useStyles';
const Conversations = (): JSX.Element => {
  const classes = useStyles();
  const { currentConversation } = useConversation();
  const { loggedInUser } = useAuth();
  const { socket } = useSocket();
  useEffect(() => {
    if (socket) {
      if (!currentConversation || !loggedInUser) return;
      socket.emit('JoinConversation', { userId: loggedInUser._id, conversationId: currentConversation._id }, () => {
        return () => {
          socket.emit('disconnect');
          socket.off();
        };
      });
    }
  }, [currentConversation, loggedInUser, socket]);
  return (
    <Grid container className={classes.conversationBody}>
      <Grid item xs={3} md={3} xl={2} className={classes.sideBar}>
        <ConversationSideBar />
      </Grid>
      {currentConversation ? (
        <Grid item xs={6} md={6} xl={8} className={classes.sideBar}>
          <ConversationChat />
        </Grid>
      ) : (
        <Grid item xs={6} md={6} xl={8} className={classes.sideBarEmpty}>
          <Typography>Please select a conversation</Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default Conversations;
