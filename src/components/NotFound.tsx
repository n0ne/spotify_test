import React, { FC, memo } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const style = {
  width: '100%',
  maxWidth: 500
};

const NotFound: FC = memo(() => {
  return (
    <Box sx={style}>
      <Typography variant="h3" gutterBottom>
        Nothig to show...
      </Typography>
    </Box>
  );
});

export default NotFound;