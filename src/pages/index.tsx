import * as React from 'react';
import { graphql } from 'gatsby';
import { StoryblokComponent, storyblokEditable } from 'gatsby-source-storyblok';
import { useStoryblokState } from '../hooks/useStoryblokState';
import { HomepageHero } from '../components/Hero/HomepageHero';
import { Layout } from '../components/Layout';
import { Section } from '../components/Section';
import { CtaLink } from '../components/Cta';
import { Grid } from '../components/Grid';
import { Text } from '../components/Typography';
import { Parallax } from '../components/Parallax/Parallax';

const IndexPage = ({ data }) => {
  let story = data.storyblokEntry;
  story = useStoryblokState(story);

  const components = story.content.body.map((blok) => (<StoryblokComponent blok={blok} key={blok._uid} />));

  return (
    <Layout>
      <HomepageHero />
      <div className="su-h-400 lg:su-h-600 su-overflow-hidden su-relative">
        <Parallax>
          <div style={{ backgroundImage: 'url(https://www.space.com/images/i/000/082/219/original/VLT-Pano-MCloudsMilkyWay_6068-net.jpg?interpolation=lanczos-none&fit=around|1024:1024' }} className="su--mt-100 su-h-800 su-flex su-items-center su-justify-center su-bg-center su-bg-cover" />
          <div className="su-absolute su-top-0 su-left-0 su-w-full su-h-full su-content-[''] su-block su-z-1 su-bg-black/40" />
        </Parallax>
        <div className="su-absolute su-top-[50%] su-left-[50%] su-translate-x-[-50%] su-translate-y-[-50%] su-text-shadow-lg su-z-10 su-max-w-800">
          <Text leading="none" align="center" font="druk-wide" size={7} color="white" weight="bold" className="">To infinity and beyond</Text>
        </div>
      </div>
      <div {...storyblokEditable(story.content)}>
        {components}
      </div>
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
          {/* Kerri's idea test */}
          <CtaLink
            href="/about-test"
            variant="ghostSwipe"
            icon="triangle-right"
            className="hocus:su-rounded-br-[1.5em] su-overflow-hidden"
          >
            Swipe + rounded corner
          </CtaLink>
          <CtaLink
            href="/about-test"
            variant="ghostSwipe"
            icon="triangle-right"
            className="hocus:su-rounded-br-[1.5em] su-overflow-hidden"
            uppercase
          >
            Swipe + rounded corner
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
      <div className="su-h-400 lg:su-h-600 su-overflow-hidden su-relative">
        <Parallax offset={30}>
          <div style={{ backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/stanford-125/wp-content/uploads/2016/05/Dish-Star-2048x1365.jpg' }} className="su--mt-100 su-h-800 su-flex su-items-center su-justify-center su-bg-center su-bg-cover" />
          <div className="su-absolute su-top-0 su-left-0 su-w-full su-h-full su-content-[''] su-block su-z-1 su-bg-black-true/30" />
        </Parallax>
        <div className="su-absolute su-top-[50%] su-left-[50%] su-translate-x-[-50%] su-translate-y-[-50%] su-text-shadow-lg su-z-10 su-max-w-800">
          <Parallax offset={70}>
            <Text leading="none" align="center" font="druk-wide" size={7} color="white" weight="bold" className="">
              Live long and prosper
            </Text>
          </Parallax>
        </div>
      </div>
      <Section bgColor="white">
        <Grid md={2} xl={3} xxl={4} gap alignItems="center" justifyItems="center">
          <CtaLink href="/about-test" variant="ghost" icon="chevron-right" animate="right" color="black">Learn More</CtaLink>
          <CtaLink href="/about-test" variant="ghost" uppercase icon="chevron-right" animate="right" color="black">Learn More</CtaLink>
          <CtaLink href="/about-test" variant="ghostLeaf" icon="arrow-right" animate="right" color="black">Learn More</CtaLink>
          <CtaLink href="/about-test" variant="ghostLeaf" uppercase icon="arrow-right" animate="right" color="black">Learn More</CtaLink>
          <CtaLink
            href="/about-test"
            variant="ghost"
            color="black"
            icon="triangle-down"
            animate="down"
            className="hocus:su-bg-gradient-to-r hocus:!su-from-flamingo hocus:su-to-transparent"
          >
            Gradient fill
          </CtaLink>
          <CtaLink
            href="/about-test"
            variant="ghost"
            color="black"
            icon="triangle-down"
            animate="down"
            uppercase
            className="hocus:su-bg-gradient-to-r hocus:!su-from-flamingo hocus:su-to-transparent"
          >
            Gradient fill
          </CtaLink>
          <CtaLink
            href="/about-test"
            variant="ghostLeaf"
            color="black"
            icon="triangle-right"
            animate="right"
            className="hocus:su-rounded-tr-[26px] hocus:su-rounded-bl-[26px] hocus:su-rounded-br-none hocus:su-rounded-tl-none"
          >
            Change radius
          </CtaLink>
          <CtaLink
            href="/about-test"
            variant="ghostLeaf"
            color="black"
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
            color="black"
            icon="triangle-right"
            className="after:!su-bg-robins-egg"
          >
            Swipe right
          </CtaLink>
          <CtaLink
            href="/about-test"
            variant="ghostSwipe"
            color="black"
            icon="triangle-right"
            className="after:!su-bg-robins-egg"
            uppercase
          >
            Swipe right
          </CtaLink>
          <CtaLink
            href="/about-test"
            variant="ghostSwipeDown"
            color="black"
            icon="triangle-right"
            className="after:!su-bg-lime"
          >
            Swipe down
          </CtaLink>
          <CtaLink
            href="/about-test"
            variant="ghostSwipeDown"
            color="black"
            icon="triangle-right"
            className="after:!su-bg-lime"
            uppercase
          >
            Swipe down
          </CtaLink>
          <CtaLink
            href="/about-test"
            variant="ghostSwipeDown"
            color="black"
            className="after:!su-bg-lavender"
            icon="triangle-right"
          >
            A button with a really long label
          </CtaLink>
          <CtaLink
            href="/about-test"
            variant="ghostSwipeDown"
            color="black"
            className="after:!su-bg-lavender"
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
      <div className="su-h-400 lg:su-h-600 su-overflow-hidden su-relative">
        <Parallax>
          <div style={{ backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/0/00/Crab_Nebula.jpg' }} className="su--mt-100 su-h-800 su-flex su-items-center su-justify-center su-bg-center su-bg-cover" />
          <div className="su-absolute su-top-0 su-left-0 su-w-full su-h-full su-content-[''] su-block su-z-1 su-bg-black-true/40" />
        </Parallax>
        <div className="su-absolute su-top-[50%] su-left-[50%] su-translate-x-[-50%] su-translate-y-[-50%] su-z-10">
          <CtaLink
            href="/about-test"
            variant="ghostLeaf"
            icon="triangle-right"
            className="!su-rs-px-5 !su-rs-py-2 su-text-20 md:su-text-[4.6rem] !su-font-bold !su-text-white !su-bg-black-true/40 hocus:su-rounded-tl-none hocus:su-rounded-br-none hocus:!su-bg-sapphire/80"
          >
            See our new initiative
          </CtaLink>
        </div>
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
