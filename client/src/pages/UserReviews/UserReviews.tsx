import { Avatar, Card, CardContent, CardHeader, CssBaseline, Grid, IconButton, Typography } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Rating } from '@material-ui/lab';
import useStyles from './useStyles';

export default function UserReviews(): JSX.Element {
  const classes = useStyles();

  return (
    <Grid xs={11} sm={10} md={8} container className={classes.root}>
      <CssBaseline />
      <Grid className={classes.reviewsWrapper}>
        <Grid item>User section</Grid>
        <Card className={classes.reviewCard}>
          <CardHeader
            avatar={<Avatar aria-label="recipe">R</Avatar>}
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
          />
          <CardContent>
            <Rating name="user rating" value={5} readOnly />
            <Typography variant="body2" component="p">
              This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup
              of frozen peas along with the mussels, if you like.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
