import { Masthead } from '@/components/Masthead';

export type TaxonomyLayoutProps = {
  filters: React.ReactNode,
  results: React.ReactNode,
  children: React.ReactNode,
  searchParams: URLSearchParams
};

export const revalidate = 0;

/**
 * The page component.
 */
export default function TaxonomyLayout({
  filters,
  results,
  children,
}: TaxonomyLayoutProps) {
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
            {results}
          </div>
        </section>
      </main>
    </>
  );
};
