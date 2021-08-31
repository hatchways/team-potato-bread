import { ChangeEvent, useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from './useStyles';
import { User } from '../../interface/User';
import Avatar from '@material-ui/core/Avatar';
import uploadAvatar from '../../helpers/APICalls/uploadAvatar';

interface Props {
  loggedInUser: User;
}

const ProfilePhoto = ({ loggedInUser }: Props): JSX.Element => {
  const classes = useStyles();

  const [image, setImage] = useState<File | null>(null);

  useEffect(() => {
    if (image) {
      const formData = new FormData();
      formData.append('avatar', image);
      formData.append('email', loggedInUser.email);

      uploadAvatar(formData);
    }
  }, [image, loggedInUser]);

  const handleUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const avatar = event.target.files![0];
    setImage(avatar);
  };

  return (
    <Grid className={classes.root}>
      <Box>
        <Typography className={classes.pageTitle} variant="h1">
          Profile Photo
        </Typography>
      </Box>
      <Box className={classes.root}>
        <Avatar className={classes.avatarImage} alt="Profile Image" src={loggedInUser.avatar} />
        <Typography className={classes.subtext} variant="subtitle1">
          Be sure to use a photo that clearly shows your face
        </Typography>
      </Box>
      <Box>
        <form action="/image/avatar" encType="multipart/form-data" method="POST">
          <input
            accept="image/*"
            id="uploadImageButton"
            type="file"
            name="avatar"
            multiple={false}
            className={classes.input}
            onChange={handleUpload}
          />
          <label htmlFor="uploadImageButton">
            <Button
              className={classes.uploadButton}
              variant="outlined"
              color="primary"
              component="span"
              onSubmit={handleUpload}
            >
              Upload a file from your device
            </Button>
          </label>
        </form>
      </Box>
      <Box>
        <Grid item className={classes.delete}>
          <Button startIcon={<DeleteIcon />}>Delete Photo</Button>
        </Grid>
      </Box>
    </Grid>
  );
};

export default ProfilePhoto;
