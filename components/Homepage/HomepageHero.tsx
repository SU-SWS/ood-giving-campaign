'use client';
import { useRef, useState } from 'react';
import {
  m, useReducedMotion, useScroll, useTransform, useSpring,
} from 'framer-motion';
import { Container } from '../Container';
import { FlexBox } from '../FlexBox';
import { Heading, Text } from '../Typography';
import { HeroIcon } from '../HeroIcon';
import { OnPurpo, Ose } from '../Logo';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import { getMaskedAsset } from '@/utilities/getMaskedAsset';

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

  const { scrollYProgress: onPurposeProgress } = useScroll({
    target: heroRef,
    offset: ['0', '40vh'],
  });
  const onPurposeSpring = useSpring(onPurposeProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const onPurposeY = useTransform(onPurposeSpring, [0, 1], ['0%', '10%']);

  return (
    <div ref={heroRef} className="relative w-full bg-gc-sky overflow-hidden">
      <div>
        <Container className="h-100 md:h-200" />
        <div className="relative w-full bg-gc-sky -mb-1 2xl:max-h-900 3xl:overflow-hidden">
          <div className="aspect-w-1 aspect-h-1 lg:aspect-w-16 lg:aspect-h-9 bg-gc-sky">
            <video
              ref={videoRef}
              playsInline
              autoPlay={!prefersReduceMotion}
              muted
              loop
              aria-label="Background Video"
              poster={getProcessedImage('https://a-us.storyblok.com/f/1005200/1280x674/bf8d340dbf/screenshot-2023-05-09-at-3-03-08-pm.png', '1280x676')}
              className="block w-full h-full object-cover"
            >
              <source src={getMaskedAsset('https://a-us.storyblok.com/f/1005200/x/bf77fd691a/stanford125-loop.webm')} type="video/webm" />
              <source src={getMaskedAsset('https://a-us.storyblok.com/f/1005200/x/17d1fcaa03/stanford125-loop.mp4')} type="video/mp4" />
              <p>Your browser does not support HTML video.</p>
            </video>
          </div>
          <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-gc-sky via-gc-sky/60 via-30% to-50%" />
        </div>
      </div>
      <m.div
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="cc absolute top-0 left-0 right-0 mb-0 pt-120 md:pt-216 2xl:pt-228 max-w-full"
      >
        <Heading as="h2" size="f8" leading="none" font="druk" color="white">
          {lines.map((text) => (
            <div key={text.substring(0, 2)}>
              {text}
            </div>
          ))}
        </Heading>
      </m.div>
      <m.div
        style={{ marginTop: onPurposeY }}
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 0.6, times: [0, 1], delay: 1.4 }}
        className="opacity-0 cc absolute top-[25rem] sm:top-300 md:top-400 lg:top-[28vw] 3xl:top-[45rem] left-0 right-0"
      >
        <FlexBox alignItems="center" justifyContent="center">
          <div className="h-[10vw] 2xl:h-[15rem]">
            <OnPurpo className="fill-white h-full mr-0" />
          </div>
          <m.div
            className="h-auto max-w-fit"
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
              className="group block text-white transition mx-auto"
            >
              <HeroIcon
                icon="play-outline"
                title="Play full video"
                className="type-5 fill-gc-black/70 group-hocus:fill-digital-red mx-auto"
              />
              <Text weight="bold" color="white" align="center" size={1} className="hidden sm:block">
                Play video
              </Text>
            </button>
          </m.div>
          <div className="h-[10vw] 2xl:h-[15rem]">
            <Ose className="fill-white h-full -ml-2" />
          </div>
        </FlexBox>
      </m.div>
      <button
        type="button"
        onClick={toggleVideo}
        className="w-fit group text-white absolute bottom-[4%] left-20 sm:left-30 md:left-50 hocus:text-white transition"
      >
        <HeroIcon
          icon={isPlaying ? 'pause' : 'play'}
          className="inline-block type-3 fill-gc-black/70 group-hocus:fill-digital-red mr-02em"
        />
        <Text as="span" variant="card" weight="semibold">
          {`${isPlaying ? 'Pause' : 'Play'} background video`}
        </Text>
      </button>
    </div>
  );
};
