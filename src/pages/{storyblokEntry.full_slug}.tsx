import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import { SbGatsbyStory } from 'gatsby-source-storyblok';
import { useStoryblokState } from '../hooks/useStoryblokState';
import { Hero } from '../components/Hero/Hero';
import { CreateBloks } from '../components/CreateBloks';
import { PageHead } from '../components/PageHead';
import { Layout } from '../components/Layout';
import { DemoContent } from '../components/Temporary/DemoContent';
import { resolveRelations } from '../utilities/resolveRelations';

type DataProps = {
  storyblokEntry: SbGatsbyStory;
};

const StoryblokEntry: React.FC<PageProps<DataProps>> = ({
  data,
}) => {
  let story = data.storyblokEntry;
  story = useStoryblokState(story, { resolveRelations });
  const blok = story.content;

  return (
    <Layout>
      {/* Place holder hero below - going to extract into component */}
      <Hero heading={blok.title} />
      <CreateBloks blokSection={blok.hero} />
      <CreateBloks blokSection={blok.content} />
      <DemoContent />
    </Layout>
  );
};

export default StoryblokEntry;

export const Head = ({ data }) => {
  let story = data.storyblokEntry;
  story = useStoryblokState(story);
  const blok = story.content;

  return (
    <PageHead
      title={blok.title || story.name}
      heroImage={blok.heroImage || blok.hero.image}
      seo={blok.seo}
      noindex={blok.noindex}
      canonicalUrl={blok.canonicalUrl}
    />
  );
};

export const query = graphql`
  query ($full_slug: String!) {
    storyblokEntry(full_slug: { eq: $full_slug }) {
      content
      name
      full_slug
      uuid
      id
      internalId
    }
  }
`;
