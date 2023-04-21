import React, { useRef, useState } from 'react';
import { m, useReducedMotion } from 'framer-motion';
import { Container } from '../Container';
import { Heading } from '../Typography';
import { darkMesh5 } from '../../utilities/gradients';
import { HeroIcon } from '../HeroIcon';
import { getProcessedImage } from '../../utilities/getProcessedImage';
import { getMaskedAsset } from '../../utilities/getMaskedAsset';

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

  const shouldReduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(!shouldReduceMotion);

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
    <Container width="full" className="su-relative">
      <Container style={{ backgroundImage: darkMesh5 }} className="su-bg-black su-pt-120 md:su-pt-216 2xl:su-pt-228 su-bg-no-repeat su-bg-[center_top_-23vw] 2xl:su-bg-[center_top_-27rem]">
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
      <div className="su-relative su-z-10 su-h-[100vw] md:su-h-600 xl:su-h-[57vw] su-w-full su-bg-black">
        <video
          ref={videoRef}
          playsInline
          autoPlay={!shouldReduceMotion}
          muted
          loop
          aria-label="Background Video"
          poster={getProcessedImage('https://a-us.storyblok.com/f/1005200/1851x1041/e7319575a3/record-poster.jpg', '1920x1080')}
          className="su-block su-w-full su-h-full su--mt-[9.4rem] md:su--mt-[14.4rem] lg:su--mt-[21rem] 2xl:su--mt-[23rem] su-object-cover"
        >
          <source src={getMaskedAsset('https://a-us.storyblok.com/f/1005200/x/a3e3e04cdd/record-compressed.webm')} type="video/webm" />
          <source src={getMaskedAsset('https://a-us.storyblok.com/f/1005200/x/e36a5877cf/record-compressed.mp4')} type="video/mp4" />
          <p>Your browser does not support HTML video.</p>
        </video>
        <div className="su-absolute su-w-full su-h-full su-top-0 su-left-0 su-bg-black-true/40" />
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
    </Container>
  );
};
