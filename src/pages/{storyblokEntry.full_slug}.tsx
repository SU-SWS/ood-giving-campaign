import React, { useRef } from 'react';
import { graphql } from 'gatsby';
import { useScroll, useSpring, m } from 'framer-motion';
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

  const gridRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: gridRef, offset: ['-300px', '200px'] });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

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
      </Container>
      <Container bgColor="white" pt={9}>
        <div className="su-relative su-mx-auto" ref={gridRef}>
          <GridAlternating className="md:su-gap-x-[6rem] lg:su-gap-x-[10rem] xl:su-gap-x-[20rem] 2xl:su-gap-x-[28rem]">
            <Paragraph font="serif" variant="overview" className="2xl:su-max-w-500 su-justify-self-end">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non aliquam purus.
              Suspendisse efficitur sodales lorem. Nullam non aliquam purus.
            </Paragraph>
            <Paragraph font="serif" variant="overview" className="2xl:su-max-w-500 su-rs-pb-9">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non aliquam purus.
              Suspendisse efficitur sodales lorem. Nullam non aliquam purus.
            </Paragraph>
          </GridAlternating>
          <m.div
            className="su-w-2 su-absolute su-top-0 su-left-[50%] su--ml-1 su-block su-bg-black su-h-full su-origin-top"
            style={{ scaleY }}
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
