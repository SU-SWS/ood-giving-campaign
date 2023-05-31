import React, { useRef, useState } from 'react';
import { m, useReducedMotion } from 'framer-motion';
import { Container } from '../Container';
import { FlexBox } from '../FlexBox';
import { Heading } from '../Typography';
import { HeroIcon } from '../HeroIcon';
import { OnPurpo, Ose } from '../Logo';
import { getProcessedImage } from '../../utilities/getProcessedImage';
import { getMaskedAsset } from '../../utilities/getMaskedAsset';

export const HomepageHero = () => {
  const prefersReduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(!prefersReduceMotion);

  const lines: string[] = [
    'How will we',
    'come together',
    'to make the',
    'world better?',
  ];

  const parentVariants = {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        duration: 0.3,
        delay: 0.5,
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
      color: '#fff',
      transition: {
        duration: 0.5,
        ease: 'circOut',
      },
    },
    hidden: {
      color: 'rgba(255, 255, 255, 0.4)',
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
    <Container width="full" className="su-relative su-bg-[#4287BD]">
      <div>
        <Container className="su-h-100 md:su-h-200" />
        <div className="su-relative su-w-full su-bg-[#4287BD] su--mb-1">
          <div className="su-aspect-w-1 su-aspect-h-1 md:su-aspect-w-16 md:su-aspect-h-9">
            <video
              ref={videoRef}
              playsInline
              autoPlay={!prefersReduceMotion}
              muted
              loop
              aria-label="Background Video"
              poster={getProcessedImage('https://a-us.storyblok.com/f/1005200/1280x674/bf8d340dbf/screenshot-2023-05-09-at-3-03-08-pm.png', '1280x676')}
              className="su-block su-w-full su-h-full su-object-cover"
            >
              <source src={getMaskedAsset('https://a-us.storyblok.com/f/1005200/x/bf77fd691a/stanford125-loop.webm')} type="video/webm" />
              <source src={getMaskedAsset('https://a-us.storyblok.com/f/1005200/x/17d1fcaa03/stanford125-loop.mp4')} type="video/mp4" />
              <p>Your browser does not support HTML video.</p>
            </video>
          </div>
          <div className="su-absolute su-w-full su-h-full su-top-0 su-left-0 su-bg-gradient-to-b su-from-[#4287BD] su-via-[#4287BD]/60 su-via-30% su-to-50%" />
          <button
            type="button"
            onClick={toggleVideo}
            className="su-text-white/50 su-absolute su-bottom-[7%] su-left-[50%] su-translate-x-[-50%] su-type-5 hocus:su-text-white su-transition"
          >
            <HeroIcon
              icon={isPlaying ? 'pause' : 'play'}
              title={`${isPlaying ? 'Pause' : 'Play'} background video`}
            />
          </button>
        </div>
      </div>
      <m.div
        variants={prefersReduceMotion ? undefined : parentVariants}
        initial="hidden"
        animate="visible"
        className="su-cc su-absolute su-top-0 su-left-0 su-right-0 su-mb-0 su-pt-120 md:su-pt-216 2xl:su-pt-228 su-max-w-full"
      >
        <Heading as="h1" size="f8" leading="none" font="druk" color="white">
          {lines.map((text, index) => (
            <m.div variants={prefersReduceMotion ? undefined : itemVariants} key={`line${index + 1}`}>
              {text}
            </m.div>
          ))}
        </Heading>
      </m.div>
      <m.div
        variants={prefersReduceMotion ? undefined : parentVariants}
        initial="hidden"
        animate="visible"
        className="su-cc su-absolute su-top-200 md:su-top-300 2xl:su-top-400 su-left-0 su-right-0"
      >
        <FlexBox alignItems="center" justifyContent="center">
          <m.div className="su-h-60 md:su-h-100 lg:su-h-120 2xl:su-h-[15rem]">
            <OnPurpo className="su-fill-white su-h-full su-mr-0" />
          </m.div>
          <m.div className="su-h-auto">Play video</m.div>
          <m.div className="su-h-60 md:su-h-100 lg:su-h-120 2xl:su-h-[15rem]">
            <Ose className="su-fill-white su--ml-1 su-h-full" />
          </m.div>
        </FlexBox>
      </m.div>
    </Container>
  );
};
