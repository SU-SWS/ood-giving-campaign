'use client'; // Error components must be Client Components

import { useEffect } from 'react';
import { Masthead } from '@/components/Masthead';
import { Container } from '@/components/Container';
import { logError } from '@/utilities/logger';

const Error = ({error}: {
  error: Error & { digest?: string };
}) => {
  useEffect(() => {
    // Log the error to an error reporting service
    logError('Global error boundary caught unhandled exception', error, { digest: error.digest });
  }, [error]);

  return (
    <div className="bg-black">
      <Masthead />
      <main>
        <Container width="site" className="rs-my-8 text-white">
          <h1>Something went very wrong.</h1>
          <p>Try refreshing your browser.</p>
        </Container>
      </main>
    </div>
  );
};

export default Error;
