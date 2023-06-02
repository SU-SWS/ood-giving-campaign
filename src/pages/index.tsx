import * as React from 'react';
import { graphql } from 'gatsby';
import { useStoryblokState } from '../hooks/useStoryblokState';
import { DemoContent } from '../components/Temporary/DemoContent';
import { ThemeSection } from '../components/Temporary/ThemeSection';
import { HomepageHero } from '../components/Hero/HomepageHero';
import { Intro } from '../components/Intro';
import { PageHead } from '../components/PageHead';
import { CreateBloks } from '../components/CreateBloks';
import { Layout } from '../components/Layout';

const IndexPage = ({ data }) => {
  let story = data.storyblokEntry;
  story = useStoryblokState(story);
  const blok = story.content;

  return (
    <Layout>
      <HomepageHero />
      <Intro />
      <ThemeSection />
      <CreateBloks blokSection={blok.hero} />
      <CreateBloks blokSection={blok.content} />
      <DemoContent />
    </Layout>
  );
};

export default IndexPage;

export const Head = ({ data }) => {
  let story = data.storyblokEntry;
  story = useStoryblokState(story);
  const blok = story.content;

  return (
    <PageHead
      title={blok.title || 'Homepage'}
      heroImage={blok.heroImage || blok.hero.image}
      seo={blok.seo}
    />
  );
};

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
