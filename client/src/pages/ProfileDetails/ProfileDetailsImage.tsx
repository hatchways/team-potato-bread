import useStyles from './useStyles';

interface Props {
  imageUrl: string;
}

const ProfileDetailsImage = ({ imageUrl }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <div>
      <img src={imageUrl} className={classes.smallProfileImages} />
    </div>
  );
};

export default ProfileDetailsImage;
