import { storyblokEditable } from '@storyblok/react/rsc';
import Filters from '../Taxonomy/Filters/Filters';

type SbTaxonomyFiltersProps = {
  blok: {
    _uid: string;
  };
};

export const SbTaxonomyFilters = ({
  blok,
}: SbTaxonomyFiltersProps) => {
  return (
    <Filters {...storyblokEditable(blok)} />
  );
};
