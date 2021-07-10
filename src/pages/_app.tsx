import 'tailwindcss/tailwind.css';

import Head from 'next/head';
import {Provider} from 'react-redux';
import type {AppProps} from 'next/app';

import store from 'redux/store';
import '../styles/globals.css';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <title>Picture Editing Tool</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
