import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import { SbGatsbyStory } from 'gatsby-source-storyblok';
import { useStoryblokState } from '../hooks/useStoryblokState';
import { Hero } from '../components/Hero/Hero';
import { CreateBloks } from '../components/CreateBloks';
import { PageHead } from '../components/PageHead';
import { Layout } from '../components/Layout';
import { resolveRelations } from '../utilities/resolveRelations';
import { getProcessedImage } from '../utilities/getProcessedImage';
import { getNumBloks } from '../utilities/getNumBloks';
import { StoryHero } from '../components/Hero';

type DataProps = {
  storyblokEntry: SbGatsbyStory;
};

const StoryblokEntry: React.FC<PageProps<DataProps>> = ({
  data,
}) => {
  let story = data.storyblokEntry;
  story = useStoryblokState(story, { resolveRelations });
  const blok = story.content;

  return (
    <Layout isDark={!blok.isLightHero}>
      {blok.component === 'sbStory' ? (
        <StoryHero
          title={blok.title}
          intro={blok.intro}
          byline={blok.byline}
          publishedDate={blok.publishedDate}
          heroImage={blok.heroImage}
          isLightHero={blok.isLightHero}
          isVerticalHero={blok.isVerticalHero}
          isLeftImage={blok.isLeftImage}
          tabColor={blok.tabColor}
        />
      ) : (
        <>
          {/* Place holder hero below - going to extract into component */}
          <Hero heading={blok.title} />
          <CreateBloks blokSection={blok.hero} />
        </>
      )}
      <CreateBloks blokSection={blok.content} />
      {getNumBloks(blok.ankle) > 0 && (
        <img
          alt=""
          src={getProcessedImage('https://a-us.storyblok.com/f/1005200/2000x40/c4777a4925/steve-johnson-cropped-2000x40-01.jpg')}
          className="su-w-full"
        />
      )}
      <CreateBloks blokSection={blok.ankle} />
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
      heroImage={blok.heroImage || blok.hero?.image}
      seo={blok.seo}
      noindex={blok.noindex}
      canonicalUrl={blok.canonicalUrl}
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
