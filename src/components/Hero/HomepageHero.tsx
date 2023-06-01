import React, { useRef, useState } from 'react';
import {
  m, useReducedMotion, useScroll, useTransform,
} from 'framer-motion';
import { Container } from '../Container';
import { FlexBox } from '../FlexBox';
import { Heading, Text } from '../Typography';
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

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['0', '10vh'],
  });
  const animatedWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const marginAnimate = useTransform(scrollYProgress, [0, 1], ['0', '4vw']);

  return (
    <div ref={heroRef} className="su-relative su-w-full su-bg-gc-sky">
      <div>
        <Container className="su-h-100 md:su-h-200" />
        <div className="su-relative su-w-full su-bg-gc-sky su--mb-1 2xl:su-max-h-900 3xl:su-overflow-hidden">
          <div className="su-aspect-w-1 su-aspect-h-1 lg:su-aspect-w-16 lg:su-aspect-h-9 su-bg-gc-sky">
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
          <div className="su-absolute su-w-full su-h-full su-top-0 su-left-0 su-bg-gradient-to-b su-from-gc-sky su-via-gc-sky/60 su-via-30% su-to-50%" />
        </div>
      </div>
      <m.div
        animate={{ opacity: [0.5, 1, 1, 0] }}
        transition={{ duration: 1.6, times: [0, 0.2, 0.9, 1], delay: 0.3 }}
        className="su-cc su-opacity-50 su-absolute su-top-0 su-left-0 su-right-0 su-mb-0 su-pt-120 md:su-pt-216 2xl:su-pt-228 su-max-w-full"
      >
        <Heading as="h1" size="f8" leading="none" font="druk" color="white">
          {lines.map((text) => (
            <div key={text.substring(0, 2)}>
              {text}
            </div>
          ))}
        </Heading>
      </m.div>
      <m.div
        animate={{ opacity: [0, 1], scale: [prefersReduceMotion ? 1 : 0.7, 1], y: [prefersReduceMotion ? 0 : -100, 0] }}
        transition={{ duration: 0.6, times: [0, 1], delay: 1.8 }}
        className="su-opacity-0 su-cc su-absolute su-top-[25rem] sm:su-top-300 md:su-top-400 lg:su-top-[28vw] 3xl:su-top-[45rem] su-left-0 su-right-0"
      >
        <FlexBox alignItems="center" justifyContent="center">
          <div className="su-h-[10vw] 2xl:su-h-[15rem]">
            <OnPurpo className="su-fill-white su-h-full su-mr-0" />
          </div>
          <m.div
            className="su-h-auto su-max-w-fit"
            style={{
              width: animatedWidth,
              opacity: scrollYProgress,
              marginLeft: marginAnimate,
              marginRight: marginAnimate,
            }}
          >
            <button
              type="button"
              onClick={toggleVideo}
              className="su-block su-text-white hocus-visible:su-text-digital-red-light su-transition su-mx-auto"
            >
              <HeroIcon
                icon="play-outline"
                title="Play full video"
                className="su-type-5"
              />
            </button>
            <Text font="serif" weight="bold" color="white" align="center" italic className="su-hidden sm:su-block">
              play video
            </Text>
          </m.div>
          <div className="su-h-[10vw] 2xl:su-h-[15rem]">
            <Ose className="su-fill-white su-h-full su--ml-2" />
          </div>
        </FlexBox>
      </m.div>
      <button
        type="button"
        onClick={toggleVideo}
        className="su-text-white/50 su-absolute su-bottom-[6%] su-left-[50%] su-translate-x-[-50%] su-type-5 hocus:su-text-white su-transition"
      >
        <HeroIcon
          icon={isPlaying ? 'pause' : 'play'}
          title={`${isPlaying ? 'Pause' : 'Play'} background video`}
        />
      </button>
    </div>
  );
};
