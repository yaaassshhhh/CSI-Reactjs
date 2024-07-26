import React from 'react';
import conf from '../conf/conf';
import { Button } from './ui/button';

const CLIENT_ID = conf.ClientId;
const REDIRECT_URI = 'http://localhost:3000/callback';
const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
const RESPONSE_TYPE = 'code';

const LoginButton: React.FC = () => {
  const handleLogin = () => {
    window.location.href = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=user-read-private user-read-email`;
  };

  return (
    <Button onClick={handleLogin}>
      Login with Spotify
    </Button>
  );
};

export default LoginButton;
