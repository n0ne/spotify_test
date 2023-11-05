import React, { FC, memo } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

interface LoaderListProps {
  num?: number;
}

const cardStyle = {
  maxWidth: 345
}
const boxStyle = {
  pt: 0.5
}

const iconStyle = {
  height: 38,
  width: 38
}

const LoaderItem: FC = memo(() => {
  return (
    <Card sx={cardStyle}>
      <Skeleton variant="rectangular" height={194} />
      <CardContent>
        <Box sx={boxStyle}>
          <Skeleton />
          <Skeleton width="60%" />
        </Box>
      </CardContent>
      <CardActions disableSpacing>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <IconButton aria-label="play/pause">
              <PlayArrowIcon sx={iconStyle} />
            </IconButton>
          </Grid>
          <Grid item>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
})

export const Loader: FC<LoaderListProps> = ({ num = 15 }) => {
  return (
    <Grid container spacing={2}>
      {[...Array(num)].map((_, index) => (
        <Grid item xs={12} sm={6} md={4} key={index} >
          <LoaderItem />
        </Grid>
      ))}
    </Grid>
  );
}

export default Loader;