import React, { useRef, useState } from 'react';
import { m, useReducedMotion } from 'framer-motion';
import { Container } from '../Container';
import { Heading } from '../Typography';
import { skyGradient } from '../../utilities/gradients';
import { HeroIcon } from '../HeroIcon';
import { getProcessedImage } from '../../utilities/getProcessedImage';

export const HomepageHeroAlt = () => {
  const prefersReduceMotion = useReducedMotion();

  const lines: string[] = [
    'How will we',
    'come together',
    'to make the',
    'world better?',
  ];

  const fadeVariants = {
    visible: {
      opacity: 1,
      filter: 'saturate(100%)',
      transition: {
        duration: 1,
        delay: 0,
      },
    },
    hidden: {
      opacity: 0.2,
      filter: 'saturate(0%)',
    },
  };

  const parentVariants = {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        duration: 0.6,
        delay: 0.6,
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
      },
    },
  };

  const itemVariants = {
    visible: {
      y: 0,
      color: '#fff',
      opacity: 1,
      transition: {
        duration: 1,
        ease: 'circOut',
      },
    },
    hidden: {
      opacity: 0.3,
      y: '0.3em',
    },
  };

  const bgImage = getProcessedImage('https://a-us.storyblok.com/f/1005200/2048x1364/1f1c6c518c/dji_0160-hdr-1-2048x1364.webp');

  return (
    <Container
      width="full"
      className="su-bg-[#3074B0] su-sticky su-top-0 su-h-[300vh]"
      // style={{ backgroundImage: bgImage, backgroundSize: 'cover' }}
    >
      <div className="su-rs-pt-10 su-bg-[#3074B0]">
        <div className="su-relative su-w-full su-bg-[hsla(214,39%,50%,1)]">
          <div className="su-h-screen">
            <img
              alt=""
              src={getProcessedImage('https://a-us.storyblok.com/f/1005200/2048x1364/1f1c6c518c/dji_0160-hdr-1-2048x1364.webp')}
              className="su-block su-w-full su-h-full su-object-cover"
            />
          </div>
          <div className="su-absolute su-w-full su-h-full su-top-0 su-left-0 su-bg-gradient-to-b su-from-[#3074B0] su-via-[#3074B0]/40 su-via-20% su-to-40%" />
        </div>
      </div>
      <m.div variants={prefersReduceMotion ? undefined : parentVariants} initial="hidden" animate="visible">
        <Heading as="h1" size="f8" leading="none" font="druk" color="white" className="su-cc su-absolute su-top-0 su-mb-0 su-pt-120 md:su-pt-216 2xl:su-pt-228">
          {lines.map((text, index) => (
            <m.div variants={prefersReduceMotion ? undefined : itemVariants} key={`line${index + 1}`}>
              {text}
            </m.div>
          ))}
        </Heading>
      </m.div>
    </Container>
  );
};
