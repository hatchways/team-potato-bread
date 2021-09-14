import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import useStyles from './useStyles';
import ProfileImageList from '../ProfileDetails/ProfileImageList';
import { useAuth } from '../../context/useAuthContext';
import { Sitter, User, Profile, Image } from '../../interface/User';
import { getSitterProfile } from '../../helpers/APICalls/getSitterProfile';
import { useEffect, useState } from 'react';
import MyProfileSideBanner from '../../components/MyProfileSideBanner/MyProfileSideBanner';

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
    // username: '',
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

export default function MyProfile(): JSX.Element {
  const classes = useStyles();
  const [sitter, setSitter] = useState<Sitter>(initSitter);
  const [images, setImages] = useState<Image[]>([{ imageUrl: '' }]);
  const [bannerImage, setBannerImage] = useState<Image>();
  const { loggedInUser } = useAuth();

  useEffect(() => {
    getSitterProfile(loggedInUser?._id as string).then((data) => {
      const sitterProfile = data;
      setSitter(sitterProfile);
      const profileImages = data.user?.images as Image[];
      const newBannerImage = profileImages.shift();
      setBannerImage(newBannerImage);
      setImages(profileImages);
    });
  }, [loggedInUser]);

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid container>
        <Grid>
          <MyProfileSideBanner profile={sitter.profile as Profile} user={sitter.user as User} />
        </Grid>
        <Grid item className={classes.profileCard}>
          <Card>
            <CardActionArea>
              {bannerImage ? (
                <CardMedia className={classes.media} image={bannerImage && bannerImage.imageUrl} />
              ) : (
                <Button variant="contained" size="large">
                  Upload Banner
                </Button>
              )}
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
                <Box className={classes.imagesBox}>
                  {images ? (
                    <ProfileImageList images={images} />
                  ) : (
                    <Button variant="contained" size="large">
                      Add Images
                    </Button>
                  )}
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}
