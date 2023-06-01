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
    <div ref={sectionRef} className="su-bg-saa-black su-rs-pt-10 su-rs-pb-6 su-text-white">
      <FlexBox alignItems="stretch" justifyContent="center">
        <Bracket isSolid className="su-w-[7vw] 2xl:su-w-[15rem] su-shrink-0" />
        <Paragraph font="serif" weight="semibold" variant="intro" noMargin className="su-max-w-1000 su-rs-p-6">
          The present demands immediate action—and the future demands immediate impact.
          Looking at the challenges we face today—some of which threaten the future of
          life on Earth—we feel a sense of urgency.
          This is the time for us all to come together with purpose and intent,
          to go further, faster for the sake of the world.
        </Paragraph>
        <Bracket isClose isSolid className="su-w-[7vw] 2xl:su-w-[15rem] su-shrink-0" />
      </FlexBox>
    </div>
  );
};
