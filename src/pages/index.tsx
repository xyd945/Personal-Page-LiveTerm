import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import config from '../../config.json';
import { Input } from '../components/input';
import { useHistory } from '../components/history/hook';
import { History } from '../components/history/History';
import { banner } from '../utils/bin';

interface IndexPageProps {
  inputRef: React.MutableRefObject<HTMLInputElement>;
}

const IndexPage: React.FC<IndexPageProps> = ({ inputRef }) => {
  const containerRef = React.useRef(null);
  const {
    history,
    command,
    lastCommandIndex,
    setCommand,
    setHistory,
    clearHistory,
    setLastCommandIndex,
  } = useHistory([]);

  const init = React.useCallback(() => setHistory(banner()), []);

  React.useEffect(() => {
    init();
  }, [init]);

  const quotes = [
    "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
    "The people who are crazy enough to think they can change the world are the ones who do.",
    "When something is important enough, you do it even if the odds are not in your favor.",
    "Some people don't like change, but you need to embrace change if the alternative is disaster."
  ];

  const [randomQuote, setRandomQuote] = useState('');

  useEffect(() => {
    setRandomQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  return (
    <>
      <Head>
        <title>{config.title}</title>
      </Head>

      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-light-yellow dark:text-dark-yellow mb-4">
            
          </h1>
          <p className="text-light-foreground dark:text-dark-foreground">
            {randomQuote}
          </p>
        </div>

        {/* Terminal Content */}
        <div className="p-4 h-[500px] border-2 rounded border-light-yellow dark:border-dark-yellow">
          <div ref={containerRef} className="overflow-y-auto h-full">
            <History history={history} />

            <Input
              inputRef={inputRef}
              containerRef={containerRef}
              command={command}
              history={history}
              lastCommandIndex={lastCommandIndex}
              setCommand={setCommand}
              setHistory={setHistory}
              setLastCommandIndex={setLastCommandIndex}
              clearHistory={clearHistory}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;