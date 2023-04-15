import React, { useCallback, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

import SignIn from './auth/signin/signin';
import Home from './home';

import { Spinner } from "../components";

const App = () => {
  const authContext = useContext(AuthContext);
  const [status, setStatus] = useState('loading');

  const loadJWT = useCallback(async () => {
    try {
      const value = await AsyncStorage.getItem('token');

      const jwt = JSON.parse(value);

      authContext.setAuthState({
        accessToken: jwt.accessToken || null,
        refreshToken: jwt.refreshToken || null,
        authenticated: jwt.accessToken !== null,
      });
      setStatus('success');
      console.log("success")
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
    console.log('Not authenticated')
    return <SignIn />;
  } else {
    console.log('Authenticated')
    return <Home />;
  }
};

export default App;