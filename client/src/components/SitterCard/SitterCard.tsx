import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';
import { User } from '../../interface/User';
import { Card, CardContent, CardMedia, Divider } from '@material-ui/core';
import avatar from '../../Images/avatar.png';
import RoomIcon from '@material-ui/icons/Room';
import Rating from '@material-ui/lab/Rating';
import { useState } from 'react';

interface Props {
  sitter: User;
}

// const SitterCard = ({ sitter }: Props): JSX.Element => {
const SitterCard = (): JSX.Element => {
  const classes = useStyles();
  const [value, setValue] = useState<number | null>(5);

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={avatar} title="User image" />
      <CardContent className={classes.contentWrapper}>
        <Typography variant="h5" component="h5" className={classes.name}>
          Norma Byers
        </Typography>
        <Typography className={classes.subTitle}>Loving pet sitter</Typography>
        <Rating className={classes.rating} name="read-only" value={value} readOnly />
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
