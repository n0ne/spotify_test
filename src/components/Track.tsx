import React, { FC } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { format } from 'date-fns';
import { Track as TrackType } from '../types/track';

interface TrackProps {
  item: TrackType;
  onClick: () => void;
}

const cardStyle = {
  maxWidth: 345
}

const iconStyle = {
  height: 38,
  width: 38
}

const Track: FC<TrackProps> = ({ item, onClick }) => {
  const { external_urls, name, artists, album, duration_ms } = item;
  const { images, external_urls: albumExternalUrls, name: albumName } = album;
  const { url: imageUrl } = images[0];
  const { external_urls: artistExternalUrls, name: artistName } = artists[0];

  const duration = format(new Date(duration_ms), 'mm:ss')

  return (
    <Card sx={cardStyle}>
      <CardMedia
        component="img"
        height="194"
        image={imageUrl}
        alt={albumName}
      />
      <CardContent>
        <Typography noWrap component="div" variant="h5">
          <Link href={external_urls.spotify} color="inherit" underline='none'>
            {name}
          </Link>
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
          <Link href={artistExternalUrls.spotify} color="inherit" underline='none'>
            {artistName}
          </Link>
        </Typography>
        <Typography noWrap variant="caption" display="block" gutterBottom>
          <Link href={albumExternalUrls.spotify} color="inherit" underline='none'>
            {albumName}
          </Link>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <IconButton aria-label="play/pause" onClick={onClick}>
              <PlayArrowIcon sx={iconStyle} />
            </IconButton>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              {duration}
            </Typography>
          </Grid>
        </Grid>

      </CardActions>
    </Card>
  );
}

export default Track;