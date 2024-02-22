import type {AppProps} from 'next/app';
import Head from 'next/head';

import {Roboto} from 'next/font/google';

import LayoutProvider from '@/components/providers/LayoutProvider';

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
        <title>nextjs-tutorial</title>
      </Head>
      <main className={roboto.className}>
        <LayoutProvider>
          <Component {...pageProps} />
        </LayoutProvider>
      </main>
    </>
  );
}
