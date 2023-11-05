import React, { FC, memo } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const style = {
  width: '100%',
  maxWidth: 500
}

const NeedAuth: FC = memo(() => {
  return (
    <Box sx={style}>
      <Typography variant="h3" gutterBottom>
        Please, login first...
      </Typography>
    </Box>
  );
});

export default NeedAuth;