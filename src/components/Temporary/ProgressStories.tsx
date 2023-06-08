import React, { useRef } from 'react';
import { useScroll, useSpring, m } from 'framer-motion';
import { Container } from '../Container';
import { Heading, Paragraph } from '../Typography';
import { AnimateInView } from '../Animate';
import { getProcessedImage } from '../../utilities/getProcessedImage';

type ProgressStoriesProps = {
  bgImage?: string;
  children: React.ReactNode;
};

export const ProgressStories = ({ bgImage, children }: ProgressStoriesProps) => {
  const bg = getProcessedImage(bgImage, '3000x0');
  const introRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: introRef,
    offset: ['-30vh', '30%'],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <Container width="full" bgColor="black" pb={10} className="su-relative su--mt-100">
      <div
        className="su-relative su-pb-[7vw] su-bg-black-true"
        style={{ background: `url('${bg}') center center / contain no-repeat` }}
      >
        <div className="su-cc su-bg-transparent su-relative su-z-10">
          <div className="su-relative su-rs-pt-9" ref={introRef}>
            <AnimateInView duration={0.6} delay={0.2} animation="slideUp">
              <Heading font="druk" className="su-fluid-type-8 su-mb-0 3xl:su-gc-splash xl:su-max-w-[47%] su-pb-[23vw] 2xl:su-whitespace-pre-line" leading="none">
                Progress<br />
                is nothing<br />
                without purpose.
              </Heading>
            </AnimateInView>
            <m.div
              className="su-hidden md:su-block su-w-2 su-absolute su-top-0 su-left-1/2 su--ml-1 su-h-full su-origin-top su-bg-current"
              style={{ scaleY }}
            />
          </div>
          <AnimateInView delay={0.2} duration={0.6} animation="slideUp">
            <div className="lg:su-w-4/5 2xl:su-w-3/5 su-mx-auto su-rs-pt-5">
              <Paragraph font="serif" weight="semibold" variant="overview" leading="snug" className="su-max-w-700 su-mx-auto">
                Stanford, at its heart, is a community of changemakers.
                Learn more about the people driving us toward a brighter tomorrow.
              </Paragraph>
            </div>
          </AnimateInView>
        </div>
        <div className="su-absolute su-top-0 su-h-[50vw] 2xl:su-h-[40vw] 3xl:su-h-[35vw] su-w-full su-bg-gradient-to-b su-from-gc-black su-via-[#35459A]" />
        <div className="su-absolute su-bottom-0 su-h-[20vw] 2xl:su-h-[15vw] su-w-full su-bg-gradient-to-t su-from-gc-black su-to-black-true" />
      </div>
      <Container bgColor="black">{children}</Container>
    </Container>
  );
};
