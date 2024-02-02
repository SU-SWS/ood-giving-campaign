'use client';
import { Container } from '@/components/Container';
import FilterSelect from './FilterSelect';
import useSWR from 'swr';
export type DataSourceTypes = 'taxonomy-topics' | 'taxonomy-schools' | 'taxonomy-initiatives' | 'taxonomy-themes';

/**
 *
 * @returns
 */
const FiltersComponent = () => {
  const fetcher = (url:string) => fetch(url).then(r => r.json());
  const { data, error, isLoading } = useSWR('/api/storyblok/datasource/taxonomy', fetcher);

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
