import { storyblokEditable } from '@storyblok/react/rsc';

type SbTaxonomyResultsProps = {
  blok: {
    _uid: string;
  };
};

export const SbTaxonomyResults = ({
  blok,
}: SbTaxonomyResultsProps) => (
  <div {...storyblokEditable(blok)}>
    <h2>Results Go Here</h2>
  </div>
);
