import React from 'react';
import { Container } from '../Container';
import { FlexBox } from '../FlexBox';
import { Heading, Text, Paragraph } from '../Typography';

export const StoryHero = ({
  title,
}) => (
  <Container width="full" className="su-relative su-bg-gc-black su-pt-300" pb={9}>
    <Heading as="h1" size={6} align="center" color="white">{title}</Heading>
  </Container>
);
