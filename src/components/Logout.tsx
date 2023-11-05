import React, { FC, useCallback } from 'react';
import Link from '@mui/material/Link';
import { useLocalStorage } from '@uidotdev/usehooks';

const Logout: FC = () => {
  const [_, saveToken] = useLocalStorage<string | null>('token')

  const clearToken = useCallback(() => {
    saveToken(null);
  }, [saveToken]);

  return (
    <Link onClick={clearToken}>Log out</Link>
  );
};

export default Logout;