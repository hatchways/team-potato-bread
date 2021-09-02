import { ChangeEvent, useState } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from './useStyles';
import { User } from '../../interface/User';
import Avatar from '@material-ui/core/Avatar';
import { Card, CardContent, CardHeader, CardMedia, Divider } from '@material-ui/core';
import avatar from '../../Images/avatar.png';
import RoomIcon from '@material-ui/icons/Room';

interface Props {
  sitter: User;
}

// const SitterCard = ({ sitter }: Props): JSX.Element => {
const SitterCard = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.avatar} image={avatar} title="User image" />
      <CardContent className={classes.contentWrapper}>
        <Typography variant="h5" component="h5" className={classes.name}>
          Norma Byers
        </Typography>
        <Typography className={classes.subTitle}>Loving pet sitter</Typography>
        <Typography className={classes.description} variant="body2" component="h6">
          Dog sitting, cat sitting, pocket pet and bird care
        </Typography>
        <Divider />
        <Box className={classes.footerWrapper}>
          <Typography className={classes.location} variant="body2" component="h6">
            <RoomIcon color="primary" />
            Toronto, Ontario
          </Typography>
          <Typography className={classes.rate} variant="body2" component="h6">
            $14/hr
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SitterCard;
