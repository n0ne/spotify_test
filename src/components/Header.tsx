import React, { FC } from 'react';
import { useLocalStorage } from '@uidotdev/usehooks';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import Login from './Login';
import Logout from './Logout';


const Header: FC = () => {
  const [token] = useLocalStorage<string | null>('token');

  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h4" component="h2" gutterBottom>
          Simple Spotify Search App
        </Typography>
      </Grid>
      <Grid item>
        {token ? <Logout /> : <Login />}
      </Grid>
    </Grid>
  );
};

export default Header;