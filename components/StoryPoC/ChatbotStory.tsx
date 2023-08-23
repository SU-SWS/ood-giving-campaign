import { useRef, useState, useEffect } from 'react';
import { cnb } from 'cnbuilder';
import {
  useScroll, m, useTransform, useInView,
} from 'framer-motion';
import Link from 'next/link';
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
    <AnimateInView animation="bubble" delay={delay} duration={0.2} className={className}>
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

type BubbleButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & BubbleProps & {
  onClick: (choice: string | null) => void;
};

const BubbleButton = ({
  children, onClick, className, ...props
}: BubbleButtonProps) => (
  <button
    type="button"
    onClick={onClick}
    className={cnb(
      'block mr-0 ml-auto w-fit text-left',
      className,
    )}
  >
    <Bubble type="me" {...props}>
      {children}
    </Bubble>
  </button>
);

type BubbleLinkProps = {
  imageSrc?: string;
  heading?: string;
  linkText?: string;
  href: string;
  className?: string;
};

export const BubbleLink = ({
  imageSrc, heading, linkText, href, className,
}: BubbleLinkProps) => (
  <Link href={href}>
    <img
      src={getProcessedImage(imageSrc, '100x100')}
      alt=""
      className="rounded-full w-50 h-50 ml-30 mt-20"
    />

  </Link>
);



export const ChatbotStory = () => {
  const bgImage = `url('${getProcessedImage('https://a-us.storyblok.com/f/1005200/2560x1708/a3b9a247de/bellsbooks_0127.jpg', '2000x0')}')`;
  const gradient = 'linear-gradient(0deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.03)), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(164.96deg, rgba(171, 171, 171, 0.1) 20.36%, rgba(0, 0, 0, 0.1) 66.37%)';
  const wrapperRef = useRef(null);
  const ref = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [intervalCount, setIntervalCount] = useState(0);

  useEffect(() => {
    const wrapper = wrapperRef.current;

    const handleScrollStart = () => {
      setIsScrolling(true);
    };

    const handleScrollEnd = () => {
      setIsScrolling(false);
    };

    wrapper.addEventListener('scroll', handleScrollStart);
    wrapper.addEventListener('scrollend', handleScrollEnd);

    const interval = setInterval(() => {
      if (!isScrolling && intervalCount < 10 && wrapper.scrollHeight > 640) {
        wrapper.scrollTo(0, wrapper.scrollHeight);
        console.log(wrapper.scrollHeight);
        setIntervalCount(prevCount => prevCount + 1);
      } else if (intervalCount >= 10) {
        clearInterval(interval); // Clear interval after 10 intervals
      }
    }, 1000);

    return () => {
      clearInterval(interval);
      wrapper.removeEventListener('scroll', handleScrollStart);
      wrapper.removeEventListener('scrollend', handleScrollEnd);
    };
  }, [isScrolling, intervalCount, wrapperRef.current?.scrollHeight]);

  const [q1choice, setQ1Choice] = useState<'learning' | 'poverty' | null>(null);

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
        ref={ref}
      >
        <div className="fixed top-0 h-90 w-full z-10 bg-white/10">
          <img
            src={getProcessedImage('https://a-us.storyblok.com/f/1005200/2560x1708/08583a88a2/neukom_profjulianabidadanure_1464.jpg', '100x100')}
            alt=""
            className="rounded-full w-50 h-50 ml-30 mt-20"
          />
          {/* <button onClick={scrollToBottom}>test</button> */}
        </div>
        <div className="absolute overflow-y-scroll top-90 p-30 z-0 max-h-[64rem] overflow-hidden" ref={wrapperRef}>
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
            Do me a favor. Could you pick which topic you’re interested in? <span className="animate-bounce inline-block">👇</span>
          </Bubble>
          <BubbleButton className="mt-30" delay={10.5} onClick={() => setQ1Choice('learning')}>
            1. How AI transforms the future of learning
          </BubbleButton>
          <BubbleButton className="mt-10" delay={10.5} onClick={() => setQ1Choice('poverty')}>
            2. How AI harnesses satellite imagery to help fight poverty
          </BubbleButton>
          {q1choice === 'learning' && (
            <Bubble>
              Choice 1
            </Bubble>
          )}
          {q1choice === 'poverty' && (
            <Bubble>
              Choice 2
            </Bubble>
          )}
        </div>
        <div className="fixed bottom-0 h-70 w-full z-10 backdrop-blur-xl">

        </div>
      </div>
    </Container>
  );
};
