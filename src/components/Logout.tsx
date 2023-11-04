import React, { FC } from 'react';
import { Link } from '@mui/material';
import { useLocalStorage } from '@uidotdev/usehooks';

const Logout: FC = () => {
  const [_, saveToken] = useLocalStorage<string | null>('token')

  const clearToken = (): void => {
    saveToken(null)
  }

  return (
    <Link onClick={clearToken} >Log out</Link>
  );
}

export default Logout;