'use client';

import { useRef } from 'react';
import {
  m, useScroll, useTransform, useWillChange, useReducedMotion,
} from 'framer-motion';
import { AnimateInView } from '../Animate';
import { Container } from '../Container';
import { Heading, Paragraph, SrOnlyText } from '../Typography';
import { getProcessedImage } from '@/utilities/getProcessedImage';

export const TogetherSection = () => {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const willChange = useWillChange();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['-80vh', '0'],
  });
  const { scrollYProgress: imageScrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['-80vh', '5vh'],
  });
  const { scrollYProgress: imageOpacityScrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['-80vh', '-5vh'],
  });
  const trackingAnimation = useTransform(scrollYProgress, [0, 1], [prefersReducedMotion ? '0.05em' : '0.3em', '0.025em']);
  const scaleAnimation = useTransform(scrollYProgress, [0, 1], [prefersReducedMotion ? 1.2: 3, 1]);
  const opacityAnimation = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const marginTopAnimation = useTransform(imageScrollYProgress, [0, 1], [prefersReducedMotion ? '-13vw' : '15vw', '-13vw']);
  const imageScaleAnimation = useTransform(imageScrollYProgress, [0, 1], [prefersReducedMotion ? 1 : 2.4, 1]);
  const imageOpacityAnimation = useTransform(imageOpacityScrollYProgress, [0, 0.5, 0.8, 1],
    [prefersReducedMotion ? 0.7 : 0, prefersReducedMotion ? 0.8: 0, prefersReducedMotion ? 0.9 : 0.5, 1]);

  return (
    <div ref={sectionRef} className="relative overflow-hidden rs-pb-8 w-full bg-gc-black text-white">
      <Container>
        <AnimateInView animation="slideUp">
          <Heading size="f5" align="center" leading="tight" className="mx-auto max-w-900">
            True change will require all of us.
          </Heading>
        </AnimateInView>
        <AnimateInView animation="slideUp" delay={0.2}>
          <Paragraph leading="display" align="center" size={1} className="max-w-700 mx-auto">
            One changemaker is admirable. A community of changemakers is unstoppable.
            There is nothing we can do that we cannot do better …
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
        src={getProcessedImage('https://a-us.storyblok.com/f/1005200/3014x1979/5d314e43ba/together_h412-18.jpg', '800x0')}
        alt="A black and white archival photo of a conductor leading an orchestra"
        className="relative w-[90vw] sm:w-[60vw] xl:w-[42vw] mx-auto z-10"
        width={800}
        height={521}
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
