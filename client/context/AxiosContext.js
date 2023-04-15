import React, { createContext, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext';
import createAuthRefreshInterceptor from 'axios-auth-refresh';

import AsyncStorage from '@react-native-async-storage/async-storage';
// import * as Keychain from 'react-native-keychain';

const AxiosContext = createContext();
const { Provider } = AxiosContext;

const AxiosProvider = ({ children }) => {
    const authContext = useContext(AuthContext);

    const authAxios = axios.create({
        baseURL: `${process.env.DEVELOPEMENT_SERVER}/auth`,
    });

    const publicAxios = axios.create({
        baseURL: `${process.env.DEVELOPEMENT_SERVER}/auth`,
    });

    authAxios.interceptors.request.use(
        config => {
            if (!config.headers.Authorization) {
                config.headers.Authorization = `Bearer ${authContext.getAccessToken()}`;
            }

            return config;
        },
        error => {
            return Promise.reject(error);
        },
    );

    const refreshAuthLogic = async failedRequest => {
        console.log("refresh")
        const data = {
            refreshToken: authContext.authState.refreshToken,
        };

        const options = {
            method: 'POST',
            data,
            url: `${process.env.DEVELOPEMENT_SERVER}/auth/refreshToken`,
        };

        return axios(options)
            .then(async tokenRefreshResponse => {
                failedRequest.response.config.headers.Authorization =
                    'Bearer ' + tokenRefreshResponse.data.accessToken;

                authContext.setAuthState({
                    ...authContext.authState,
                    accessToken: tokenRefreshResponse.data.accessToken,
                });


                console.log(tokenRefreshResponse.data.accessToken)

                // await Keychain.setGenericPassword(
                //     'token',
                //     JSON.stringify({
                //         accessToken: tokenRefreshResponse.data.accessToken,
                //         refreshToken: authContext.authState.refreshToken,
                //     }),
                // );

                await AsyncStorage.setItem(
                    'token',
                    JSON.stringify({
                        accessToken: tokenRefreshResponse.data.accessToken,
                        refreshToken: authContext.authState.refreshToken,
                    }),
                );

                // await SecureStore.setItemAsync(
                //     'token',
                //     JSON.stringify({
                //         accessToken: tokenRefreshResponse.data.accessToken,
                //         refreshToken: authContext.authState.refreshToken,
                //     }),
                // );

                return Promise.resolve();
            })
            .catch(e => {
                authContext.setAuthState({
                    accessToken: null,
                    refreshToken: null,
                });
            });
    };

    createAuthRefreshInterceptor(authAxios, refreshAuthLogic, {});

    return (
        <Provider
            value={{
                authAxios,
                publicAxios,
            }}>
            {children}
        </Provider>
    );
};

export { AxiosContext, AxiosProvider };