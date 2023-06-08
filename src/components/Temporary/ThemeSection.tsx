import React, { useRef, useState } from 'react';
import { dcnb } from 'cnbuilder';
import {
  m, useScroll, useSpring, useTransform, SpringOptions,
} from 'framer-motion';
import { Container } from '../Container';
import { Grid, GridAlternating } from '../Grid';
import { Heading, Text, Paragraph } from '../Typography';
import { ThemeCard } from '../VerticalCard';
import { colorNameToHex } from '../../utilities/colorPalettePlugin';
import { FlexBox } from '../FlexBox';
import { AnimateInView } from '../Animate';
import { CtaButton } from '../Cta';

export const ThemeSection = () => {
  const containerRef = useRef(null);
  const springSetting: SpringOptions = {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  };

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
      className="su-relative su-overflow-hidden"
    >
      <AnimateInView duration={0.6} animation="slideUp">
        <Text size={2} leading="tight" font="serif" className="su-cc su-mb-1em">Themes</Text>
        <FlexBox className="su-relative su-rs-mb-6">
          <div className="su-hidden lg:su-block su-bg-digital-red lg:su-w-40 3xl:su-w-58" />
          <Heading
            as="h2"
            size="splash"
            leading="none"
            font="druk"
            className="su-cc su-pr-0 su-mb-0 su--mt-[0.16em] su-whitespace-pre-line lg:su--ml-40 3xl:su--ml-58 su-w-full su-max-w-1200 3xl:su-max-w-3/5"
          >
            Square pegs,<br />
            huge goals.
          </Heading>
        </FlexBox>
      </AnimateInView>
      <Container>
        <AnimateInView animation="slideUp" duration={0.6} delay={0.2}>
          <div className="su-max-w-800 su-rs-mb-6 su-mx-auto">
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
        <div className={dcnb('su-sr-only focus-within:su-not-sr-only su-w-fit children:su-mx-auto', !shouldAnimate ? 'su-hidden' : '')}>
          <CtaButton onClick={() => setShouldAnimate(false)}>Reveal themes visually</CtaButton>
        </div>
        {/* This grid contains the 4 animated lines behind the theme cards */}
        <Grid md={2} className="su-absolute su-left-0 su-top-[160rem] 2xl:su-top-[170rem] su-w-full su-gap-y-[30rem]">
          <div className="su-max-w-full su-overflow-hidden">
            <m.svg className="su-mr-0 su-ml-auto" viewBox="0 0 952 461" fill="none" xmlns="http://www.w3.org/2000/svg">
              <m.path
                d="M951.043 1H450.62C192.915 1 -16 206.517 -16 460.032"
                stroke="white"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
                style={{ pathLength: curveDownSpring }}
              />
            </m.svg>
          </div>
          <div className="su-max-w-full su-overflow-hidden">
            <m.div
              className="su-h-2 su-bg-white su-origin-left su-mt-300"
              style={{ scaleX: rightLineSpring }}
            />
          </div>
          <div className="su-max-w-full su-overflow-hidden">
            <m.div
              className="su-h-2 su-bg-white su-origin-right su-mt-200"
              style={{ scaleX: leftLineSpring }}
            />
          </div>
          <div className="su-max-w-full su-overflow-hidden su-mt-300 3xl:su-mt-100">
            <m.svg className="su-mr-0 su-ml-auto su-rotate-180" viewBox="0 0 952 461" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            <m.div style={{ height: heightWrapper, marginBottom: shiftUp }} className="su-overflow-hidden">
              <FlexBox direction="col" alignItems="center" className="su-w-fit su-mr-0 su-ml-auto">
                <Heading as="h3" font="druk" align="right" className="su-mb-01em su-text-[8rem]">
                  Discovery
                </Heading>
                <m.div
                  className="su-w-fit su-border-t-[2.8rem] su-border-bottom-none su-overflow-hidden"
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
                className="su-origin-top-right"
              >
                <ThemeCard
                  heading="Catalyzing discovery in every field"
                  body="Propelled by new ways of thinking, working, and creating, we probe the frontiers of discovery to drive progress."
                  textColor="white"
                  imageSrc="https://a-us.storyblok.com/f/1005200/2560x1708/bdd62ecfad/charm_lab_1421.jpg"
                  ctaLabel="Learn how"
                  href="/about-test"
                />
              </m.div>
            </m.div>
            <m.div style={{ height: heightWrapper }} className="su-overflow-hidden">
              <FlexBox direction="col" alignItems="center" className="su-w-fit su-ml-0 su-mr-auto">
                <Heading as="h3" font="druk" className="su-mb-01em su-text-[8rem]">
                  Citizenry
                </Heading>
                <m.div
                  className="su-w-fit su-border-t-[2.8rem] su-border-bottom-none su-overflow-hidden"
                  style={{
                    borderRightWidth: citizenBarWidthChange,
                    borderLeftWidth: citizenBarWidthChange,
                    borderTopColor: redToPoppy,
                    borderLeftColor: transparentToPoppy,
                    borderRightColor: transparentToPoppy,
                  }}
                />
              </FlexBox>
              <m.div
                style={{ opacity: scrollYProgress, scale: zoom }}
                className="su-origin-top-left"
              >
                <ThemeCard
                  heading="Preparing citizens and leaders"
                  body="We are preparing students to live, work, and serve as active citizens, for the good of the world."
                  textColor="white"
                  imageSrc="https://a-us.storyblok.com/f/1005200/2560x1708/a3874a6272/barnumtower_0837.jpg"
                  ctaLabel="Learn how"
                  href="/about-test"
                />
              </m.div>
            </m.div>
            <m.div style={{ height: heightWrapper, marginBottom: shiftUp }} className="su-overflow-hidden">
              <FlexBox direction="col" alignItems="center" className="su-w-fit su-mr-0 su-ml-auto">
                <Heading as="h3" font="druk" align="right" className="su-mb-01em su-text-[8rem]">
                  Acceleration
                </Heading>
                <m.div
                  className="su-w-fit su-border-t-[2.8rem] su-border-bottom-none su-overflow-hidden"
                  style={{
                    borderRightWidth: accBarWidthChange,
                    borderLeftWidth: accBarWidthChange,
                    borderTopColor: redToPeriwinkle,
                    borderLeftColor: transparentToPeriwinkle,
                    borderRightColor: transparentToPeriwinkle,
                  }}
                />
              </FlexBox>
              <m.div
                style={{ opacity: scrollYProgress, scale: zoom }}
                className="su-origin-top-right"
              >
                <ThemeCard
                  heading="Accelerating solutions for humanity"
                  body="Creating systems to rapidly design, develop, and scale applied research, enabled by expanded and new partnerships."
                  textColor="white"
                  imageSrc="https://a-us.storyblok.com/f/1005200/2560x1708/28e01c3d3c/benjamingao_3843.jpg"
                  ctaLabel="Learn how"
                  href="/about-test"
                />
              </m.div>
            </m.div>
            <m.div style={{ height: heightWrapper }} className="su-overflow-hidden">
              <FlexBox direction="col" alignItems="center" className="su-w-fit su-ml-0 su-mr-auto">
                <Heading as="h3" font="druk" className="su-mb-01em su-text-[8rem]">
                  Our planet
                </Heading>
                <m.div
                  className="su-w-fit su-border-t-[2.8rem] su-border-bottom-none su-overflow-hidden"
                  style={{
                    borderRightWidth: planetBarWidthChange,
                    borderLeftWidth: planetBarWidthChange,
                    borderTopColor: redToRobinsEgg,
                    borderLeftColor: transparentToRobinsEgg,
                    borderRightColor: transparentToRobinsEgg,
                  }}
                />
              </FlexBox>
              <m.div
                style={{ opacity: scrollYProgress, scale: zoom }}
                className="su-origin-top-left"
              >
                <ThemeCard
                  heading="Sustaining life on Earth"
                  body="The future looks bright—but only when we ensure a healthy planet in which humans and nature can thrive together."
                  textColor="white"
                  imageSrc="https://a-us.storyblok.com/f/1005200/2499x1667/203b52dc5a/farm_1206.jpg"
                  ctaLabel="Learn how"
                  href="/about-test"
                />
              </m.div>
            </m.div>
          </GridAlternating>
        </div>
      </Container>
    </Container>
  );
};
