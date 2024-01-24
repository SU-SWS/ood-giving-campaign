'use client';
import { Masthead } from '@/components/Masthead';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

export type TaxonomyLayoutProps = {
  filters: React.ReactNode,
  results: React.ReactNode,
  children: React.ReactNode
};

/**
 * The page component.
 */
export default function TaxonomyLayout({filters, results, children}: TaxonomyLayoutProps) {
  const searchParams = useSearchParams();
  return (
    <>
      <Masthead className='bg-black h-[8.6rem]'/>
      <main className='rs-my-8 cc w-full'>
        <h1>Page Title</h1>
        <section>
          <header>
            <h2>Filters</h2>
            {filters}
          </header>
          <div>
            <h2>Results</h2>
            <Suspense key={searchParams.toString()}>
              {results}
            </Suspense>
          </div>
        </section>
      </main>
    </>
  );
};
