import React, { useCallback, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import * as SecureStore from 'expo-secure-store';

import { FriendsList, SignIn, Spinner } from "../components";

const App = () => {
  const authContext = useContext(AuthContext);
  const [status, setStatus] = useState('loading');

  const loadJWT = useCallback(async () => {
    try {
      console.log('Loading JWT');
      const value = SecureStore.getItemAsync('token')
        .then((value) => {
          return value;
        });
      console.log("bruh " + JSON.stringify(value));
      const jwt = JSON.parse(value?.password);

      authContext.setAuthState({
        accessToken: jwt.accessToken || null,
        refreshToken: jwt.refreshToken || null,
        authenticated: jwt.accessToken !== null,
      });
      setStatus('success');
    } catch (error) {
      setStatus('error');
      console.log(`Keychain Error: ${error.message}`);
      authContext.setAuthState({
        accessToken: null,
        refreshToken: null,
        authenticated: false,
      });
    }
  }, []);

  useEffect(() => {
    loadJWT();
  }, [loadJWT]);

  if (status === 'loading') {
    return <Spinner />;
  }

  if (authContext?.authState?.authenticated === false) {
    return <SignIn />;
  } else {
    return <FriendsList />;
  }
};

export default App;