'use client';

import { useRef } from 'react';
import { useScroll, useSpring, m } from 'framer-motion';
import { Container } from '../Container';
import { Grid } from '../Grid';
import { Heading, Paragraph, Text } from '../Typography';
import { AnimateInView } from '../Animate';
import { getProcessedImage } from '@/utilities/getProcessedImage';


export const HomepageSplitHero = () => {
  const bg = getProcessedImage('https://a-us.storyblok.com/f/1005200/2100x2028/bef2e6a13e/masthead-top-structured.jpg', '3000x0');
  const introRef = useRef<HTMLDivElement>(null);

  return (
    <Container width="full" bgColor="black" className="relative overflow-hidden">
      <div
        className="relative pb-[27vw] bg-black-true pt-[18vw] xl:pt-[15vw] bg-no-repeat bg-cover [background-position-y:100px]"
        style={{ backgroundImage: `url('${bg}')` }}
      >
        <Heading as="h1" srOnly>Homepage</Heading>
        <div className="absolute top-0 h-[50vw] 2xl:h-[40vw] 3xl:h-[35vw] w-full bg-gradient-to-b from-[#191e3e] via-[#263588] via-40% to-transparent" />
        <div className="relative">
          <div className="relative cc">
            <Grid md={2} className="relative w-[70vw] mx-auto 4xl:w-[85vw] 4xl:max-w-[140rem]">
              <div className="relative w-full">
                <img
                  src={getProcessedImage('https://a-us.storyblok.com/f/1005200/1390x1390/cb35b9488b/frame-96.jpg', '700x700')}
                  alt=""
                  loading="eager"
                  className="w-full h-full object-cover"
                />
                {/* <div className="absolute -top-[7vw] -right-[1vw] w-[44vw] 4xl:w-[106rem]">
                  <Text font="serif" weight="semibold" size="f5" leading="none" italic>
                    How will we
                  </Text>
                  <Text font="druk" size="hero" leading="none">
                    come together
                  </Text>
                </div> */}
              </div>
              <div className="relative w-full">
                <img
                  src={getProcessedImage('https://a-us.storyblok.com/f/1005200/1390x1390/45d9a3d22a/frame-97.jpg', '700x700')}
                  alt=""
                  loading="eager"
                  className="w-full h-full object-cover"
                />
                {/* <div className="absolute -bottom-100 -right-[6vw] w-[36vw] 4xl:w-[120%] text-right">
                  <Text font="serif" weight="semibold" size="f5" leading="none" italic>
                    all in service of
                  </Text>
                  <Text font="druk" size="hero" leading="none">
                    Tomorrow?
                  </Text>
                </div> */}
              </div>
            </Grid>
          </div>
          <div className="absolute w-full top-0 left-0">
            <Grid md={2}>
              <div className="relative -top-[6.5vw] right-0 justify-self-end">
                <Text font="serif" weight="semibold" size="f5" leading="none" italic>
                  How will we
                </Text>
                <Text font="druk" size="hero" leading="none">
                  come together
                </Text>
              </div>
              <div className="relative -right-[7vw] top-[27vw] 4xl:top-[57rem] type-4 xl:type-5 justify-self-start">
                <Text font="serif" weight="semibold" leading="none" align="right" italic>
                  all in service of
                </Text>
                <Text font="druk" size="hero" leading="none" align="right">
                  Tomorrow?
                </Text>
              </div>
            </Grid>
          </div>
        </div>
      </div>
      <Container bgColor="black" py={7} className="relative z-10 bg-gradient-to-t from-gc-black to-[#020002]">
          <AnimateInView delay={0.2} animation="slideUp">
            <div className="mx-auto max-w-1200">
              <Heading size="f7" weight="normal" className="rs-mb-6">
                <span className="italic">We’re</span> all in this <span className="italic">together</span>.
              </Heading>
              <div className="max-w-1200 rs-ml-0">
                <Paragraph size={2} weight="normal" leading="snug" className="max-w-1000 ml-0 mr-auto">
                  Sustaining a thriving planet. Accelerating solutions and empowering the next generation of leaders.
                </Paragraph>
                <Paragraph size={2} weight="normal" leading="snug" className="max-w-1000 ml-0 mr-auto">
                  Meet your community of changemakers, explore what you’re passionate about, and join the conversation.
                </Paragraph>
              </div>
            </div>
          </AnimateInView>
        </Container>
    </Container>
  );
};
