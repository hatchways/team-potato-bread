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
import { getUserInfo } from '../../helpers/APICalls/getUserInfo';
import { useEffect, useState } from 'react';
import MyProfileSideBanner from '../../components/MyProfileSideBanner/MyProfileSideBanner';

interface Props {
  sitter: Sitter;
  profile: Profile;
  user: User;
  image: Image;
}

const initUser: User = {
  email: '',
  username: '',
  avatar: '',
  images: [],
  profile: {
    firstName: '',
    lastName: '',
    sitter: false,
    location: '',
    ratePerHour: 0,
  },
};

export default function MyProfile(): JSX.Element {
  const classes = useStyles();
  const [userData, setUserData] = useState<User>(initUser);
  const [images, setImages] = useState<Image[]>([]);
  const [bannerImage, setBannerImage] = useState<Image>();
  const { loggedInUser } = useAuth();

  useEffect(() => {
    getUserInfo(loggedInUser?._id as string).then((data) => {
      const newUserData = data;
      setUserData(newUserData);
      if (data.images !== undefined) {
        const profileImages = data.images as Image[];
        const newBannerImage = profileImages.shift();
        setBannerImage(newBannerImage);
        setImages(profileImages);
      }
    });
  }, [loggedInUser]);

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid container>
        <Grid item className={classes.settingSideMenu}>
          <MyProfileSideBanner profile={userData.profile as Profile} user={userData as User} />
        </Grid>
        <Grid item className={classes.profileCard}>
          <Card>
            <CardActionArea>
              <CardMedia className={classes.media} image={bannerImage && bannerImage.imageUrl} />
              <CardContent className={classes.cardContent}>
                <Avatar alt={'useAvatar'} className={classes.avatar} src={userData.avatar} />
                <Typography className={classes.nameField} align="center">
                  {userData.profile?.firstName !== undefined && userData.profile?.lastName !== undefined
                    ? `${userData.profile?.firstName} ${userData.profile?.lastName}`
                    : `${userData.username}`}
                </Typography>
                <Typography align="center" variant="subtitle1">
                  {userData.profile?.subtitle}
                </Typography>
                {userData.profile && (
                  <IconButton className={classes.locationField} disabled>
                    <LocationOnIcon color="primary" fontSize="small" />
                    {userData.profile?.location}
                  </IconButton>
                )}
                {userData.profile && (
                  <>
                    <Typography variant="h3" className={classes.aboutMe}>
                      About me
                    </Typography>
                    <Typography variant="subtitle2" className={classes.aboutMe}>
                      {userData.profile?.description}
                    </Typography>
                  </>
                )}
                <Box className={classes.imagesBox}>
                  <ProfileImageList images={images} />
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}
