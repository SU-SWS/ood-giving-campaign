import { Masthead } from '@/components/Masthead';

export type TaxonomyLayoutProps = {
  filters: React.ReactNode,
  results: React.ReactNode,
};

/**
 * The page component.
 */
export default async function TaxonomyLayout({filters, results}: TaxonomyLayoutProps) {
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
