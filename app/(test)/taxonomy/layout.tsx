'use client';
import { Masthead } from '@/components/Masthead';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

export type TaxonomyLayoutProps = {
  children: React.ReactNode
};

/**
 * The page component.
 */
export default function TaxonomyLayout({
  children,
}: TaxonomyLayoutProps) {
  const searchParams = useSearchParams();
  return (
    <>
      <Masthead className='bg-black h-[8.6rem]'/>
      <main className='rs-my-8 cc w-full'>
        <h1>Page Title</h1>
        <Suspense key={searchParams.toString()}>
          {children}
        </Suspense>
      </main>
    </>
  );
};
