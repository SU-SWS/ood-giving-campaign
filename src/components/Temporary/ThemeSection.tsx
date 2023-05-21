import React, { useRef } from 'react';
import {
  m, useScroll, useSpring, useTransform, useInView,
} from 'framer-motion';
import { Container } from '../Container';
import { GridAlternating } from '../Grid';
import { Heading, Text, Paragraph } from '../Typography';
import { ThemeCard } from '../VerticalCard';
import { colorNameToHex } from '../../utilities/colorPalettePlugin';
import { FlexBox } from '../FlexBox';
import { AnimateInView } from '../Animate';

export const ThemeSection = () => {
  const containerRef = useRef(null);
  const svgRef = useRef(null);
  const isInView = useInView(svgRef, { once: true });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['-30vh', '-10px'],
  });
  const scrollYSpring = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const heightWrapper = useTransform(scrollYSpring, [0, 1], [134, 1030]);
  const zoom = useTransform(scrollYSpring, [0, 1], [0, 1]);
  const spacing = useTransform(scrollYSpring, [0, 1], [-30, -300]);
  const tabHeight = useTransform(scrollYSpring, [0, 0.8], [0.5, 1]);
  const shiftUp = useTransform(scrollYSpring, [0, 1], [0, -400]);

  const limeChange = useTransform(scrollYSpring, [0, 1], [colorNameToHex['digital-red'], colorNameToHex.lime]);
  const poppyChange = useTransform(scrollYSpring, [0, 1], [colorNameToHex['digital-red'], colorNameToHex.poppy]);
  const periwinkleChange = useTransform(scrollYSpring, [0, 1], [colorNameToHex['digital-red'], colorNameToHex.periwinkle]);
  const robinsEggChange = useTransform(scrollYSpring, [0, 1], [colorNameToHex['digital-red'], colorNameToHex['robins-egg']]);

  return (
    <div>
      <Container
        bgColor="black"
        py={9}
        className="su-relative su-overflow-hidden"
      >
        <Text size={2} leading="tight" font="serif">Themes</Text>
        <Heading as="h2" size="splash" leading="none" uppercase font="druk" className="su-max-w-1000">
          Square pegs, huge goals.
        </Heading>
        <FlexBox className="su-mx-auto" justifyContent="center">
          <m.svg ref={svgRef} className="su-shrink-0" width="140" height="375" viewBox="0 0 140 375" fill="none" xmlns="http://www.w3.org/2000/svg">
            <m.path
              d="M1.00142 0.0948767L2.56929 193.733C3.3767 293.452 64.5865 373.801 139.284 373.196"
              stroke="white"
              strokeWidth="2"
              vector-effect="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: isInView ? 1 : 0 }}
              strokeDasharray="0 1"
              transition={{
                delay: 0.3,
                duration: 0.3,
                ease: 'easeInOut',
              }}
            />
          </m.svg>
          <AnimateInView animation="fadeIn" delay={0.6}>
            <Paragraph variant="overview" font="serif" className="su-max-w-[100rem] su-rs-mt-8 su-rs-mb-4 su-ml-[3rem] su-pr-[17rem]">
              These aren’t priorities to be funded—they are a promise we make to each other.
              To build a more ethical future, we need to move concern for others from being an afterthought
              to being integral to the thought process. In every field of study,
              we need to ensure consequences are weighed and tradeoffs are made on purpose. This is how we get there.
            </Paragraph>
          </AnimateInView>
        </FlexBox>
        <div ref={containerRef}>
          <GridAlternating pt={7} addCenterLine gridCellStyle={{ marginBottom: spacing }}>
            <m.div style={{ height: heightWrapper, marginBottom: shiftUp }} className="su-overflow-hidden su-group">
              <div className="su-w-fit su-mr-0 su-ml-auto">
                <Heading as="h3" size="f6" font="druk" align="right" className="su-mb-01em">
                  Discovery
                </Heading>
                <m.div className="su-h-20 su-origin-top-right" style={{ scaleY: tabHeight, backgroundColor: limeChange }} />
              </div>
              <m.div
                style={{ opacity: scrollYProgress, scale: zoom }}
                className="su-origin-top-right"
              >
                <ThemeCard
                  heading="Catalyzing Discovery in Every Field"
                  body="Propelled by new ways of thinking, working, and creating, we probe the frontiers of discovery to drive progress."
                  textColor="white"
                  imageSrc="https://a-us.storyblok.com/f/1005200/2560x1708/bdd62ecfad/charm_lab_1421.jpg"
                  ctaLabel="Learn how"
                  href="/about-test"
                />
              </m.div>
            </m.div>
            <m.div style={{ height: heightWrapper }} className="su-overflow-hidden">
              <div className="su-w-fit su-ml-0 su-mr-auto">
                <Heading as="h3" size="f6" font="druk" className="su-mb-01em">
                  Citizenry
                </Heading>
                <m.div className="su-h-20 su-bg-poppy su-origin-top-left" style={{ scaleY: tabHeight, backgroundColor: poppyChange }} />
              </div>
              <m.div
                style={{ opacity: scrollYProgress, scale: zoom }}
                className="su-origin-top-left"
              >
                <ThemeCard
                  heading="Preparing citizens and leaders"
                  body="Propelled by new ways of thinking, working, and creating, we probe the frontiers of discovery to drive progress."
                  textColor="white"
                  imageSrc="https://a-us.storyblok.com/f/1005200/2796x2048/abbf52b8df/21664-9-0002.jpg"
                  ctaLabel="Learn how"
                  href="/about-test"
                />
              </m.div>
            </m.div>
            <m.div style={{ height: heightWrapper, marginBottom: shiftUp }} className="su-overflow-hidden">
              <div className="su-w-fit su-mr-0 su-ml-auto">
                <Heading as="h3" size="f6" font="druk" align="right" className="su-mb-01em">
                  Acceleration
                </Heading>
                <m.div className="su-h-20 su-bg-periwinkle su-origin-top-right" style={{ scaleY: tabHeight, backgroundColor: periwinkleChange }} />
              </div>
              <m.div
                style={{ opacity: scrollYProgress, scale: zoom }}
                className="su-origin-top-right"
              >
                <ThemeCard
                  heading="Accelerating Solutions for Humanity"
                  body="Propelled by new ways of thinking, working, and creating, we probe the frontiers of discovery to drive progress."
                  textColor="white"
                  imageSrc="https://a-us.storyblok.com/f/1005200/1708x2560/9a41936831/arizonagarden_krishnarao_1704.jpg"
                  ctaLabel="Learn how"
                  href="/about-test"
                />
              </m.div>
            </m.div>
            <m.div style={{ height: heightWrapper }} className="su-overflow-hidden">
              <div className="su-w-fit su-ml-0 su-mr-auto">
                <Heading as="h3" size="f6" font="druk" className="su-mb-01em">
                  Our planet
                </Heading>
                <m.div className="su-h-20 su-bg-robins-egg su-origin-top-left" style={{ scaleY: tabHeight, backgroundColor: robinsEggChange }} />
              </div>
              <m.div
                style={{ opacity: scrollYProgress, scale: zoom }}
                className="su-origin-top-left"
              >
                <ThemeCard
                  heading="Sustaining Life on Earth"
                  body="Propelled by new ways of thinking, working, and creating, we probe the frontiers of discovery to drive progress."
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
    </div>
  );
};
