import React from 'react';
import { graphql } from 'gatsby';
import { StoryblokComponent, storyblokEditable } from 'gatsby-source-storyblok';
import { useStoryblokState } from '../hooks/useStoryblokState';
import { Hero } from '../components/Hero/Hero';
import { Layout } from '../components/Layout';
import { GridAlternating } from '../components/Grid';
import { Paragraph } from '../components/Typography';
import { Container } from '../components/Container';

const StoryblokEntry = ({ data }) => {
  let story = data.storyblokEntry;
  story = useStoryblokState(story);

  const components = story.content.body?.map((blok) => (<StoryblokComponent blok={blok} key={blok._uid} />));

  return (
    <Layout>
      {/* Entirely POC code below - going to extract into components */}
      <Hero heading={story.name} />
      <Container bgColor="black" pt={9}>
        <GridAlternating>
          <Paragraph>
            Test1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non aliquam purus.
          </Paragraph>
          <Paragraph>
            Test1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non aliquam purus.
          </Paragraph>
          <Paragraph>
            Test1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non aliquam purus.
          </Paragraph>
          <Paragraph>
            Test1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non aliquam purus.
          </Paragraph>
        </GridAlternating>
        <GridAlternating startOnRight>
          {['test1', 'test2', 'test3']}
        </GridAlternating>
      </Container>
      <Container bgColor="white" pt={9}>
        <GridAlternating addCenterLine>
          <Paragraph font="serif" variant="overview">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non aliquam purus.
            Suspendisse efficitur sodales lorem. Nullam non aliquam purus.
          </Paragraph>
          <Paragraph font="serif" variant="overview">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non aliquam purus.
            Suspendisse efficitur sodales lorem. Nullam non aliquam purus.
          </Paragraph>
        </GridAlternating>
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
