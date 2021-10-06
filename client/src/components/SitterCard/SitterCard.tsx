import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';
import { Profile } from '../../interface/User';
import { Card, CardContent, CardMedia, Divider } from '@material-ui/core';
import RoomIcon from '@material-ui/icons/Room';
import Rating from '@material-ui/lab/Rating';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  sitter: Profile;
}

const SitterCard = ({ sitter }: Props): JSX.Element => {
  const classes = useStyles();
  const [value, setValue] = useState<number | null>(5);

  return (
    <Card className={classes.root}>
      <Link to={`/profile/${sitter._id}`} className={classes.link}>
        <CardMedia className={classes.media} image={sitter.user?.avatar} title="User image" />
        <CardContent className={classes.contentWrapper}>
          <Typography variant="h5" component="h5" className={classes.name}>
            {`${sitter.firstName} ${sitter.lastName}`}
          </Typography>
          <Typography className={classes.subTitle}>{sitter.subtitle}</Typography>
          <Rating className={classes.rating} name="read-only" value={sitter.avgRating} readOnly />
          <Typography className={classes.description} variant="body2" component="h6">
            {sitter.description}
          </Typography>
          <Divider />
          <Box className={classes.footerWrapper}>
            <Typography className={classes.location} variant="body2" component="h6">
              <RoomIcon color="primary" />
              {sitter.location}
            </Typography>
            <Typography className={classes.rate} variant="body2" component="h6">
              ${sitter.ratePerHour}/hr
            </Typography>
          </Box>
        </CardContent>
      </Link>
    </Card>
  );
};

export default SitterCard;
