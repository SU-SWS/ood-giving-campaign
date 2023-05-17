import * as React from 'react';
import { graphql } from 'gatsby';
import { useStoryblokState } from '../hooks/useStoryblokState';
import { DemoContent } from '../components/Temporary/DemoContent';
import { HomepageHero } from '../components/Hero/HomepageHero';
import { PageHead } from '../components/PageHead/PageHead';
import { CreateBloks } from '../components/CreateBloks';
import { Layout } from '../components/Layout';

const IndexPage = ({ data }) => {
  let story = data.storyblokEntry;
  story = useStoryblokState(story);

  return (
    <Layout>
      <HomepageHero />
      <CreateBloks blokSection={story.content.hero} />
      <CreateBloks blokSection={story.content.content} />
      <DemoContent />
    </Layout>
  );
};

export default IndexPage;

export const Head = ({ data }) => (
  <PageHead title={data.storyblokEntry.name} />
);

export const query = graphql`
  query HomeQuery {
    storyblokEntry(full_slug: { eq: "home" }) {
      content
      name
      full_slug
      uuid
      id
      internalId
    }
  }
`;
