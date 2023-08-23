'use client';
import { useRef } from 'react';
import { useScroll, m, useTransform } from 'framer-motion';
import { scroll } from 'framer-motion/dom';
import { AnimateInView } from '../Animate';
import { Container } from '../Container';
import { Grid } from '../Grid';
import { Heading, Paragraph, Text } from '../Typography';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import { getMaskedAsset } from '@/utilities/getMaskedAsset';

export const VideoScrollStory = () => {
  // const contentRef = useRef<HTMLDivElement>(null);
  // const videoRef = useRef<HTMLVideoElement>(null);
  // const video = videoRef.current;
  // video?.pause();

  // // Scrub through the video on scroll
  // scroll((progress) => {
  //   if (video?.readyState) {
  //     video.currentTime = video?.duration * progress;
  //   }
  // });

  return (
    <Container width="full" className="relative" bgColor="black">
      <div className="sticky top-0 h-screen w-full">
        {/* <m.img
          loading="eager"
          src={getProcessedImage('https://a-us.storyblok.com/f/1005200/2499x1667/53d21f92bf/farm_1208.jpg', '2000x0')}
          className="relative object-cover w-full h-full"
          style={{ opacity: animateOpacity, scale: animateScale }}
          alt="Something alt"
        /> */}
        <video
          // ref={videoRef}
          playsInline
          autoPlay
          preload="auto"
          muted
          loop
          aria-label="Background Video"
          className="block w-full h-full object-cover"
        >
          <source src={getMaskedAsset('https://a-us.storyblok.com/f/1005200/x/80ddd8341f/starloop.webm')} type="video/webm" />
          <source src={getMaskedAsset('https://a-us.storyblok.com/f/1005200/x/1a881ffc0a/starloop.mp4')} type="video/mp4" />
          <p>Your browser does not support HTML video.</p>
        </video>
        {/* <video
          // ref={videoRef}
          autoPlay
          muted
          playsInline
          preload="auto"
          loop
          src={getMaskedAsset('https://a-us.storyblok.com/f/1005200/x/80ddd8341f/starloop.webm')}
          className="block w-full h-full object-cover"
        /> */}
        <div className="absolute top-0 r-0 w-full h-full bg-robins-egg mix-blend-difference" />
        <div className="absolute top-0 r-0 w-full h-full bg-black mix-blend-difference" />
      </div>
      <div className="relative w-2/3 lg:w-1/3 mx-auto text-white z-10 rs-py-10">
        <section>
          <div className="w-[200%] -ml-[50%] mb-500">
            <Heading
              leading="tight"
              align="center"
              font="serif"
              weight="semibold"
              size={6}
              className="mb-02em"
            >
              Heading lorem ipsum
            </Heading>
            <Text align="center" size={2}>Subheading lorem ipsum</Text>
          </div>
          <Paragraph font="serif" className="text-white font-semibold text-30 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget pulvinar ipsum, ut sodales odio.
            Cras dui ipsum, aliquet eget nibh ut, sollicitudin pharetra risus.
          </Paragraph>
          <Paragraph font="serif" className="text-white font-semibold text-30 mt-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget pulvinar ipsum, ut sodales odio.
          </Paragraph>
          <Paragraph font="serif" className="text-white font-semibold text-30 mt-500">
            Cras dui ipsum, aliquet eget nibh ut, sollicitudin pharetra risus.
          </Paragraph>
          <Paragraph font="serif" className="text-white font-semibold text-30 mt-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget pulvinar ipsum, ut sodales odio.
            Cras dui ipsum, aliquet eget nibh ut, sollicitudin pharetra risus.
          </Paragraph>
          <Paragraph font="serif" className="text-white font-semibold text-30 mt-500">
            Aliquam erat volutpat. Morbi posuere, elit vel faucibus mattis, orci nisl suscipit justo,
            vel maximus ante libero eget nibh. Maecenas non arcu a sapien maximus commodo.
            Aenean nec molestie leo. Aenean suscipit purus eget est dictum, vel tristique lectus fermentum.
            Curabitur imperdiet finibus volutpat.
          </Paragraph>
          <Paragraph font="serif" className="text-white font-semibold text-30 mt-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget pulvinar ipsum, ut sodales odio.
            Cras dui ipsum, aliquet eget nibh ut, sollicitudin pharetra risus.
          </Paragraph>
          <Paragraph font="serif" className="text-white font-semibold text-30 mt-500">
            Aliquam erat volutpat. Morbi posuere, elit vel faucibus mattis, orci nisl suscipit justo,
            vel maximus ante libero eget nibh. Maecenas non arcu a sapien maximus commodo.
            Aenean nec molestie leo. Aenean suscipit purus eget est dictum, vel tristique lectus fermentum.
            Curabitur imperdiet finibus volutpat.
          </Paragraph>
        </section>
      </div>
    </Container>
  );
};
