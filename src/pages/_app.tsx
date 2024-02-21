import {GlobalStyle} from '@/styles/global-style';
import '@/styles/globals.css';
import {theme} from '@/styles/theme';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import {RecoilRoot} from 'recoil';
import {ThemeProvider} from 'styled-components';

export default function App({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>boilerplate</title>
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </ThemeProvider>
    </>
  );
}
