import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';

const style = {
  width: '100%',
  maxWidth: 500
}
const NotFound: FC = () => {
  return (
    <Box sx={style}>
      <Typography variant="h3" gutterBottom>
        Nothig to show...
      </Typography>
    </Box>
  );
}

export default NotFound;