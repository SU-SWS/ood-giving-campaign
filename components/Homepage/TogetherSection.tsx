'use client';

import { useRef } from 'react';
import {
  m, useScroll, useTransform, useWillChange,
} from 'framer-motion';
import { AnimateInView } from '../Animate';
import { Container } from '../Container';
import { Heading, Paragraph, SrOnlyText } from '../Typography';
import { getProcessedImage } from '@/utilities/getProcessedImage';

export const TogetherSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const willChange = useWillChange();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['-80vh', '0'],
  });
  const { scrollYProgress: imageScrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['-80vh', '30vh'],
  });
  const trackingAnimation = useTransform(scrollYProgress, [0, 1], ['0.3em', '0.025em']);
  const scaleAnimation = useTransform(scrollYProgress, [0, 1], [3, 1]);
  const opacityAnimation = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const marginTopAnimation = useTransform(imageScrollYProgress, [0, 1], ['20vw', '-13vw']);
  const imageScaleAnimation = useTransform(imageScrollYProgress, [0, 1], [3, 1]);
  const imageOpacityAnimation = useTransform(imageScrollYProgress, [0, 0.5, 0.8, 1], [0, 0, 0.3, 1]);

  return (
    <div ref={sectionRef} className="relative overflow-hidden rs-pb-8 w-full bg-gc-black text-white">
      <Container>
        <AnimateInView animation="slideUp">
          <Heading size="f6" align="center" leading="tight" className="mx-auto max-w-[105rem]">
            True change will require all of us.
          </Heading>
        </AnimateInView>
        <AnimateInView animation="slideUp" delay={0.2}>
          <Paragraph leading="display" align="center" size={2} className="max-w-900 mx-auto">
            One changemaker is admirable. A community of changemakers is unstoppable.
            There is nothing we can do that we cannot do better...
          </Paragraph>
          <SrOnlyText>together</SrOnlyText>
        </AnimateInView>
      </Container>
      <m.div
        aria-hidden
        className="font-druk uppercase text-center leading-none text-[28vw] -ml-[0.04em] tracking-wide z-0"
        style={{
          scale: scaleAnimation,
          opacity: opacityAnimation,
          letterSpacing: trackingAnimation,
          willChange,
        }}
      >
        Together
      </m.div>
      <m.img
        src={getProcessedImage('https://a-us.storyblok.com/f/1005200/3014x1979/5d314e43ba/together_h412-18.jpg', '1200x0')}
        alt=""
        className="relative w-[90vw] sm:w-[60vw] xl:w-[42vw] mx-auto z-10"
        style={{
          marginTop: marginTopAnimation,
          scale: imageScaleAnimation,
          opacity: imageOpacityAnimation,
          willChange,
        }}
      />
    </div>
  );
};
