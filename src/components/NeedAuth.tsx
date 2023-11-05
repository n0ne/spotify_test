import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';

const style = {
  width: '100%',
  maxWidth: 500
}
const NeedAuth: FC = () => {
  return (
    <Box sx={style}>
      <Typography variant="h3" gutterBottom>
        Plaese, login first...
      </Typography>
    </Box>
  );
}

export default NeedAuth;