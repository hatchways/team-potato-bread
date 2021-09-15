import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CssBaseline, Grid, Card, Typography, Button, Avatar } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from './useStyles';
import { User, Profile } from '../../interface/User';
import MyProfileSideBanner from '../../components/MyProfileSideBanner/MyProfileSideBanner';
import uploadAvatar from '../../helpers/APICalls/uploadAvatar';
import UploadPhotoForm from './UploadPhotoForm/UploadPhotoForm';

type locationState = {
  user: User;
  profile: Profile;
};

interface Props {
  user: User;
  location: locationState;
}

const ProfilePhoto = (): JSX.Element => {
  const classes = useStyles();
  const location = useLocation();
  const { user, profile } = location.state as locationState;

  const [file, setFile] = useState<File | null>(null);
  const [avatar, setAvatar] = useState<string>(user.avatar);

  useEffect(() => {
    if (file) {
      const formData = new FormData();
      formData.append('avatar', file);
      formData.append('email', user.email);

      uploadAvatar(formData).then((data) => {
        setAvatar(data.imageUrl as string);
        setFile(null);
      });
    }
  }, [file, user]);
  // saving below values in case I need them later...
  // event: ChangeEvent<HTMLInputElement>,
  // event.target.files![0]

  const handleUpload = (newFile: File) => {
    const newAvatar = newFile;
    setFile(newAvatar);
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid container>
        <Grid item>
          <MyProfileSideBanner profile={profile as Profile} user={user as User} />
        </Grid>
        <Grid item className={classes.card}>
          <Card>
            <Typography className={classes.pageTitle} align="center" variant="h1">
              Profile Photo
            </Typography>
            <Avatar className={classes.avatarImage} alt="Profile Image" src={avatar} />
            <Typography className={classes.subtext} align="center" variant="subtitle1">
              Be sure to use a photo that clearly shows your face
            </Typography>
            <UploadPhotoForm handleUpload={handleUpload} />
            <Grid item className={classes.delete}>
              <Button startIcon={<DeleteIcon />}>Delete Photo</Button>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProfilePhoto;
