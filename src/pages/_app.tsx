import React from 'react';
import '../styles/global.css';
import Head from 'next/head';
import Navbar from '../components/Navbar';

const App = ({ Component, pageProps }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onClickAnywhere = (e) => {
    // Only focus input if clicking within the terminal container
    if (e.target.closest('.terminal-container')) {
      inputRef.current.focus();
    }
  };

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
          maximum-scale="1"
        />
      </Head>

      <div className="min-h-screen bg-light-background dark:bg-dark-background">
        <Navbar />
        <div className="text-light-foreground dark:text-dark-foreground text-xs md:text-base">
          <main className="max-w-7xl mx-auto p-4">
            <Component {...pageProps} inputRef={inputRef} />
          </main>
        </div>
      </div>
    </>
  );
};

export default App;