import { useRef } from 'react';
import { useScroll, m, useTransform } from 'framer-motion';
import { AnimateInView } from '../Animate';
import { Container } from '../Container';
import { Grid } from '../Grid';
import { ImageOverlay } from '../ImageOverlay';
import { BookshelfAlt } from '../Bookshelf/BookshelfAlt';
import { Heading, Paragraph, Text } from '../Typography';
import { getProcessedImage } from '@/utilities/getProcessedImage';

export const ProgressStory = () => {
  return (
    <div className="bg-gc-black">
      <Container as="header" bgColor="black" pb={9} className="relative 3xl:px-100 pt-[15vw]">
        <img
          src={getProcessedImage('https://a-us.storyblok.com/f/1005200/2100x2028/bef2e6a13e/masthead-top-structured.jpg', '2000x0')}
          alt=""
          loading="eager"
          className="absolute w-full h-full object-cover object-top top-0 left-0"
        />
        <Grid lg={12} className="relative" gap="default">
          <AnimateInView animation="slideUp" className="relative z-10 max-w-1200 2xl:col-start-2 col-span-11">
            <Heading as="h1" font="mono" size="f8" leading="tight" className="rs-mb-1 max-w-1200">
              Progress is nothing without purpose
            </Heading>
            <Text color="white">by Sarah Jane Staats</Text>
            <Text color="white">May 5, 2023</Text>
            <Paragraph font="serif" weight="semibold" leading="display" size={2} noMargin className="mt-[30vw] max-w-1200">
              Stanford, at its heart, is a community of changemakers. Where there is doubt, we make discoveries.
              Where there are fundamental questions, we make discoveries. Where there is need, we make a difference.
              Our aim is to leave the world better than we found it.
              We hope you’ll join us in making creative changes that benefit generations to come.
            </Paragraph>
          </AnimateInView>
        </Grid>
      </Container>
      <Container bgColor="black" width="full" className="relative -mt-2">
        <img
          src={getProcessedImage('https://a-us.storyblok.com/f/1005200/4000x2250/0c54166208/vlad-hilitanu-pt7qzb4zlww-unsplash.jpg', '2000x2000')}
          alt=""
          loading="eager"
          className="relative w-full h-full object-cover object-top"
        />
        <div
          className="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-gc-black via-transparent via-40% to-gc-black z-10"
        />
        <div className="absolute top-0 r-0 w-full 3xl:px-100 z-20">
          <Grid lg={12} className="w-full" gap="default">
            <Heading font="mono" size="f8" uppercase className="col-start-2 col-span-11 mt-[30vw] mb-0">
              Impact
            </Heading>
          </Grid>
          <Grid lg={12} className="w-full" gap="default">
            <div className="3xl:col-start-5 col-span-12 3xl:col-span-8 cc mt-[25vw]">
              <Heading font="serif" size={2} className="max-w-600">
                What do we mean when we talk about Stanford’s impact?
              </Heading>
              <div className="columns-2 [column-gap:5rem] rs-mt-5">
                <Paragraph>
                  Most universities conduct research that can create products and shape policies.
                  We also train leaders who will influence their peers, organizations, and communities.
                  We like to think we can change people’s lives or even nudge the course of history.
                </Paragraph>
                <Paragraph>
                  Of course, cause and effect can be hard to trace, especially over time.
                  Moreover, not everything that counts can be counted. But ultimately,
                  what Stanford does every day is this: We send ideas and people into the world.
                </Paragraph>
                <Paragraph>
                  Impact means believing what we do makes a difference.
                  Impact means holding ourselves accountable for the consequences of our actions.
                  Impact means doing our utmost to see who our efforts reach,
                  from people on campus to people all over the world.
                </Paragraph>
                <Paragraph>
                  Impact means that knowing who we help can change the way we work.
                </Paragraph>
              </div>
              <Paragraph color="black-40" variant="caption" align="right" className="rs-mt-8" noMargin>
                Photo credit lorem ipsum dolar sit amet vestibulum perimentium.
              </Paragraph>
            </div>
          </Grid>
        </div>
      </Container>
      <BookshelfAlt />
    </div>
  );
};
