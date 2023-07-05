'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <html>
      <body>
        <h1>Global Error: Something went wrong!</h1>
      </body>
    </html>
  );
};
