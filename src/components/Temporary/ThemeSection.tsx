import React, { useRef } from 'react';
import {
  m, useScroll, useSpring, useTransform,
} from 'framer-motion';
import { Container } from '../Container';
import { GridAlternating } from '../Grid';
import { Heading, Text } from '../Typography';
import { ThemeCard } from '../VerticalCard';

export const ThemeSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['-30vh', '-10px'],
  });
  const scrollYSpring = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const heightWrapper = useTransform(scrollYSpring, [0, 1], [134, '1030']);
  const zoom = useTransform(scrollYSpring, [0, 1], [0.4, 1]);
  const spacing = useTransform(scrollYSpring, [0, 1], [-30, -440]);
  const tabHeight = useTransform(scrollYSpring, [0, 0.8], [0.3, 1]);

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
        <div ref={containerRef}>
          <GridAlternating addCenterLine gridCellStyle={{ marginBottom: spacing }}>
            <m.div style={{ height: heightWrapper }} className="su-overflow-hidden">
              <div className="su-w-fit su-mr-0 su-ml-auto">
                <Heading as="h3" size={6} font="druk" align="right" className="su-mb-01em">
                  Discovery
                </Heading>
                <m.div className="su-h-26 su-bg-lime su-origin-top-right" style={{ scaleY: tabHeight }} />
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
                <Heading as="h3" size={6} font="druk" className="su-mb-01em">
                  Citizenry
                </Heading>
                <m.div className="su-h-26 su-bg-poppy su-origin-top-left" style={{ scaleY: tabHeight }} />
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
            <m.div style={{ height: heightWrapper }} className="su-overflow-hidden">
              <div className="su-w-fit su-mr-0 su-ml-auto">
                <Heading as="h3" size={6} font="druk" align="right" className="su-mb-01em">
                  Acceleration
                </Heading>
                <m.div className="su-h-26 su-bg-periwinkle su-origin-top-right" style={{ scaleY: tabHeight }} />
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
                <Heading as="h3" size={6} font="druk" className="su-mb-01em">
                  Our planet
                </Heading>
                <m.div className="su-h-26 su-bg-robins-egg su-origin-top-left" style={{ scaleY: tabHeight }} />
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
