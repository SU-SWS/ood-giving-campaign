import * as React from 'react';
import { graphql } from 'gatsby';
import { StoryblokComponent, storyblokEditable } from 'gatsby-source-storyblok';
import { useStoryblokState } from '../hooks/useStoryblokState';
import { Layout } from '../components/Layout';

const StoryblokEntry = ({ data }) => {
  let story = data.storyblokEntry;
  story = useStoryblokState(story);

  const components = story.content.body?.map((blok) => (<StoryblokComponent blok={blok} key={blok._uid} />));

  return (
    <Layout>
      <div {...storyblokEditable(story.content)}>
        {components}
      </div>
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
