import React, { useRef } from 'react';
import {
  m, useReducedMotion, useScroll, useTransform,
} from 'framer-motion';
import { Bracket } from '../Bracket';
import { FlexBox } from '../FlexBox';

export const Intro = () => {
  const prefersReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['-30vh', '5vh'],
  });

  // Animate from justify-between to justify-center
  const bracketOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 0, 0.5, 1]);
  const contentWidth = useTransform(scrollYProgress, [0, 1], ['100%', '70%']);

  return (
    <div ref={sectionRef} className="su-bg-saa-black su-rs-pt-10 su-rs-pb-6 su-text-white su-relative">
      <m.div className="su-relative su-mx-auto" style={{ width: prefersReduceMotion ? '60%' : contentWidth, opacity: bracketOpacity }}>
        <FlexBox alignItems="stretch" justifyContent="between">
          <Bracket
            isSolid
            className="su-shrink-0 su-w-[10vw] 2xl:su-w-[15rem]"
            curveClassName="su-h-[7vw] 2xl:su-h-[10.5rem]"
          />
          <m.p
            className="su-font-serif su-font-semibold su-gc-intro-text su-max-w-1000 su-rs-p-6 su-mb-0"
            style={{ opacity: textOpacity }}
          >
            The present demands immediate action—and the future demands immediate impact.
            Looking at the challenges we face today—some of which threaten the future of
            life on Earth—we feel a sense of urgency.
            This is the time for us all to come together with purpose and intent,
            to go further, faster for the sake of the world.
          </m.p>
          <Bracket
            isClose
            isSolid
            className="su-w-[10vw] 2xl:su-w-[15rem] su-shrink-0"
            curveClassName="su-h-[7vw] 2xl:su-h-[10.5rem]"
          />
        </FlexBox>
      </m.div>
    </div>
  );
};
