import StoryblokClient from 'storyblok-js-client';
import FilterSelect from './FilterSelect';
export type DataSourceTypes = 'taxonomy-topics' | 'taxonomy-schools' | 'taxonomy-initiatives' | 'taxonomy-themes';

/**
 *
 * @returns
 */
const FiltersComponent = async () => {
  return (
    <div>
      <FilterSelect label="Topics" id="topics" />
      <FilterSelect label="Schools" id="schools" />
      <FilterSelect label="Initiatives" id="initiatives" />
      <FilterSelect label="Themes" id="themes" />
    </div>
  );
};

export default FiltersComponent;
