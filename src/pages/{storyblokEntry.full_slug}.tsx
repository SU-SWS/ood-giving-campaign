import * as React from 'react';
import { graphql } from 'gatsby';
import { StoryblokComponent, storyblokEditable } from 'gatsby-source-storyblok';
import { useStoryblokState } from '../hooks/useStoryblokState';
import { Hero } from '../components/Hero/Hero';
import { Layout } from '../components/Layout';
import { Grid } from '../components/Grid';
import { Heading, Paragraph, Text } from '../components/Typography';
import { Container } from '../components/Container';
import { WidthBox } from '../components/WidthBox.tsx';

const StoryblokEntry = ({ data }) => {
  let story = data.storyblokEntry;
  story = useStoryblokState(story);

  const components = story.content.body.map((blok) => (<StoryblokComponent blok={blok} key={blok._uid} />));

  return (
    <Layout>
      <Hero heading={story.name} />
      <Container bgColor="white" py={9}>
        <div className="su-relative 2xl:su-w-[90%] su-mx-auto">
          <Grid md={2} className="md:su-gap-x-[6rem] lg:su-gap-x-[10rem] xl:su-gap-x-[20rem] 2xl:su-gap-x-[28rem]">
            <Paragraph font="serif" weight="bold" size={3} leading="display">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non aliquam purus.
              Suspendisse efficitur sodales lorem. Nullam non aliquam purus.
            </Paragraph>
            <div />
            <div />
            <Paragraph font="serif" weight="bold" size={3} leading="display">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non aliquam purus.
              Suspendisse efficitur sodales lorem. Nullam non aliquam purus.
            </Paragraph>
          </Grid>
          <div
            className="su-w-2 su-absolute su-z-10 su-top-0 su-left-[50%] su-block su-bg-black su-h-screen su-origin-top"
          />
        </div>
      </Container>
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
