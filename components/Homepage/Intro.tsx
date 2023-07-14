'use client';
import { useRef } from 'react';
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
    <div ref={sectionRef} className="bg-gc-black cc rs-pt-10 rs-pb-6 text-white relative overflow-hidden">
      <m.div className="relative mx-auto w-fit" style={{ opacity: bracketOpacity, willChange }}>
        <FlexBox justifyContent="between">
          <m.div
            className="relative h-auto shrink-0"
            style={{ x: prefersReduceMotion ? '0' : bracketPosition, willChange }}
          >
            <Bracket
              className="w-[10vw] 2xl:w-[15rem] h-full children:!text-lime"
              curveClassName="h-[7vw] 2xl:h-[10.5rem]"
            />
          </m.div>
          {text && (
            <m.p
              className="font-serif font-semibold overview max-w-1000 rs-py-7 px-30 lg:px-72 mb-0"
              style={{ opacity: textOpacity, willChange }}
            >
              {text}
            </m.p>
          )}
          <m.div
            className="relative h-auto shrink-0"
            style={{ x: prefersReduceMotion ? '0' : bracketRightPosition, willChange }}
          >
            <Bracket
              isClose
              className="w-[10vw] 2xl:w-[15rem] h-full children:!text-lavender"
              curveClassName="h-[7vw] 2xl:h-[10.5rem]"
            />
          </m.div>
        </FlexBox>
      </m.div>
    </div>
  );
};
