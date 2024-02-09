'use client';
import { Container } from '@/components/Container';
import FilterSelect from './FilterSelect';
import useSWR from 'swr';
import { useEffect, useContext } from 'react';
import { TaxonomyDispatchContext } from '@/components/Taxonomy/Context/TaxonomyProvider';

export type DataSourceTypes = 'taxonomy-topics' | 'taxonomy-schools' | 'taxonomy-initiatives' | 'taxonomy-themes';

/**
 *
 * @returns
 */
const FiltersComponent = () => {
  const fetcher = (url:string) => fetch(url).then(r => r.json());
  const { data, error, isLoading } = useSWR('/api/storyblok/datasource/taxonomy', fetcher);
  const dispatch = useContext(TaxonomyDispatchContext);

  // Grab the url params and assign the selection to the filter on load.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const payload = {
      topics: params.get('topics'),
      schools: params.get('schools'),
      initiatives: params.get('initiatives'),
      themes: params.get('themes'),
    };
    dispatch({ type: 'SET_TAXONOMY', payload });
    return () => {};
  }, [dispatch]);

  if (error) return <div>Failed to fetch filters.</div>;
  if (isLoading) return <h2>Loading...</h2>;
  if (!data) return <h2>No data</h2>;

  return (
    <Container width='site' py={2}>
      <FilterSelect label="Topics" id="topics" options={data.topics} />
      <FilterSelect label="Schools" id="schools" options={data.schools} />
      <FilterSelect label="Initiatives" id="initiatives" options={data.initiatives} />
      <FilterSelect label="Themes" id="themes" options={data.themes} />
    </Container>
  );
};

export default FiltersComponent;
