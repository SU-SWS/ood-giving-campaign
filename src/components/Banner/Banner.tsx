import React, { HTMLAttributes } from 'react';
import { AnimateInView } from '../Animate';
import { Container } from '../Container';
import { Heading, Paragraph } from '../Typography';
import { FlexBox } from '../FlexBox';
import { getProcessedImage } from '../../utilities/getProcessedImage';
import { BgTextColorPairBlackWhiteType } from '../../utilities/datasource';

type BannerProps = HTMLAttributes<HTMLDivElement> & {
  heading?: string;
  isSmallHeading?: boolean;
  body?: React.ReactNode;
  cta?: React.ReactNode;
  imageSrc?: string;
  imageFocus?: string;
  bgColor?: BgTextColorPairBlackWhiteType;
};

export const Banner = ({
  heading,
  isSmallHeading,
  body,
  cta,
  imageSrc,
  imageFocus,
  bgColor = 'white',
  ...props
}: BannerProps) => (
  <Container {...props} as="section" bgColor={bgColor} className="lg:su-pr-0" py={9}>
    <FlexBox alignItems="start" justifyContent="between" className="su-mr-0 au-ml-auto su-flex-col lg:su-flex-row">
      <div className="su-rs-pr-9 lg:su-max-w-[70%]">
        <AnimateInView duration={0.6} animation="slideUp">
          {heading && (
            <Heading
              size={isSmallHeading ? 'f6' : 'f7'}
              font="druk"
              leading="none"
              className="su-whitespace-pre-line su--mt-02em su-rs-mb-2"
            >
              {heading}
            </Heading>
          )}
          {body && (
            <Paragraph font="serif" variant="overview" weight="semibold" className="su-max-w-[50ch] su-rs-mb-3">
              {body}
            </Paragraph>
          )}
          {cta}
        </AnimateInView>
      </div>
      <AnimateInView duration={0.4} delay={0.7} animation="slideInFromRight">
        <img
          alt=""
          src={getProcessedImage(imageSrc, '360x360', imageFocus)}
          className="su-rounded-bl-[12rem] su-w-[25rem] xl:su-w-[36rem]"
        />
      </AnimateInView>
    </FlexBox>
  </Container>
);
