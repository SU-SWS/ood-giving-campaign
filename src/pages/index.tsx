import * as React from 'react';
import { graphql } from 'gatsby';
import { StoryblokComponent, storyblokEditable } from 'gatsby-source-storyblok';
import { useStoryblokState } from '../hooks/useStoryblokState';
import Layout from '../components/Layout';
import { Heading, SrOnlyText } from '../components/Typography';

const IndexPage = ({ data }) => {
  let story = data.storyblokEntry;
  story = useStoryblokState(story);

  const components = story.content.body.map((blok) => (<StoryblokComponent blok={blok} key={blok._uid} />));

  return (
    <Layout>
      <div {...storyblokEditable(story.content)}>
        <Heading as="h1">{story.name}</Heading>
        <div className="su-logo su-text-20">Stanford</div>
        <SrOnlyText>Testing SR Text</SrOnlyText>
        {components}
      </div>
    </Layout>
  );
};

export default IndexPage;

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
