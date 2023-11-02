'use client';

import { useRef, useState } from 'react';
import {
  m, useScroll, useSpring, useTransform, SpringOptions, useWillChange,
} from 'framer-motion';
import { AnimateInView } from '../Animate';
import { Container } from '../Container';
import { Heading, Text, Paragraph } from '../Typography';
import { getProcessedImage } from '@/utilities/getProcessedImage';

export const TogetherSection = () => {
  return (
    <Container pb={7} width="full" bgColor="black" className="relative overflow-hidden">
      <Container>
        <AnimateInView animation="slideUp">
          <Heading size="f6" align="center" leading="tight" className="max-w-1200 mx-auto">
            True change happens when we come together.
          </Heading>
        </AnimateInView>
        <AnimateInView animation="slideUp" delay={0.2}>
          <Paragraph leading="display" align="center" size={2} className="max-w-900 mx-auto">
            One changemaker is admirable. A community of changemakers is unstoppable.
          </Paragraph>
        </AnimateInView>
      </Container>
      <Text
        font="druk"
        color="white"
        align="center"
        leading="none"
        aria-hidden
        className="text-[28vw] -ml-[0.04em]"
      >
        Together
      </Text>
      <Container>
        <img
          src={getProcessedImage('https://a-us.storyblok.com/f/1005200/1280x720/87e6131789/campusscene.gif')}
          alt="Animated view of the Stanford Dish"
          className="w-[86vw] sm:w-[60vw] xl:w-[42vw] mx-auto -mt-[13vw]"
        />
        <Paragraph
          font="serif"
          italic
          leading="display"
          align="center"
          size={2}
          className="max-w-1000 mx-auto rs-mt-5"
        >
          There is nothing we can do that we cannot do better, together.
        </Paragraph>
      </Container>
    </Container>
  );
};
