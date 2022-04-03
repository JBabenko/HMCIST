import React from 'react';
import axios from 'axios';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '~/store';
import Router from 'next/router';

axios.interceptors.response.use(
  (res) => res,
  (err) => {
    const status = err.request?.status;
    if (status && status === 401) {
      Router.push('/signIn');
    }
    return err;
  },
);

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
);

export default MyApp;
