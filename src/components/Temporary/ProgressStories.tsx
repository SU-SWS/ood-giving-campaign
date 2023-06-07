import React from 'react';
import { Container } from '../Container';
import { Heading, Paragraph } from '../Typography';
import { AnimateInView } from '../Animate';
import { getProcessedImage } from '../../utilities/getProcessedImage';

type ProgressStoriesProps = {
  bgImage?: string;
  children: React.ReactNode;
};

export const ProgressStories = ({ bgImage, children }: ProgressStoriesProps) => {
  const bg = getProcessedImage(bgImage, '1900x0');

  return (
    <Container width="full" bgColor="black" pb={10} className="su-relative">
      <div
        className="su-relative su-pt-[10vw] su-pb-[7vw]"
        style={{
          backgroundImage: `url('${bg}')`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
        }}
      >
        <div className="su-cc su-bg-transparent su-relative su-z-10">
          <Heading font="druk" className="su-fluid-type-8 3xl:su-gc-splash xl:su-max-w-[47%] su-mb-600 2xl:su-whitespace-pre-line" leading="none">
            Progress<br />
            is nothing<br />
            without purpose.
          </Heading>
          <div className="lg:su-w-[80%] 2xl:su-w-[60%] su-mx-auto">
            <AnimateInView delay={0.2} duration={0.6} animation="slideUp">
              <Paragraph font="serif" weight="semibold" variant="overview" leading="snug" className="su-max-w-700 su-mx-auto">
                Stanford, at its heart, is a community of changemakers.
                Learn more about the people driving us toward a brighter tomorrow.
              </Paragraph>
            </AnimateInView>
          </div>
        </div>
        <div className="su-absolute su-top-0 su-h-[60vw] 2xl:su-h-[40vw] 3xl:su-h-[35vw] su-w-full su-bg-gradient-to-b su-from-gc-black su-via-[#35459A] su-via-50% su-to-transparent" />
        <div className="su-absolute su-bottom-0 su-h-400 su-w-full su-bg-gradient-to-t su-from-gc-black su-to-black-true " />
      </div>
      <Container bgColor="black">{children}</Container>
    </Container>
  );
};
