import { useRef, useState } from 'react';
import { cnb } from 'cnbuilder';
import { useScroll, m, useTransform } from 'framer-motion';
import { AnimateInView } from '../Animate';
import { Container } from '../Container';
import { Grid } from '../Grid';
import { Heading, Paragraph, Text } from '../Typography';
import { getProcessedImage } from '@/utilities/getProcessedImage';

type BubbleProps = {
  type?: 'me' | 'them';
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

const Bubble = ({
  type = 'them', delay, children, className,
}: BubbleProps) => {

  return (
    <AnimateInView animation="zoomIn" delay={delay} duration={0.2} className={className}>
      <Text
        color="white"
        leading="display"
        className={cnb(
          'rounded-[2rem] bg-black pt-9 pb-8 px-16 w-fit text-18 max-w-[80%]',
          type === 'me' ? 'bg-digital-blue mr-0 ml-auto' : 'bg-black',
        )}
      >
        {children}
      </Text>
    </AnimateInView>
  );
};

const BubbleButton = ({
  children, className, ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    type="button"
    className={cnb(
      'block mr-0 ml-auto w-fit text-left',
      className,
    )}
    {...props}
  >
    <Bubble type="me">
      {children}
    </Bubble>
  </button>
);

export const ChatbotStory = () => {
  const bgImage = `url('${getProcessedImage('https://a-us.storyblok.com/f/1005200/2560x1708/a3b9a247de/bellsbooks_0127.jpg', '2000x0')}')`;
  const gradient = 'linear-gradient(0deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.03)), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(164.96deg, rgba(171, 171, 171, 0.1) 20.36%, rgba(0, 0, 0, 0.1) 66.37%)';

  return (
    <Container
      width="full"
      bgColor="black"
      style={{
        backgroundImage: bgImage,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      className="rs-py-8 overflow-hidden"
    >
      <div
        className="relative w-450 h-800 mx-auto backdrop-blur-xl rounded-[4rem] overflow-hidden"
        style={{ background: gradient }}
      >
        <div className="fixed top-0 h-90 w-full z-10 bg-white/10">
          <img
            src={getProcessedImage('https://a-us.storyblok.com/f/1005200/2560x1708/08583a88a2/neukom_profjulianabidadanure_1464.jpg', '100x100')}
            alt=""
            className="rounded-full w-50 h-50 ml-30 mt-20"
          />
        </div>
        <div className="absolute overflow-y-scroll top-90 p-30 z-0 min-h-[64rem] max-h-[64rem] overflow-hidden">
          <Bubble delay={0.5}>
            Greetings my human friend!
          </Bubble>
          <Bubble delay={1.5} className="mt-10">
            What brings you to me today? 😀
          </Bubble>
          <Bubble type="me" delay={2.5} className="mt-30">
            Hi Beep Boop Beep 👋
          </Bubble>
          <Bubble type="me" delay={3.5} className="mt-10">
            I heard that Stanford has made a breakthrough in AI research
          </Bubble>
          <Bubble type="me" delay={4.5} className="mt-10">
            Can you tell me more?
          </Bubble>
          <Bubble delay={5.5} className="mt-30">
            Beep boop self destructing in 10 seconds...
          </Bubble>
          <Bubble delay={6.5} className="mt-10">
            Hmm...
          </Bubble>
          <Bubble delay={7.5} className="mt-10">
            Just kidding! 😂
          </Bubble>
          <Bubble delay={8.5} className="mt-10">
            You’re asking the right bot 🤖
          </Bubble>
          <Bubble delay={9.5} className="mt-10">
            Do me a favor. Could you pick which topic you’re interested in? 👇
          </Bubble>
          <BubbleButton className="mt-30">
            1. How AI transforms the future of learning
          </BubbleButton>
          <BubbleButton className="mt-10">
            2. How AI harnesses satellite imagery to help fight poverty
          </BubbleButton>
        </div>
        <div className="fixed bottom-0 h-70 w-full z-10 backdrop-blur-xl">

        </div>
      </div>
    </Container>
  );
};
