import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { colors } from '../../../styles/data_vis_colors';

const { primary_accent_color } = colors;

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0(); // button for logging in with useAuth0
  return (
    <button
      style={{ backgroundColor: primary_accent_color, color: '#E2F0F7', paddingRight: '75px'  , border: 'none'}}
      className="btn btn-primary btn-block"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  );
};

export default LoginButton;