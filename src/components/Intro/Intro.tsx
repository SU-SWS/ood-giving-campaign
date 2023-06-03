import React, { useRef } from 'react';
import {
  m, useReducedMotion, useScroll, useTransform, useSpring, useWillChange, SpringOptions,
} from 'framer-motion';
import { Bracket } from '../Bracket';
import { FlexBox } from '../FlexBox';

export const Intro = () => {
  const prefersReduceMotion = useReducedMotion();
  const willChange = useWillChange();
  const springSetting: SpringOptions = {
    stiffness: 130,
    damping: 22,
    restDelta: 0.1,
  };
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['-40vh', '-5vh'],
  });
  const scrollSpring = useSpring(scrollYProgress, springSetting);

  const bracketOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  // We want the text opacity to increase at a slower rate than the bracket opacity
  const textOpacity = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], [0, 0, 0.6, 1]);
  const bracketPosition = useTransform(scrollSpring, [0, 1], ['-20vw', '0vw']);

  return (
    <div ref={sectionRef} className="su-bg-gc-black su-cc su-rs-pt-10 su-rs-pb-6 su-text-white su-relative su-overflow-hidden">
      <m.div className="su-relative su-mx-auto su-w-fit" style={{ opacity: bracketOpacity, willChange }}>
        <FlexBox justifyContent="between">
          <m.div
            className="su-relative su-h-auto su-shrink-0"
            style={{ left: prefersReduceMotion ? '0' : bracketPosition, willChange }}
          >
            <Bracket
              isSolid
              className="su-w-[10vw] 2xl:su-w-[15rem] su-h-full"
              curveClassName="su-h-[7vw] 2xl:su-h-[10.5rem]"
            />
          </m.div>
          <m.p
            className="su-font-serif su-font-semibold su-text-21 md:su-text-27 xl:su-text-[3.4rem] su-max-w-1000 su-rs-py-7 su-px-30 lg:su-px-72 su-mb-0"
            style={{ opacity: textOpacity, willChange }}
          >
            The present demands immediate action—and the future demands immediate impact.
            Looking at the challenges we face today—some of which threaten the future of
            life on Earth—we feel a sense of urgency.
            This is the time for us all to come together with purpose and intent,
            to go further, faster for the sake of the world.
          </m.p>
          <m.div
            className="su-relative su-h-auto su-shrink-0"
            style={{ right: prefersReduceMotion ? '0' : bracketPosition, willChange }}
          >
            <Bracket
              isClose
              isSolid
              className="su-w-[10vw] 2xl:su-w-[15rem] su-h-full"
              curveClassName="su-h-[7vw] 2xl:su-h-[10.5rem]"
            />
          </m.div>
        </FlexBox>
      </m.div>
    </div>
  );
};
