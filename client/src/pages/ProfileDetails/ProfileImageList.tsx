import { User } from '../../interface/User';
import ProfileDetailsImage from './ProfileDetailsImage';
import Grid from '@material-ui/core/Grid';
import useStyles from './useStyles';

interface Props {
  images: User['images'];
}
const ProfileImageList = ({ images }: Props): JSX.Element => {
  const classes = useStyles();

  const imageList = images?.map((image) => <ProfileDetailsImage key={image._id} imageUrl={image.imageUrl} />);

  return (
    <Grid container className={classes.imageList}>
      {imageList}
    </Grid>
  );
};

export default ProfileImageList;
