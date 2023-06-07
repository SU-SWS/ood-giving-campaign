import * as React from 'react';
import { graphql } from 'gatsby';
import { useStoryblokState } from '../hooks/useStoryblokState';
import { ThemeSection } from '../components/Temporary/ThemeSection';
import { HomepageHero } from '../components/Hero/HomepageHero';
import { Intro } from '../components/Intro';
import { FindPurposeSection } from '../components/Temporary/FindPurposeSection';
import { ProgressStories } from '../components/Temporary/ProgressStories';
import { PageHead } from '../components/PageHead';
import { CreateBloks } from '../components/CreateBloks';
import { Layout } from '../components/Layout';
import { Banner } from '../components/Banner';

const IndexPage = ({ data }) => {
  let story = data.storyblokEntry;
  story = useStoryblokState(story);
  const blok = story.content;

  return (
    <Layout>
      <HomepageHero />
      <Intro />
      <ThemeSection />
      {/* <CreateBloks blokSection={blok.hero} />
      <CreateBloks blokSection={blok.content} /> */}
      <ProgressStories bgImage={blok.progressBgImage.filename}>
        <CreateBloks blokSection={blok.progressStories} />
      </ProgressStories>
      <FindPurposeSection>
        <CreateBloks blokSection={blok.findPurpose} />
      </FindPurposeSection>
      <Banner
        heading="Join the conversation in Chicago."
        body="Chicago Conversation on Purpose. October XX, 2024. This is text that describes the event in a super exciting way."
        ctaText="Learn how"
        href="about-test"
      />
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
