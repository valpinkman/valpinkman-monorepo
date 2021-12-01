import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import type { Coin } from '@valpinkman/types-coins';
import type { Device } from '@valpinkman/types-devices';

const c: Coin = {
  id: 'BTC',
};

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to valpinkman!</title>
      </Head>
      <div className="app">
        <header className="flex">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/nx-logo-white.svg" alt="Nx logo" width="75" height="50" />
          <h1>Welcome to valpinkman!</h1>
        </header>
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default CustomApp;
