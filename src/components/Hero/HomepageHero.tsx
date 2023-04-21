/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef } from 'react';
import { m } from 'framer-motion';
import { Container } from '../Container';
import { Heading } from '../Typography';
import { darkMesh5 } from '../../utilities/gradients';

export const HomepageHero = () => {
  const lines: string[] = [
    'Here and now',
    'is where we',
    'make the',
    'world better.',
    'On purpose.',
  ];

  const parentVariants = {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        duration: 1,
        staggerChildren: 0.8,
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
      opacity: 1,
      transform: 'translateY(0)',
      WebkitTextStroke: '0',
      color: '#fff',
      transition: {
        duration: 0.5,
      },
    },
    hidden: {
      opacity: 1,
      WebkitTextStroke: '2px #ddd',
      color: 'rgba(255, 255, 255, 0)',
      transform: 'translateY(0.3em)',
    },
  };

  const videoRef = useRef<HTMLVideoElement>(null);
  const toggleVideo = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <Container width="full" className="su-relative">
      <Container pt={10} style={{ backgroundColor: '#2F2D29', backgroundImage: darkMesh5 }} className="su-bg-no-repeat su-bg-[center_top_-27rem]">
        <Heading as="h1" size={9} leading="none" font="druk" className="su-z-20 su-relative su-mb-0">
          <m.div
            variants={parentVariants}
            initial="hidden"
            animate="visible"
          >
            {lines.map((text, index) => (
              <m.div variants={itemVariants} key={`line${index + 1}`}>
                {text}
              </m.div>
            ))}
          </m.div>
        </Heading>
      </Container>
      <div className="su-relative su-z-10 su-h-[100vw] md:su-h-600 xl:su-h-[57vw] su-w-full">
        <video ref={videoRef} playsInline autoPlay muted loop aria-label="Background Video" className="su-w-full su-h-full su-mt-[-9rem] lg:su-mt-[-20rem] 2xl:su-mt-[-23rem] su-object-cover">
          <source src="https://a-us.storyblok.com/f/1005200/x/e36a5877cf/record-compressed.mp4" type="video/mp4" />
        </video>
        <div className="su-absolute su-w-full su-h-full su-top-0 su-left-0 su-bg-black-true/40" />
        <button type="button" onClick={toggleVideo} className="su-text-white su-absolute su-top-[50%] su-left-[50%]">Hi</button>
      </div>
    </Container>
  );
};
