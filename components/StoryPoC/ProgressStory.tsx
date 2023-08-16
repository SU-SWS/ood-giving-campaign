import { useRef } from 'react';
import { useScroll, m, useTransform } from 'framer-motion';
import { AnimateInView } from '../Animate';
import { Container } from '../Container';
import { Grid } from '../Grid';
import { ImageOverlay } from '../ImageOverlay';
import { Heading, Paragraph, Text } from '../Typography';
import { getProcessedImage } from '@/utilities/getProcessedImage';

export const ProgressStory = () => {
  return (
    <div>
      <Container as="header" bgColor="black" className="relative 3xl:px-100 pt-300">
        <img
          src={getProcessedImage('https://a-us.storyblok.com/f/1005200/2100x2028/bef2e6a13e/masthead-top-structured.jpg', '2000x0')}
          alt=""
          loading="eager"
          className="absolute w-full h-full object-cover object-top top-0 left-0"
        />
        <Grid lg={12} className="relative">
          <AnimateInView animation="slideUp" className="relative z-10 max-w-1200 2xl:col-start-2 col-span-11">
            <Heading as="h1" font="mono" size="f8" leading="tight" className="rs-mb-1 max-w-1200">
              Progress is nothing without purpose
            </Heading>
            <Text color="white">by Sarah Jane Staats</Text>
            <Text color="white">May 5, 2023</Text>
            <Paragraph font="serif" weight="semibold" leading="display" size={2} className="mt-800 rs-pb-10 max-w-1200">
              Stanford, at its heart, is a community of changemakers. Where there is doubt, we make discoveries.
              Where there are fundamental questions, we make discoveries. Where there is need, we make a difference.
              Our aim is to leave the world better than we found it.
              We hope you’ll join us in making creative changes that benefit generations to come.
            </Paragraph>
          </AnimateInView>
        </Grid>
      </Container>
    </div>
  );
};
