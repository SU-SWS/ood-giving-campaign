import React, { useRef, useState } from 'react';
import { m, useReducedMotion } from 'framer-motion';
import { Container } from '../Container';
import { Heading } from '../Typography';
import { darkMesh5 } from '../../utilities/gradients';
import { HeroIcon } from '../HeroIcon';
import { getProcessedImage } from '../../utilities/getProcessedImage';
import { getMaskedAsset } from '../../utilities/getMaskedAsset';

export const HomepageHero = () => {
  const prefersReduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(!prefersReduceMotion);

  const lines: string[] = [
    'Here and now',
    'is where we',
    'make the',
    'world better.',
    'On purpose.',
  ];

  const fadeVariants = {
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0,
      },
    },
    hidden: {
      opacity: 0,
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
      WebkitTextStroke: '0',
      color: '#fff',
      // opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'circOut',
      },
    },
    hidden: {
      // opacity: 0,
      WebkitTextStroke: '2px #fff',
      color: 'rgba(255, 255, 255, 0.1)',
      y: '0.3em',
    },
  };

  // Toggle the video's play/pause state and update isPlaying state
  const toggleVideo = () => {
    const videoElement = videoRef.current;

    if (videoElement) {
      if (videoElement.paused) {
        videoElement.play();
        setIsPlaying(true);
      } else {
        videoElement.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <Container width="full" bgColor="black" className="su-relative">
      <div className="">
        <m.div
          variants={prefersReduceMotion ? undefined : fadeVariants}
          initial="hidden"
          animate="visible"
        >
          <Container style={{ backgroundImage: darkMesh5 }} className="su-bg-saa-black su-h-[34.3rem] md:su-h-[56.2rem] lg:su-h-[71.5rem] 2xl:su-h-[77.9rem] su-bg-no-repeat su-bg-[center_top_-2vw] 2xl:su-bg-top" />
        </m.div>
        <div className="su-relative su-w-full su-bg-saa-black su--mb-1">
          <div className="su-aspect-w-1 su-aspect-h-1 md:su-aspect-w-16 md:su-aspect-h-9">
            <video
              ref={videoRef}
              playsInline
              autoPlay={!prefersReduceMotion}
              muted
              loop
              aria-label="Background Video"
              poster={getProcessedImage('https://a-us.storyblok.com/f/1005200/1851x1041/e7319575a3/record-poster.jpg', '1920x1080')}
              className="su-block su-w-full su-h-full su-object-cover"
            >
              <source src={getMaskedAsset('https://a-us.storyblok.com/f/1005200/x/a3e3e04cdd/record-compressed.webm')} type="video/webm" />
              <source src={getMaskedAsset('https://a-us.storyblok.com/f/1005200/x/e36a5877cf/record-compressed.mp4')} type="video/mp4" />
              <p>Your browser does not support HTML video.</p>
            </video>
          </div>
          <div className="su-absolute su-w-full su-h-full su-top-0 su-left-0 su-bg-gradient-to-b su-from-saa-black su-via-saa-black/70 su-via-30% su-to-80%" />
          <button
            type="button"
            onClick={toggleVideo}
            className="su-text-white/50 su-absolute su-bottom-[7%] su-left-[50%] su-translate-x-[-50%] su-type-6 hocus:su-text-white su-transition"
          >
            <HeroIcon
              icon={isPlaying ? 'pause' : 'play'}
              title={`${isPlaying ? 'Pause' : 'Play'} background video`}
            />
          </button>
        </div>
      </div>
      <m.div variants={prefersReduceMotion ? undefined : parentVariants} initial="hidden" animate="visible">
        <Heading as="h1" size={9} leading="none" font="druk" color="white" className="su-cc su-absolute su-top-0 su-mb-0 su-pt-120 md:su-pt-216 2xl:su-pt-228">
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
