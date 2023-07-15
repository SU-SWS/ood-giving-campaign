'use client';
import { useRef } from 'react';
import { useScroll, useSpring, m } from 'framer-motion';
import { Container } from '../Container';
import { Heading, Paragraph } from '../Typography';
import { AnimateInView } from '../Animate';
import { getProcessedImage } from '@/utilities/getProcessedImage';

type ProgressSectionProps = {
  bgImage?: string;
  children: React.ReactNode;
};

export const ProgressSection = ({ bgImage, children }: ProgressSectionProps) => {
  const bg = bgImage ? getProcessedImage(bgImage, '3000x0') : '';
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
    <Container width="full" bgColor="black" pb={10} className="relative -mt-100 overflow-hidden">
      <div
        className="relative pb-[7vw] bg-black-true"
        style={{ background: `url('${bg}') center center / contain no-repeat` }}
      >
        <div className="cc bg-transparent relative z-10">
          <div className="relative rs-pt-9" ref={introRef}>
            <AnimateInView delay={0.2} animation="slideUp">
              <Heading font="druk" className="fluid-type-8 mb-0 3xl:gc-splash xl:max-w-[47%] pb-[23vw] 2xl:whitespace-pre-line" leading="none">
                Progress<br />
                is nothing<br />
                without purpose.
              </Heading>
            </AnimateInView>
            <m.div
              className="hidden md:block w-2 absolute top-0 left-1/2 -ml-1 h-full origin-top bg-current"
              style={{ scaleY }}
            />
          </div>
          <AnimateInView delay={0.2} animation="slideUp">
            <div className="lg:w-4/5 2xl:w-3/5 mx-auto rs-pt-5">
              <Paragraph font="serif" weight="semibold" variant="overview" leading="snug" className="max-w-700 mx-auto">
                Stanford, at its heart, is a community of changemakers.
                Learn more about the people driving us toward a brighter tomorrow.
              </Paragraph>
            </div>
          </AnimateInView>
        </div>
        <div className="absolute top-0 h-[50vw] 2xl:h-[40vw] 3xl:h-[35vw] w-full bg-gradient-to-b from-gc-black via-[#35459A]" />
        <div className="absolute bottom-0 h-[20vw] 2xl:h-[15vw] w-full bg-gradient-to-t from-gc-black to-black-true" />
      </div>
      <Container bgColor="black">{children}</Container>
    </Container>
  );
};
