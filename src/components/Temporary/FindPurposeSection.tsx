import React from 'react';
import { Container } from '../Container';
import { Heading, Paragraph } from '../Typography';
import { AnimateInView } from '../Animate';
import { Triangle } from '../Shapes';
import { getProcessedImage } from '../../utilities/getProcessedImage';

export const FindPurposeSection = ({ children }) => (
  <div className="su-relative">
    <img
      alt=""
      src={getProcessedImage('https://a-us.storyblok.com/f/1005200/2000x40/f23b53c0e4/steve-johnson-cropped-2000x40-02.jpg')}
      className="su-w-full"
    />
    <Container width="full" bgColor="white" py={9}>
      <Container>
        <Heading size="splash" font="druk" className="su-max-w-900 su-rs-mb-4" leading="none">
          Find your purpose.
        </Heading>
        <div className="lg:su-w-[80%] 2xl:su-w-[60%] su-mx-auto su-rs-mb-6">
          <Triangle className="su-fill-digital-red-light su-w-60 su-rs-mb-7 motion-safe:su-animate-bounce" />
          <AnimateInView delay={0.4} duration={0.7} animation="slideDown">
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
    <img
      alt=""
      src={getProcessedImage('https://a-us.storyblok.com/f/1005200/2000x40/f23b53c0e4/steve-johnson-cropped-2000x40-02.jpg')}
      className="su-w-full"
    />
  </div>
);
