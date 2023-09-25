'use client';

import { useRef } from 'react';
import { useScroll, useSpring, m } from 'framer-motion';
import { CtaLink } from '../Cta';
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
        className="relative pb-[25vw] bg-black-true pt-[17vw] bg-no-repeat bg-cover [background-position-y:100px]"
        style={{ backgroundImage: `url('${bg}')` }}
      >
        <div className="absolute top-0 h-[50vw] 2xl:h-[40vw] 3xl:h-[35vw] w-full bg-gradient-to-b from-[#191e3e] via-[#263588] via-40% to-transparent" />
        <div className="cc">
          <Grid md={2} className="relative w-4/5 mx-auto">
            <div className="relative">
              <img
                src={getProcessedImage('https://a-us.storyblok.com/f/1005200/1390x1390/cb35b9488b/frame-96.jpg', '700x700')}
                alt=""
                loading="eager"
                className="w-full h-full object-cover"
              />
              <div className="absolute -top-160 -left-[9vw] w-[140%]">
                <Text font="serif" weight="semibold" size="f5" italic>
                  How will we
                </Text>
                <Text font="druk" weight="semibold" size="f8">
                  come together
                </Text>
              </div>
            </div>
            <div>
              <img
                src={getProcessedImage('https://a-us.storyblok.com/f/1005200/1390x1390/45d9a3d22a/frame-97.jpg', '700x700')}
                alt=""
                loading="eager"
                className="w-full h-full object-cover"
              />
              <div className="absolute -bottom-100 -right-[6vw] w-[120%] text-right">
                <Text font="serif" weight="semibold" size="f5" italic>
                  all in service of
                </Text>
                <Text font="druk" weight="semibold" size="f8">
                  Tomorrow?
                </Text>
              </div>
            </div>
          </Grid>
        </div>
      </div>
      <Container bgColor="black" py={7} className="relative z-10 bg-gradient-to-t from-gc-black to-[#020002]">
          <AnimateInView delay={0.2} animation="slideUp">
            <div className="mx-auto max-w-1000">
              <Heading size="f6" weight="normal">
                <span className="italic">We’re</span> all in this <span className="italic">together</span>.
              </Heading>
              <Paragraph variant="overview" weight="normal" leading="snug" className="max-w-1000 mx-auto">
                Sustaining a thriving planet.  Accelerating solutions and empowering the next generation of leaders.
              </Paragraph>
              <Paragraph variant="overview" weight="normal" leading="snug" className="max-w-1000 mx-auto">
                Meet your community of changemakers, explore what you’re passionate about, and join the conversation.
              </Paragraph>
            </div>
          </AnimateInView>
        </Container>
    </Container>
  );
};
