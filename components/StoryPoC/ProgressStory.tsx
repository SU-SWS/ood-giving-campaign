import { useRef } from 'react';
import { useScroll, m, useTransform } from 'framer-motion';
import { AnimateInView } from '../Animate';
import { Container } from '../Container';
import { Grid } from '../Grid';
import { Heading, Paragraph, Text } from '../Typography';
import { getProcessedImage } from '@/utilities/getProcessedImage';

export const ProgressStory = () => {
  return (
    <div>
      <Container as="header" bgColor="black" pt={10} className="3xl:px-100">
        <AnimateInView animation="zoomIn">
          <Heading as="h1" font="mono" size={8} leading="tight" className="rs-mb-1 max-w-1200">
            Progress is nothing without purpose
          </Heading>
        </AnimateInView>
        <Text color="white">by Sarah Jane Staats</Text>
        <Text color="white">May 5, 2023</Text>
        <Paragraph font="serif" weight="semibold" leading="display" size={2} className="rs-mt-8 max-w-1200">
          Stanford, at its heart, is a community of changemakers. Where there is doubt, we make discoveries.
          Where there are fundamental questions, we make discoveries. Where there is need, we make a difference.
          Our aim is to leave the world better than we found it.
          We hope you’ll join us in making creative changes that benefit generations to come.
        </Paragraph>
      </Container>
    </div>
  );
};
