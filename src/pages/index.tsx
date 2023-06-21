import * as React from 'react';
import { graphql } from 'gatsby';
import { useStoryblokState } from '../hooks/useStoryblokState';
import { Heading } from '../components/Typography';
import { HomepageHero } from '../components/Homepage/HomepageHero';
import { Intro } from '../components/Homepage/Intro';
import { ThemeSection } from '../components/Homepage/ThemeSection';
import { FindPurposeSection } from '../components/Homepage/FindPurposeSection';
import { ProgressSection } from '../components/Homepage/ProgressSection';
import { PageHead } from '../components/PageHead';
import { CreateBloks } from '../components/CreateBloks';
import { Layout } from '../components/Layout';
import { Banner } from '../components/Banner';
import { resolveRelations } from '../utilities/resolveRelations';

/**
 * This is the layout for the homepage
 */

const IndexPage = ({ data }) => {
  let story = data.storyblokEntry;
  story = useStoryblokState(story, { resolveRelations });
  const blok = story.content;

  return (
    <Layout>
      <Heading as="h1" srOnly>{blok.title || 'Homepage'}</Heading>
      <HomepageHero />
      <Intro text={blok.intro} />
      <ThemeSection
        themeCardDiscovery={blok.themeCardDiscovery}
        themeCardCitizen={blok.themeCardCitizen}
        themeCardAcceleration={blok.themeCardAcceleration}
        themeCardPlanet={blok.themeCardPlanet}
      />
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
      noindex={blok.noindex}
      canonicalUrl={blok.canonicalUrl}
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
