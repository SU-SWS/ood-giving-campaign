import * as React from 'react';
import { graphql } from 'gatsby';
import { StoryblokComponent, storyblokEditable } from 'gatsby-source-storyblok';
import { useStoryblokState } from '../hooks/useStoryblokState';
import { Layout } from '../components/Layout';
import { Section } from '../components/Section';
import { CtaLink } from '../components/Cta';
import { Grid } from '../components/Grid';

const StoryblokEntry = ({ data }) => {
  let story = data.storyblokEntry;
  story = useStoryblokState(story);

  const components = story.content.body.map((blok) => (<StoryblokComponent blok={blok} key={blok._uid} />));

  return (
    <Layout>
      <Section bgColor="black">
        <Grid md={2} xl={3} xxl={4} gap alignItems="center" justifyItems="center">
          <CtaLink href="/about-test" variant="ghost" icon="chevron-right" animate="right">Learn More</CtaLink>
          <CtaLink href="/about-test" variant="ghost" uppercase icon="chevron-right" animate="right">Learn More</CtaLink>
          <CtaLink href="/about-test" variant="ghostLeaf" icon="arrow-right" animate="right">Learn More</CtaLink>
          <CtaLink href="/about-test" variant="ghostLeaf" uppercase icon="arrow-right" animate="right">Learn More</CtaLink>
          <CtaLink
            href="/about-test"
            variant="ghost"
            icon="triangle-down"
            animate="down"
            className="hocus:su-bg-gradient-to-r hocus:su-from-periwinkle hocus:su-to-transparent"
          >
            Gradient fill
          </CtaLink>
          <CtaLink
            href="/about-test"
            variant="ghost"
            icon="triangle-down"
            animate="down"
            uppercase
            className="hocus:su-bg-gradient-to-r hocus:su-from-periwinkle hocus:su-to-transparent"
          >
            Gradient fill
          </CtaLink>
          <CtaLink
            href="/about-test"
            variant="ghostLeaf"
            icon="triangle-right"
            animate="right"
            className="hocus:su-rounded-tr-[26px] hocus:su-rounded-bl-[26px] hocus:su-rounded-br-none hocus:su-rounded-tl-none"
          >
            Change radius
          </CtaLink>
          <CtaLink
            href="/about-test"
            variant="ghostLeaf"
            icon="triangle-right"
            animate="right"
            uppercase
            className="hocus:su-rounded-tr-[26px] hocus:su-rounded-bl-[26px] hocus:su-rounded-br-none hocus:su-rounded-tl-none"
          >
            Change radius
          </CtaLink>
          <CtaLink
            href="/about-test"
            variant="ghostSwipe"
            icon="triangle-right"
          >
            Swipe right
          </CtaLink>
          <CtaLink
            href="/about-test"
            variant="ghostSwipe"
            icon="triangle-right"
            uppercase
          >
            Swipe right
          </CtaLink>
          <CtaLink
            href="/about-test"
            variant="ghostSwipeDown"
            icon="triangle-right"
          >
            Swipe down
          </CtaLink>
          <CtaLink
            href="/about-test"
            variant="ghostSwipeDown"
            icon="triangle-right"
            uppercase
          >
            Swipe down
          </CtaLink>
          <CtaLink
            href="/about-test"
            variant="ghostSwipeDown"
            icon="triangle-right"
          >
            A button with a really long label
          </CtaLink>
          <CtaLink
            href="/about-test"
            variant="ghostSwipeDown"
            icon="triangle-right"
            uppercase
          >
            A button with a really long label
          </CtaLink>
          <CtaLink
            href="/about-test"
            variant="primary"
            icon="triangle-down"
            animate="down"
          >
            Cardinal Red
          </CtaLink>
          <CtaLink
            href="/about-test"
            variant="primary"
            icon="triangle-down"
            animate="down"
            uppercase
          >
            Cardinal Red
          </CtaLink>
          <CtaLink
            href="/about-test"
            variant="secondary"
            icon="triangle-right"
            animate="right"
          >
            Digital Red
          </CtaLink>
          <CtaLink
            href="/about-test"
            variant="secondary"
            icon="triangle-right"
            animate="right"
            uppercase
          >
            Digital Red
          </CtaLink>
          <CtaLink
            href="/about-test"
            variant="secondary"
            icon="triangle-right"
            animate="right"
          >
            Digital Red with really long label
          </CtaLink>
          <CtaLink
            href="/about-test"
            variant="secondary"
            icon="triangle-right"
            animate="right"
            uppercase
          >
            Digital Red with really long label
          </CtaLink>
        </Grid>
      </Section>
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
