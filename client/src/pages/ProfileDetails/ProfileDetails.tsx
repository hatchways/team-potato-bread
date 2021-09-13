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
import { Sitter, User, Profile, Image } from '../../interface/User';
import { getSitterProfile } from '../../helpers/APICalls/getSitterProfile';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface Props {
  sitter: Sitter;
  profile: Profile;
  user: User;
  image: Image;
}

const initSitter: Sitter = {
  profile: {
    firstName: '',
    lastName: '',
    location: '',
    avgRating: 0,
    user: {
      email: '',
      username: '',
      avatar: '',
      images: [{ imageUrl: '' }],
    },
  },
};

type idParams = {
  profileId: string;
};

export default function ProfileDetails(): JSX.Element {
  const classes = useStyles();
  const { profileId } = useParams<idParams>();
  const [sitter, setSitter] = useState<Sitter>(initSitter);
  const [images, setImages] = useState<Image[]>([{ imageUrl: '' }]);
  const [bannerImage, setBannerImage] = useState<Image>();
  const { loggedInUser } = useAuth();

  useEffect(() => {
    getSitterProfile(profileId).then((data) => {
      const sitterProfile = data;
      setSitter(sitterProfile);
      const profileImages = data.user?.images as Image[];
      const newBannerImage = profileImages.shift();
      setBannerImage(newBannerImage);
      setImages(profileImages);
    });
  }, [profileId]);

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid container>
        <Grid item className={classes.profileCard}>
          <Card>
            <CardActionArea>
              <CardMedia className={classes.media} image={bannerImage ? bannerImage.imageUrl : ''} />
              <CardContent className={classes.cardContent}>
                <Avatar className={classes.avatar} src={sitter?.user?.avatar} />
                <Typography className={classes.nameField} align="center">
                  {`${sitter.profile?.firstName} ${sitter.profile?.lastName}`}
                </Typography>
                <Typography align="center" variant="subtitle1">
                  {sitter.profile?.subtitle}
                </Typography>
                <IconButton className={classes.locationField} disabled>
                  <LocationOnIcon color="primary" fontSize="small" />
                  {sitter.profile?.location}
                </IconButton>
                <Typography variant="h3">About me</Typography>
                <Typography variant="subtitle2">{sitter.profile?.description}</Typography>
                <Box className={classes.imagesBox}>{images && <ProfileImageList images={images} />}</Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item className={classes.requestCard}>
          <Card>
            <CardActionArea>
              <CardContent component="form">
                <Typography variant="h3">${sitter.profile?.ratePerHour}/hr</Typography>
                <Rating
                  name="read-only-rating"
                  readOnly
                  className={classes.ratingStars}
                  precision={0.5}
                  value={sitter.profile?.avgRating}
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
