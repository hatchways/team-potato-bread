import React, { useState } from 'react';
import { Box, Container, TextField } from '@material-ui/core';
import useStyles from './useStyles';
interface Props {
  sendMessage: (e: React.KeyboardEvent<HTMLDivElement>, message: string, setMessage: any) => void;
}
const MessageInput = ({ sendMessage }: Props): JSX.Element => {
  const [message, setMessage] = useState<string>('');
  const classes = useStyles();

  return (
    <Box className={classes.inputMessageWrap}>
      <Container>
        <TextField
          className={classes.inputMessage}
          variant="outlined"
          value={message}
          color="secondary"
          inputProps={{
            style: {
              height: '36px',
              fontSize: '1.2rem',
            },
          }}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => (e.key === 'Enter' ? sendMessage(e, message, setMessage) : null)}
        />
      </Container>
    </Box>
  );
};

export default MessageInput;
