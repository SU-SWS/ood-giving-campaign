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
    offset: ['-30vh', '0'],
  });
  const scrollYSpring = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const heightWrapper = useTransform(scrollYSpring, [0, 1], [106, '1030']);
  const zoom = useTransform(scrollYSpring, [0, 1], [0.4, 1]);
  const spacing = useTransform(scrollYSpring, [0, 1], [0, -440]);

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
              <Heading as="h3" size={6} font="druk" align="right">
                Discovery
              </Heading>
              <m.div
                style={{ opacity: scrollYProgress, scale: zoom }}
                className="su-origin-top-right"
              >
                <ThemeCard
                  heading="Catalyzing Discovery in Every Field"
                  body="Propelled by new ways of thinking, working, and creating, we probe the frontiers of discovery to drive progress."
                  tabColor="lime"
                  textColor="white"
                  imageSrc="https://a-us.storyblok.com/f/1005200/2560x1708/bdd62ecfad/charm_lab_1421.jpg"
                  ctaLabel="Learn how"
                  href="/about-test"
                />
              </m.div>
            </m.div>
            <m.div style={{ height: heightWrapper }} className="su-overflow-hidden">
              <Heading as="h3" size={6} font="druk">
                Citizenry
              </Heading>
              <m.div
                style={{ opacity: scrollYProgress, scale: zoom }}
                className="su-origin-top-left"
              >
                <ThemeCard
                  heading="Catalyzing Discovery in Every Field"
                  body="Propelled by new ways of thinking, working, and creating, we probe the frontiers of discovery to drive progress."
                  tabColor="lime"
                  textColor="white"
                  imageSrc="https://a-us.storyblok.com/f/1005200/2560x1708/bdd62ecfad/charm_lab_1421.jpg"
                  ctaLabel="Learn how"
                  href="/about-test"
                />
              </m.div>
            </m.div>
            <m.div style={{ height: heightWrapper }} className="su-overflow-hidden">
              <Heading as="h3" size={6} font="druk" align="right">
                Acceleration
              </Heading>
              <m.div
                style={{ opacity: scrollYProgress, scale: zoom }}
                className="su-origin-top-right"
              >
                <ThemeCard
                  heading="Catalyzing Discovery in Every Field"
                  body="Propelled by new ways of thinking, working, and creating, we probe the frontiers of discovery to drive progress."
                  tabColor="lime"
                  textColor="white"
                  imageSrc="https://a-us.storyblok.com/f/1005200/2560x1708/bdd62ecfad/charm_lab_1421.jpg"
                  ctaLabel="Learn how"
                  href="/about-test"
                />
              </m.div>
            </m.div>
            <m.div style={{ height: heightWrapper }} className="su-overflow-hidden">
              <Heading as="h3" size={6} font="druk">
                Our planet
              </Heading>
              <m.div
                style={{ opacity: scrollYProgress, scale: zoom }}
                className="su-origin-top-left"
              >
                <ThemeCard
                  heading="Catalyzing Discovery in Every Field"
                  body="Propelled by new ways of thinking, working, and creating, we probe the frontiers of discovery to drive progress."
                  tabColor="lime"
                  textColor="white"
                  imageSrc="https://a-us.storyblok.com/f/1005200/2560x1708/bdd62ecfad/charm_lab_1421.jpg"
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
