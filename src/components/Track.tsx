import React, { FC } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { CardActions, Grid, Link } from '@mui/material';
import { format } from 'date-fns';
import { Track as TrackType } from '../types/track';

interface MediaCardProps {
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

const Track: FC<MediaCardProps> = ({ item, onClick }) => {
  return (
    <Card sx={cardStyle}>
      <CardMedia
        component="img"
        height="194"
        image={item.album.images[0].url}
        alt="Paella dish"
      />
      <CardContent>
        <Typography noWrap component="div" variant="h5">
          <Link href={item.external_urls.spotify} color="inherit" underline='none'>
            {item.name}
          </Link>
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
          <Link href={item.artists[0].external_urls.spotify} color="inherit" underline='none'>
            {item.artists[0].name}
          </Link>
        </Typography>
        <Typography noWrap variant="caption" display="block" gutterBottom>
          <Link href={item.album.external_urls.spotify} color="inherit" underline='none'>
            {item.album.name}
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
            <Typography variant="body2">
              <Typography variant="subtitle1" color="text.secondary" component="div">
                {format(new Date(item.duration_ms), 'mm:ss')}
              </Typography>
            </Typography>
          </Grid>
        </Grid>

      </CardActions>
    </Card>

  );
}

export default Track;