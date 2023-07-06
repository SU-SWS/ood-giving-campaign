'use client';
import React, { useRef } from 'react';
import {
  m, useReducedMotion, useScroll, useTransform, useSpring, useWillChange, SpringOptions,
} from 'framer-motion';
import { Bracket } from '../Bracket';
import { FlexBox } from '../FlexBox';

type IntroProps = {
  text: string;
};

export const Intro = ({ text }: IntroProps) => {
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
    offset: ['-50vh', '-5vh'],
  });
  const scrollSpring = useSpring(scrollYProgress, springSetting);

  const bracketOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  // We want the text opacity to increase at a slower rate than the bracket opacity
  const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0, 0.6, 1]);
  const bracketPosition = useTransform(scrollSpring, [0, 1], ['-20vw', '0vw']);
  const bracketRightPosition = useTransform(scrollSpring, [0, 1], ['20vw', '0vw']);

  return (
    <div ref={sectionRef} className="su-bg-gc-black su-cc su-rs-pt-10 su-rs-pb-6 su-text-white su-relative su-overflow-hidden">
      <m.div className="su-relative su-mx-auto su-w-fit" style={{ opacity: bracketOpacity, willChange }}>
        <FlexBox justifyContent="between">
          <m.div
            className="su-relative su-h-auto su-shrink-0"
            style={{ x: prefersReduceMotion ? '0' : bracketPosition, willChange }}
          >
            <Bracket
              className="su-w-[10vw] 2xl:su-w-[15rem] su-h-full children:!su-text-lime"
              curveClassName="su-h-[7vw] 2xl:su-h-[10.5rem]"
            />
          </m.div>
          {text && (
            <m.p
              className="su-font-serif su-font-semibold su-overview su-max-w-1000 su-rs-py-7 su-px-30 lg:su-px-72 su-mb-0"
              style={{ opacity: textOpacity, willChange }}
            >
              {text}
            </m.p>
          )}
          <m.div
            className="su-relative su-h-auto su-shrink-0"
            style={{ x: prefersReduceMotion ? '0' : bracketRightPosition, willChange }}
          >
            <Bracket
              isClose
              className="su-w-[10vw] 2xl:su-w-[15rem] su-h-full children:!su-text-lavender"
              curveClassName="su-h-[7vw] 2xl:su-h-[10.5rem]"
            />
          </m.div>
        </FlexBox>
      </m.div>
    </div>
  );
};
