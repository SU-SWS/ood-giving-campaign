import React from 'react';
import { graphql } from 'gatsby';
import { useStoryblokState } from '../hooks/useStoryblokState';
import { Hero } from '../components/Hero/Hero';
import { Layout } from '../components/Layout';
import { CreateBloks } from '../components/CreateBloks';

const StoryblokEntry = ({ data }) => {
  let story = data.storyblokEntry;
  story = useStoryblokState(story);

  // const components = story.content.content?.map((blok) => (<StoryblokComponent blok={blok} key={blok._uid} />));

  return (
    <Layout>
      {/* Place holder hero below - going to extract into component */}
      <Hero heading={story.name} />
      <CreateBloks blokSection={story.content.content} />
    </Layout>
  );
};

export default StoryblokEntry;

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
