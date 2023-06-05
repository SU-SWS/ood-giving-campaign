import React, { useRef, useState } from 'react';
import { dcnb } from 'cnbuilder';
import {
  m, useScroll, useSpring, useTransform, useInView, SpringOptions,
} from 'framer-motion';
import { Container } from '../Container';
import { Grid, GridAlternating } from '../Grid';
import { Heading, Text, Paragraph } from '../Typography';
import { ThemeCard } from '../VerticalCard';
import { colorNameToHex } from '../../utilities/colorPalettePlugin';
import { FlexBox } from '../FlexBox';
import { AnimateInView } from '../Animate';
import { CtaButton } from '../Cta';
import { SplitPoster } from '../SplitPoster';

export const FindPurposeSection = ({ children }) => (
  <Container width="full" bgColor="white" py={9}>
    <Container>
      <Heading size="f8" font="druk" className="su-max-w-900" leading="none">
        Find your purpose.
      </Heading>
      <div className="lg:su-w-[70%] su-mx-auto">
        <Paragraph font="serif" weight="semibold">
          The world’s collective problems require collective solutions—and the work is far from over.
          It takes all of us, coming together from all angles.
          Discover the schools and initiatives working together On Purpose.
        </Paragraph>
        <Paragraph font="serif" weight="semibold">
          So, what moves you?
        </Paragraph>
      </div>
    </Container>
    {children}
  </Container>
);
