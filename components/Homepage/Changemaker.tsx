'use client';

import { useState } from 'react';
import { m } from 'framer-motion';
import { AnimatedText } from '../AnimatedText/AnimatedText';
import { Container } from '../Container';
import { Grid } from '../Grid';
import { Heading, Paragraph, Text } from '../Typography';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import { CtaButton } from '../Cta';
import { AnimateInView } from '../Animate';
import { ChangemakerCard } from '@/components/ChangemakerCard';

export const Changemaker = () => {
  const bgImage = getProcessedImage('https://a-us.storyblok.com/f/1005200/3089x2048/aee2ea28c6/21664-18-0021_cmyk.jpg', '2000x0');

  return (
    <Container
      width="full"
      className="relative bg-fixed bg-no-repeat bg-top bg-cover"
      bgColor="black"
      style={{ backgroundImage: `url('${bgImage}')` }}
      py={10}
    >
      <Container>
        <Text font="serif" weight="bold" leading="tight" align="center" aria-hidden className="max-w-[110rem] mx-auto">
          <Text as="span" size="f7" font="serif" className="block rs-mb-4 children:mx-auto children:justify-center">
            <AnimatedText text="Makers. Doers. Boundary Pushers. Risk-takers." />
          </Text>
        </Text>
        <Paragraph size={2} weight="semibold" noMargin font="serif" align="center" className="max-w-900 mx-auto rs-my-4" leading="display">
          The Stanford community overflows with curious people unafraid to try,
          change, and try again.<br />
          Meet some of them.
        </Paragraph>
        <Grid xl={4} pt={7} gap="default">
          <ChangemakerCard
            imageSrc="https://a-us.storyblok.com/f/1005200/878x1800/523e07bc72/person.jpg"
            heading="Alvin Pearman"
            body="Lorem Ipsum Dolar Sit"
          />
          <ChangemakerCard
            imageSrc="https://a-us.storyblok.com/f/1005200/878x1800/4535e9548c/person.jpg"
            heading="Andrii Torchylo"
            body="Lorem Ipsum Dolar Sit"
          />
          <ChangemakerCard
            imageSrc="https://a-us.storyblok.com/f/1005200/878x1801/5177958b81/person.jpg"
            heading="Misan Rewane"
            body="Lorem Ipsum Dolar Sit"
          />
          <ChangemakerCard
            imageSrc="https://a-us.storyblok.com/f/1005200/878x1801/d031207128/person.jpg"
            heading="Gopi Goda"
            body="Lorem Ipsum Dolar Sit"
          />
        </Grid>
      </Container>
    </Container>
  );
};
