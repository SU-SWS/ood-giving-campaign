import { useRef, useState, useEffect } from 'react';
import { cnb } from 'cnbuilder';
import Link from 'next/link';
import { AnimateInView } from '../Animate';
import { Container } from '../Container';
import { FlexBox } from '../FlexBox';
import { Heading, Text } from '../Typography';
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
  bubbleClassName?: string;
};

const BubbleButton = ({
  children, onClick, className, bubbleClassName, ...props
}: BubbleButtonProps) => (
  <button
    type="button"
    onClick={onClick}
    className={cnb(
      'block mr-0 ml-auto w-fit text-left',
      className,
    )}
  >
    <Bubble type="me" className={bubbleClassName} {...props}>
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
  <div className={cnb('relative w-300 rounded-[2rem] overflow-hidden', className)}>
    <img
      src={getProcessedImage(imageSrc, '300x150')}
      alt=""
      className=""
      loading="eager"
    />
    <div className="bg-black pt-8 pb-12 px-14">
      <Heading as="h3" color="white" font="sans" size="base" leading="tight" className="mb-03em">
        <Link target="_blank" href={href} prefetch={false} className="stretched-link font-semibold text-white text-19 leading-none hocus:text-white">
          {heading}
        </Link>
      </Heading>
      <Text className="text-13">{linkText}</Text>
    </div>
  </div>
);

export const ChatbotStory = () => {
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
      if (!isScrolling && intervalCount < 20 && wrapper.scrollHeight > 651) {
        wrapper.scrollTo(0, wrapper.scrollHeight);
        setIntervalCount(prevCount => prevCount + 1);
      } else if (intervalCount >= 20) {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
      wrapper.removeEventListener('scroll', handleScrollStart);
      wrapper.removeEventListener('scrollend', handleScrollEnd);
    };
  }, [isScrolling, intervalCount, wrapperRef.current?.scrollHeight]);

  const [q1Choice, setQ1Choice] = useState<'learning' | 'poverty' | null>(null);
  const bgImage = `url('${getProcessedImage(
    q1Choice === 'learning' ? 'https://a-us.storyblok.com/f/1005200/2560x1708/a3b9a247de/bellsbooks_0127.jpg' : 'https://a-us.storyblok.com/f/1005200/4000x2250/0c54166208/vlad-hilitanu-pt7qzb4zlww-unsplash.jpg',
    '2000x0',
  )}')`;

  return (
    <Container
      width="full"
      bgColor="black"
      style={{
        backgroundImage: bgImage,
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      className="rs-py-8 overflow-hidden transition-all duration-1000"
    >
      <div
        className="relative w-450 h-800 mx-auto backdrop-blur-lg rounded-[4rem] overflow-hidden"
        style={{ background: gradient }}
        ref={ref}
      >
        <FlexBox alignItems="center" className="relative h-90 w-full z-10 bg-white/10 py-20 px-30">
          <img
            src={getProcessedImage('https://a-us.storyblok.com/f/1005200/2560x1708/08583a88a2/neukom_profjulianabidadanure_1464.jpg', '100x100')}
            alt=""
            className="rounded-full w-50 h-50 ml-30"
            loading="lazy"
          />
          <div className="ml-10">
            <div className="text-19 leading-none font-semibold">Beep Boop Beep</div>
            <div className="inline-block text-16 leading-none text-black-20">Online</div>
            <div className="inline-block w-8 h-8 bg-green-400 rounded-full ml-6" />
          </div>
        </FlexBox>
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
          <BubbleButton
            className="mt-30"
            bubbleClassName={q1Choice !== 'learning' ? '*:transition-colors *:hocus:border-solid *:border *:border-dashed *:!border-white *:!bg-transparent' : ''}
            delay={10.5}
            onClick={() => setQ1Choice('learning')}
          >
            1. How AI transforms the future of learning
          </BubbleButton>
          <BubbleButton
            className="mt-10"
            bubbleClassName={q1Choice !== 'poverty' ? '*:transition-colors *:hocus:border-solid *:border *:border-dashed *:!border-white *:!bg-transparent' : ''}
            delay={10.5}
            onClick={() => setQ1Choice('poverty')}
          >
            2. How AI harnesses satellite imagery to help fight poverty
          </BubbleButton>
          {q1Choice && (
            <div className="mt-30">
              <Bubble>
                {q1Choice === 'learning' ? 'Great choice 😊' : 'Sure thing 😎'}
              </Bubble>
              <Bubble delay={1} className="mt-10">
                I believe this is what you’re looking for
              </Bubble>
              <AnimateInView delay={2} animation="bubble">
                <BubbleLink
                  href={q1Choice === 'learning' ? '/stories/poc-bookshelf-idea' : '/stories/harnessing-satellite-imagery-ai-to-help-fight-poverty'}
                  imageSrc={
                    q1Choice === 'learning'
                    ? 'https://a-us.storyblok.com/f/1005200/5464x8192/b7ce105227/greenlibrary_0533_v1.jpg'
                    : 'https://a-us.storyblok.com/f/1005200/2515x1677/0873de1701/rumseymapcenter_0659.jpg'
                  }
                  heading={q1Choice === 'learning' ? 'How AI transforms the future of learning' : 'How AI harnesses satellite imagery to help fight poverty'}
                  linkText="giving.stanford.edu"
                  className="mt-10"
                />
              </AnimateInView>
            </div>
          )}
        </div>
        <div className="fixed bottom-0 h-70 w-full z-10 backdrop-blur-xl">

        </div>
      </div>
    </Container>
  );
};
