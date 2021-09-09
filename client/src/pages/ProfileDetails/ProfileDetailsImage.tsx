import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

interface Props {
  imageUrl: string;
}

const ProfileDetailsImage = ({ imageUrl }: Props): JSX.Element => {
  return (
    <Card>
      <CardMedia image={imageUrl} />
    </Card>
  );
};

export default ProfileDetailsImage;
