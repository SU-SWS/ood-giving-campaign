'use client';
import { useRef, useState } from 'react';
import { cnb } from 'cnbuilder';
import { SbBlokData } from '@storyblok/react/rsc';
import {
  m, useScroll, useSpring, useTransform, SpringOptions, useWillChange,
} from 'framer-motion';
import { Container } from '../Container';
import { Grid, GridAlternating } from '../Grid';
import {
  Heading, Text, Paragraph, SrOnlyText,
} from '../Typography';
import { colorNameToHex } from '@/utilities/colorPalettePlugin';
import { FlexBox } from '../FlexBox';
import { AnimateInView } from '../Animate';
import { CtaButton } from '../Cta';
import { CreateBloks } from '../CreateBloks';

type ThemeSectionProps = {
  themeCardDiscovery?: SbBlokData[];
  themeCardCitizen?: SbBlokData[]
  themeCardAcceleration?: SbBlokData[];
  themeCardPlanet?: SbBlokData[];
};

export const ThemeSection = ({
  themeCardDiscovery,
  themeCardCitizen,
  themeCardAcceleration,
  themeCardPlanet,
}: ThemeSectionProps) => {
  const containerRef = useRef(null);
  const springSetting: SpringOptions = {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  };
  const willChange = useWillChange();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['-30vh', '-10px'],
  });
  const scrollYSpring = useSpring(scrollYProgress, springSetting);

  const { scrollYProgress: curveDownProgess } = useScroll({
    target: containerRef,
    offset: ['0', '300px'],
  });
  const curveDownSpring = useSpring(curveDownProgess, springSetting);

  const { scrollYProgress: rightLineSpringProgress } = useScroll({
    target: containerRef,
    offset: ['200px', '500px'],
  });
  const rightLineSpring = useSpring(rightLineSpringProgress, springSetting);

  const { scrollYProgress: leftLineSpringProgress } = useScroll({
    target: containerRef,
    offset: ['800px', '1100px'],
  });
  const leftLineSpring = useSpring(leftLineSpringProgress, springSetting);

  const { scrollYProgress: curveUpProgess } = useScroll({
    target: containerRef,
    offset: ['1000px', '1400px'],
  });
  const curveUpSpring = useSpring(curveUpProgess, springSetting);

  const [shouldAnimate, setShouldAnimate] = useState(true);
  const heightWrapper = useTransform(scrollYSpring, [0, 1], [shouldAnimate ? 143 : 1030, 1030]);
  const zoom = useTransform(scrollYSpring, [0, 1], [shouldAnimate ? 0.4 : 1, 1]);
  const spacing = useTransform(scrollYSpring, [0, 1], [shouldAnimate ? -30 : -300, -300]);
  const shiftUp = useTransform(scrollYSpring, [0, 1], [shouldAnimate ? 0 : -400, -400]);
  const opacityChange = useTransform(scrollYSpring, [0, 1], [shouldAnimate ? 0 : 1, 1]);

  // Bar below each theme heading width animation
  const discoverBarWidthChange = useTransform(scrollYSpring, [0, 1], [shouldAnimate ? 28 : 163, 163]);
  const citizenBarWidthChange = useTransform(scrollYSpring, [0, 1], [shouldAnimate ? 28 : 148, 148]);
  const accBarWidthChange = useTransform(scrollYSpring, [0, 1], [shouldAnimate ? 28 : 209, 209]);
  const planetBarWidthChange = useTransform(scrollYSpring, [0, 1], [shouldAnimate ? 28 : 173, 173]);

  const redHex = colorNameToHex['digital-red-light'];
  const redToLime = useTransform(scrollYSpring, [0, 1], [redHex, colorNameToHex.lime]);
  const transparentToLime = useTransform(scrollYSpring, [0, 1], ['rgba(0,0,0,0)', colorNameToHex.lime]);
  const redToPoppy = useTransform(scrollYSpring, [0, 1], [redHex, colorNameToHex.poppy]);
  const transparentToPoppy = useTransform(scrollYSpring, [0, 1], ['rgba(0,0,0,0)', colorNameToHex.poppy]);
  const redToPeriwinkle = useTransform(scrollYSpring, [0, 1], [redHex, colorNameToHex.periwinkle]);
  const transparentToPeriwinkle = useTransform(scrollYSpring, [0, 1], ['rgba(0,0,0,0)', colorNameToHex.periwinkle]);
  const redToRobinsEgg = useTransform(scrollYSpring, [0, 1], [redHex, colorNameToHex['robins-egg']]);
  const transparentToRobinsEgg = useTransform(scrollYSpring, [0, 1], ['rgba(0,0,0,0)', colorNameToHex['robins-egg']]);

  return (
    <Container
      width="full"
      bgColor="black"
      pt={9}
      className="relative overflow-hidden"
    >
      <AnimateInView animation="slideUp">
        <FlexBox className="rs-mb-6">
          <div className="block bg-digital-red w-8 md:w-20 lg:w-40" />
          <div className="cc whitespace-pre-line w-full 3xl:max-w-3/5 -ml-8 md:-ml-20 lg:-ml-40">
            <Text size={2} leading="tight" font="serif" aria-hidden>Themes</Text>
            <Heading
              as="h2"
              size="splash"
              leading="none"
              font="druk"
              className="mb-0"
            >
              <SrOnlyText>Themes: </SrOnlyText>
              Square pegs,<br />
              huge goals.
            </Heading>
          </div>
        </FlexBox>
      </AnimateInView>
      <Container>
        <AnimateInView animation="slideUp" delay={0.2}>
          <div className="max-w-800 rs-mb-6 mx-auto">
            <Paragraph variant="overview" font="serif">
              These aren’t priorities to be funded—they are a promise we make to each other.
              To build a more ethical future, we need to move concern for others from being an afterthought
              to being integral to the thought process. In every field of study,
              we need to ensure consequences are weighed and tradeoffs are made on purpose.
            </Paragraph>
            <Paragraph variant="overview" font="serif">
              This is how we get there.
            </Paragraph>
          </div>
        </AnimateInView>
        <div className={cnb('sr-only focus-within:not-sr-only w-fit children:mx-auto', !shouldAnimate ? 'hidden' : '')}>
          <CtaButton onClick={() => setShouldAnimate(false)}>Reveal themes visually</CtaButton>
        </div>
        {/* This grid contains the 4 animated lines behind the theme cards */}
        <Grid md={2} className="hidden md:grid absolute left-0 top-[160rem] 2xl:top-[170rem] w-full gap-y-[30rem]">
          <div className="max-w-full overflow-hidden">
            <m.svg className="mr-0 ml-auto" viewBox="0 0 952 461" fill="none" xmlns="http://www.w3.org/2000/svg">
              <m.path
                d="M951.043 1H450.62C192.915 1 -16 206.517 -16 460.032"
                stroke="white"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
                style={{ pathLength: curveDownSpring }}
              />
            </m.svg>
          </div>
          <div className="max-w-full overflow-hidden">
            <m.div
              className="h-2 bg-white origin-left mt-300"
              style={{ scaleX: rightLineSpring, willChange }}
            />
          </div>
          <div className="max-w-full overflow-hidden">
            <m.div
              className="h-2 bg-white origin-right mt-200"
              style={{ scaleX: leftLineSpring, willChange }}
            />
          </div>
          <div className="max-w-full overflow-hidden mt-300 3xl:mt-100">
            <m.svg className="mr-0 ml-auto rotate-180" viewBox="0 0 952 461" fill="none" xmlns="http://www.w3.org/2000/svg">
              <m.path
                d="M951.043 1H450.62C192.915 1 -16 206.517 -16 460.032"
                stroke="white"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
                style={{ pathLength: curveUpSpring }}
              />
            </m.svg>
          </div>
        </Grid>
        <div ref={containerRef}>
          <GridAlternating py={7} addCenterLine gridCellStyle={{ marginBottom: spacing }}>
            <m.div style={{ height: heightWrapper, marginBottom: shiftUp, willChange }} className="overflow-hidden">
              <FlexBox direction="col" alignItems="center" className="w-fit mr-0 ml-auto">
                <Heading as="h3" font="druk" align="right" className="mb-01em text-[8rem]">
                  Discovery
                </Heading>
                <m.div
                  className="w-fit border-t-[2.6rem] border-bottom-none overflow-hidden"
                  style={{
                    borderRightWidth: discoverBarWidthChange,
                    borderLeftWidth: discoverBarWidthChange,
                    borderTopColor: redToLime,
                    borderLeftColor: transparentToLime,
                    borderRightColor: transparentToLime,
                  }}
                />
              </FlexBox>
              <m.div
                style={{ opacity: opacityChange, scale: zoom }}
                className="origin-top-right"
              >
                <CreateBloks blokSection={themeCardDiscovery} />
              </m.div>
            </m.div>
            <m.div style={{ height: heightWrapper, willChange }} className="overflow-hidden">
              <FlexBox direction="col" alignItems="center" className="w-fit ml-0 mr-auto">
                <Heading as="h3" font="druk" className="mb-01em text-[8rem]">
                  Citizenry
                </Heading>
                <m.div
                  className="w-fit border-t-[2.6rem] border-bottom-none overflow-hidden"
                  style={{
                    borderRightWidth: citizenBarWidthChange,
                    borderLeftWidth: citizenBarWidthChange,
                    borderTopColor: redToPoppy,
                    borderLeftColor: transparentToPoppy,
                    borderRightColor: transparentToPoppy,
                    willChange,
                  }}
                />
              </FlexBox>
              <m.div
                style={{ opacity: scrollYProgress, scale: zoom, willChange }}
                className="origin-top-left"
              >
                <CreateBloks blokSection={themeCardCitizen} />
              </m.div>
            </m.div>
            <m.div style={{ height: heightWrapper, marginBottom: shiftUp, willChange }} className="overflow-hidden">
              <FlexBox direction="col" alignItems="center" className="w-fit mr-0 ml-auto">
                <Heading as="h3" font="druk" align="right" className="mb-01em text-[8rem]">
                  Acceleration
                </Heading>
                <m.div
                  className="w-fit border-t-[2.6rem] border-bottom-none overflow-hidden"
                  style={{
                    borderRightWidth: accBarWidthChange,
                    borderLeftWidth: accBarWidthChange,
                    borderTopColor: redToPeriwinkle,
                    borderLeftColor: transparentToPeriwinkle,
                    borderRightColor: transparentToPeriwinkle,
                    willChange,
                  }}
                />
              </FlexBox>
              <m.div
                style={{ opacity: scrollYProgress, scale: zoom, willChange }}
                className="origin-top-right"
              >
                <CreateBloks blokSection={themeCardAcceleration} />
              </m.div>
            </m.div>
            <m.div style={{ height: heightWrapper, willChange }} className="overflow-hidden">
              <FlexBox direction="col" alignItems="center" className="w-fit ml-0 mr-auto">
                <Heading as="h3" font="druk" className="mb-01em text-[8rem]">
                  Our planet
                </Heading>
                <m.div
                  className="w-fit border-t-[2.6rem] border-bottom-none overflow-hidden"
                  style={{
                    borderRightWidth: planetBarWidthChange,
                    borderLeftWidth: planetBarWidthChange,
                    borderTopColor: redToRobinsEgg,
                    borderLeftColor: transparentToRobinsEgg,
                    borderRightColor: transparentToRobinsEgg,
                    willChange,
                  }}
                />
              </FlexBox>
              <m.div
                style={{ opacity: scrollYProgress, scale: zoom, willChange }}
                className="origin-top-left"
              >
                <CreateBloks blokSection={themeCardPlanet} />
              </m.div>
            </m.div>
          </GridAlternating>
        </div>
      </Container>
    </Container>
  );
};
