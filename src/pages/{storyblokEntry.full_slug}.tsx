import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import { SbGatsbyStory } from 'gatsby-source-storyblok';
import { useStoryblokState } from '../hooks/useStoryblokState';
import { Hero } from '../components/Hero/Hero';
import { CreateBloks } from '../components/CreateBloks';
import { PageHead } from '../components/PageHead/PageHead';
import { Layout } from '../components/Layout';

type DataProps = {
  storyblokEntry: SbGatsbyStory;
};

const StoryblokEntry: React.FC<PageProps<DataProps>> = ({
  data,
}) => {
  let story = data.storyblokEntry;
  story = useStoryblokState(story);
  const blok = story.content;

  return (
    <Layout>
      {/* Place holder hero below - going to extract into component */}
      <Hero heading={story.name} />
      <CreateBloks blokSection={blok.hero} />
      <CreateBloks blokSection={blok.content} />
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
      seo={blok.seo}
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
