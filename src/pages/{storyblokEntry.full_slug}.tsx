import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import { SbGatsbyStory, storyblokEditable } from 'gatsby-source-storyblok';
import { useStoryblokState } from '../hooks/useStoryblokState';
import { BasicPage } from '../components/BasicPage';
import { Hero } from '../components/Hero/Hero';
import { CreateBloks } from '../components/CreateBloks';
import { PageHead } from '../components/PageHead/PageHead';

type DataProps = {
  storyblokEntry: SbGatsbyStory;
};

const StoryblokEntry: React.FC<PageProps<DataProps>> = ({
  data,
}) => {
  let story = data.storyblokEntry;
  story = useStoryblokState(story);

  return (
    <BasicPage heading="Home">
      {/* Place holder hero below - going to extract into component */}
      <Hero heading={story.name} />
      <div {...storyblokEditable(story.content)}>
        <CreateBloks blokSection={story.content.content} />
      </div>
    </BasicPage>
  );
};

export default StoryblokEntry;

export const Head = ({ data }) => (
  <PageHead title={data.storyblokEntry.name} />
);

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
