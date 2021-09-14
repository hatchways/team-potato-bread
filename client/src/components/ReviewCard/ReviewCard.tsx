import { Card, CardHeader, Avatar, IconButton, CardContent, Typography } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useState } from 'react';
import useStyles from './useState';

export default function ReviewCard(): JSX.Element {
  const [rating, setRating] = useState<number | null>(5);
  const classes = useStyles();
  return (
    <Card elevation={2} className={classes.root}>
      <CardHeader
        className={classes.header}
        avatar={<Avatar aria-label="recipe">R</Avatar>}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardContent className={classes.content}>
        <Rating name="user rating" value={rating} readOnly />
        <Typography variant="body2" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of
          frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
    </Card>
  );
}
