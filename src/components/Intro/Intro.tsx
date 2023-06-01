import React, { useRef, useState } from 'react';
import {
  m, useReducedMotion, useScroll, useTransform,
} from 'framer-motion';
import { Bracket } from '../Bracket';
import { Container } from '../Container';
import { FlexBox } from '../FlexBox';
import { Paragraph } from '../Typography';

export const Intro = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={sectionRef} className="su-cc su-bg-saa-black su-rs-pt-10 su-rs-pb-6 su-text-white">
      <FlexBox alignItems="center">
        <Bracket isSolid className="su-w-100" />
        <Paragraph font="serif" variant="overview" noMargin className="su-max-w-900 su-mx-auto">
          The present demands immediate action—and the future demands immediate impact.
          Looking at the challenges we face today—some of which threaten the future of
          life on Earth—we feel a sense of urgency.
          This is the time for us all to come together with purpose and intent,
          to go further, faster for the sake of the world.
        </Paragraph>
        <Bracket isClose isSolid className="su-w-100" />
      </FlexBox>
    </div>
  );
};
