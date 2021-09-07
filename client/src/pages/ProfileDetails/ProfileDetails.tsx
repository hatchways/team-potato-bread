import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Rating from '@material-ui/lab/Rating';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import useStyles from './useStyles';
import ProfileImageList from './ProfileImageList';
import { useAuth } from '../../context/useAuthContext';
import { User } from '../../interface/User';
import { mockLoggedInUser, mockProfileUser } from '../../mocks/mockUser';

interface Props {
  user: User;
}

export default function ProfileDetails(): JSX.Element {
  const classes = useStyles();

  const { loggedInUser } = useAuth();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid container>
        <Grid item className={classes.profileCard}>
          <Card>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              />
              <CardContent className={classes.cardContent}>
                <Avatar className={classes.avatar} src={mockProfileUser.avatar} />
                <Typography className={classes.nameField} align="center">
                  {`${mockProfileUser.firstName} ${mockProfileUser.lastName}`}
                </Typography>
                <Typography align="center" variant="subtitle1">
                  {mockProfileUser.subtitle}
                </Typography>
                <IconButton className={classes.locationField} disabled>
                  <LocationOnIcon color="primary" fontSize="small" />
                  {mockProfileUser.location}
                </IconButton>
                <Typography variant="h3">About me</Typography>
                <Typography variant="subtitle2">{mockProfileUser.description}</Typography>
                <Box className={classes.imagesBox}>
                  <ProfileImageList />
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item className={classes.requestCard}>
          <Card>
            <CardActionArea>
              <CardContent component="form">
                <Typography variant="h3">${mockProfileUser.ratePerHour}/hr</Typography>
                <Rating
                  name="read-only"
                  readOnly
                  className={classes.ratingStars}
                  precision={0.5}
                  value={mockProfileUser.avgRating}
                />
                <TextField
                  id="startDate"
                  label="Start Date"
                  type="datetime-local"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  className={classes.datePicker}
                />
                <TextField
                  id="endDate"
                  label="End Date"
                  type="datetime-local"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  className={classes.datePicker}
                />
                <Button className={classes.requestButton} size="large" color="primary" variant="contained">
                  Send Request
                </Button>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}
