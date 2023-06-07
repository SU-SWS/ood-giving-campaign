import React from 'react';
import { Container } from '../Container';
import { Heading, Paragraph } from '../Typography';
import { AnimateInView } from '../Animate';
import { Triangle } from '../Shapes';

export const FindPurposeSection = ({ children }) => (
  <Container width="full" bgColor="white" py={9} className="su-relative">
    <Container>
      <Heading size="splash" font="druk" className="su-max-w-900 su-rs-mb-4" leading="none">
        Find your purpose.
      </Heading>
      <div className="lg:su-w-[80%] 2xl:su-w-[60%] su-mx-auto su-rs-mb-6">
        <Triangle className="su-fill-digital-red-light su-w-60 su-rs-mb-7 motion-safe:su-animate-bounce" />
        <AnimateInView delay={0.2} duration={0.6} animation="slideUp">
          <Paragraph font="serif" weight="semibold" variant="overview" leading="snug">
            The world’s collective problems require collective solutions—and the work is far from over.
            It takes all of us, coming together from all angles.
            Discover the schools and initiatives working together On Purpose.
          </Paragraph>
          <Paragraph font="serif" weight="semibold" variant="overview" leading="snug">
            So, what moves you?
          </Paragraph>
        </AnimateInView>
      </div>
    </Container>
    {children}
  </Container>
);
