import React from 'react';
import { Container } from '../Container';
import { Heading, Paragraph } from '../Typography';
import { AnimateInView } from '../Animate';

export const ProgressStories = ({ children }) => (
  <Container width="full" bgColor="black" pb={10} className="su-relative">
    <Container>
      <Heading size="splash" font="druk" className="su-max-w-900 su-rs-mb-4 su-whitespace-pre-line" leading="none">
        Progress
        is nothing
        without purpose.
      </Heading>
      <div className="lg:su-w-[80%] 2xl:su-w-[60%] su-mx-auto su-rs-mb-6">
        <AnimateInView delay={0.2} duration={0.6} animation="slideUp">
          <Paragraph font="serif" weight="semibold" variant="overview" leading="snug">
            Stanford, at its heart, is a community of changemakers.
            Learn more about the people driving us toward a brighter tomorrow.
          </Paragraph>
        </AnimateInView>
      </div>
    </Container>
    <Container bgColor="black">{children}</Container>
  </Container>
);
