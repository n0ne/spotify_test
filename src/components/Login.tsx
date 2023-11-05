import React, { FC } from "react";
import Link from '@mui/material/Link';

const CLIENT_ID: string = "1361b98d22ed495c897ac8622f77a205";
const REDIRECT_URI: string = "http://localhost:3000";
const AUTH_ENDPOINT: string = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE: string = "token";

const Login: FC = () => {
  return (
    <Link
      href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=user-library-read streaming user-read-email user-read-private&state=STATE_STRING`}
    >
      Log in
    </Link>
  );
};

export default Login;