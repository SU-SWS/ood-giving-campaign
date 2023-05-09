import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import { SbGatsbyStory, storyblokEditable } from 'gatsby-source-storyblok';
import { useStoryblokState } from '../hooks/useStoryblokState';
import { Hero } from '../components/Hero/Hero';
import { Layout } from '../components/Layout';
import { CreateBloks } from '../components/CreateBloks';

type DataProps = {
  storyblokEntry: SbGatsbyStory;
};

const StoryblokEntry: React.FC<PageProps<DataProps>> = ({
  data,
}) => {
  let story = data.storyblokEntry;
  story = useStoryblokState(story);

  return (
    <Layout>
      {/* Place holder hero below - going to extract into component */}
      <Hero heading={story.name} />
      <div {...storyblokEditable(story.content)}>
        <CreateBloks blokSection={story.content.content} />
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
