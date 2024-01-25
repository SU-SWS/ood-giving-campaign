import { Suspense } from 'react';
import FiltersServerComponent from './components/Filters/FiltersServerComponent';
import ResultsServerComponent from './components/Results/ResultsServerComponent';

export type PageProps = {
  children: React.ReactNode;
  searchParams: URLSearchParams;
};

const Page = ({searchParams}:PageProps) => {

  return (
    <section>
      <header>
        <h2>Filters</h2>
        <FiltersServerComponent searchParams={searchParams} />
      </header>
      <div>
        <h2>Results</h2>
        <Suspense fallback={<div>Loading...</div>}>
          <ResultsServerComponent searchParams={searchParams} />
        </Suspense>
      </div>
    </section>
  );

};

export default Page;