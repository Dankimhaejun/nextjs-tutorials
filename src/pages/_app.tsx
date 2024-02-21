import {GlobalStyle} from '@/styles/global-style';
import '@/styles/globals.css';
import {theme} from '@/styles/theme';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import {RecoilRoot} from 'recoil';
import {ThemeProvider} from 'styled-components';

import {Roboto} from 'next/font/google';

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export default function App({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>boilerplate</title>
      </Head>
      <main className={roboto.className}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <RecoilRoot>
            <Component {...pageProps} />
          </RecoilRoot>
        </ThemeProvider>
      </main>
    </>
  );
}
