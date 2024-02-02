import { storyblokEditable } from '@storyblok/react/rsc';
import ResultsComponent from '../Taxonomy/Results/Results';

type SbTaxonomyResultsProps = {
  blok: {
    _uid: string;
  };
};

export const SbTaxonomyResults = ({
  blok,
}: SbTaxonomyResultsProps) => (
  <div {...storyblokEditable(blok)}>
    <ResultsComponent />
  </div>
);
