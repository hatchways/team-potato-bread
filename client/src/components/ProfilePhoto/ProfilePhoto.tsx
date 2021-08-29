import { ChangeEvent, useState } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from './useStyles';
import { User } from '../../interface/User';
import Avatar from '@material-ui/core/Avatar';

interface Props {
  loggedInUser: User;
}

const ProfilePhoto = ({ loggedInUser }: Props): JSX.Element => {
  const classes = useStyles();

  const [image, setImage] = useState<any>({});

  const handleUpload = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const uploadedImage = event.target.files;
    setImage(uploadedImage);
  };

  return (
    <Grid className={classes.root}>
      <Box>
        <Typography className={classes.pageTitle} variant="h1">
          Profile Photo
        </Typography>
      </Box>
      <Box className={classes.root}>
        <Avatar
          className={classes.avatarImage}
          alt="Profile Image"
          src={`https://robohash.org/${loggedInUser.email}.png`}
        />
        <Typography className={classes.subtext} variant="subtitle1">
          Be sure to use a photo that clearly shows your face
        </Typography>
      </Box>
      <Box>
        <input accept="image/*" id="uploadImageButton" type="file" className={classes.input} onChange={handleUpload} />
        <label htmlFor="uploadImageButton">
          <Button className={classes.uploadButton} variant="outlined" color="primary" component="span">
            Upload a file from your device
          </Button>
        </label>
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
