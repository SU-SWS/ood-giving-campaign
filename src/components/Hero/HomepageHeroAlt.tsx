import React from 'react';
import {
  m, useScroll, useTransform,
} from 'framer-motion';
import { Container } from '../Container';
import { Heading } from '../Typography';
import { getProcessedImage } from '../../utilities/getProcessedImage';

export const HomepageHeroAlt = () => {
  const { scrollYProgress } = useScroll();
  // const progress = useTransform(scrollYProgress, [0, 0.005, 0.015, 0.020], [1, 1, 1, 0.4]);
  // const progress2 = useTransform(scrollYProgress, [0.020, 0.025, 0.045, 0.05], [0.4, 1, 1, 0.4]);
  // const progress3 = useTransform(scrollYProgress, [0.05, 0.055, 0.075, 0.08], [0.4, 1, 1, 0.4]);
  // const progress4 = useTransform(scrollYProgress, [0.08, 0.085, 0.105, 0.11], [0.4, 1, 1, 0.4]);

  const progress = useTransform(scrollYProgress, [0, 0.02, 0.025, 0.15], [1, 1, 0.5, 0]);
  const progress2 = useTransform(scrollYProgress, [0.025, 0.03, 0.05, 0.055, 0.15], [0.4, 1, 1, 0.5, 0]);
  const progress3 = useTransform(scrollYProgress, [0.055, 0.06, 0.08, 0.085, 0.15], [0.4, 1, 1, 0.5, 0]);
  const progress4 = useTransform(scrollYProgress, [0.085, 0.09, 0.12, 0.15], [0.5, 1, 1, 0]);
  const imageZoom = useTransform(scrollYProgress, [0, 0.14], [1, 1.4]);

  return (
    <Container
      width="full"
      className="su-bg-[#3074B0] su-sticky su-top-0 su-h-[600vh]"
      // style={{ backgroundImage: bgImage, backgroundSize: 'cover' }}
    >
      <div className="su-pt-300 su-bg-[#3074B0]">
        <div className="su-relative su-w-full su-bg-[hsla(214,39%,50%,1)]">
          <m.div className="su-h-screen" style={{ scale: imageZoom }}>
            <m.img
              alt=""
              src={getProcessedImage('https://a-us.storyblok.com/f/1005200/2048x1364/1f1c6c518c/dji_0160-hdr-1-2048x1364.webp')}
              className="su-block su-w-full su-h-full su-object-cover"
            />
          </m.div>
          <m.div style={{ scale: imageZoom }} className="su-absolute su-w-full su-h-full su--top-1 su-left-0 su-bg-gradient-to-b su-from-[#3074B0] su-via-[#3074B0]/40 su-via-20% su-to-40%" />
        </div>
      </div>
      <div>
        <Heading as="h1" size="f8" leading="none" font="druk" color="white" className="su-cc su-absolute su-top-0 su-mb-0 su-pt-120 md:su-pt-216 2xl:su-pt-228">
          <m.div style={{ opacity: progress }}>How will we</m.div>
          <m.div style={{ opacity: progress2 }}>come together</m.div>
          <m.div style={{ opacity: progress3 }}>to make the</m.div>
          <m.div style={{ opacity: progress4 }}>world better?</m.div>
        </Heading>
      </div>
    </Container>
  );
};
