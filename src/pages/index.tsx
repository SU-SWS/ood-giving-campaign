import * as React from 'react';
import { graphql } from 'gatsby';
import { useStoryblokState } from '../hooks/useStoryblokState';
import { Heading } from '../components/Typography';
import { ThemeSection } from '../components/Homepage/ThemeSection';
import { HomepageHero } from '../components/Hero/HomepageHero';
import { Intro } from '../components/Intro';
import { FindPurposeSection } from '../components/Homepage/FindPurposeSection';
import { ProgressSection } from '../components/Homepage/ProgressSection';
import { PageHead } from '../components/PageHead';
import { CreateBloks } from '../components/CreateBloks';
import { Layout } from '../components/Layout';
import { Banner } from '../components/Banner';

/**
 * This is the layout for the homepage
 */

const IndexPage = ({ data }) => {
  let story = data.storyblokEntry;
  story = useStoryblokState(story);
  const blok = story.content;

  return (
    <Layout>
      <Heading as="h1" srOnly>{blok.title || 'Homepage'}</Heading>
      <HomepageHero />
      <Intro />
      <ThemeSection
        themeCardDiscovery={blok.themeCardDiscovery}
        themeCardCitizen={blok.themeCardCitizen}
        themeCardAcceleration={blok.themeCardAcceleration}
        themeCardPlanet={blok.themeCardPlanet}
      />
      {/* <CreateBloks blokSection={blok.hero} />
      <CreateBloks blokSection={blok.content} /> */}
      <ProgressSection bgImage={blok.progressBgImage.filename}>
        <CreateBloks blokSection={blok.progressStories} />
      </ProgressSection>
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
