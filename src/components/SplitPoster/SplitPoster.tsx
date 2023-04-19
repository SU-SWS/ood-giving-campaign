import React, { HTMLAttributes } from 'react';
import { dcnb } from 'cnbuilder';
import { Container } from '../Container';
import { Grid } from '../Grid';
import { HeadingType } from '../Typography';
import { PosterContent } from './PosterContent';
import * as styles from './SplitPoster.styles';

type SplitPosterProps = HTMLAttributes<HTMLDivElement> & {
  bgImageSrc?: string;
  bgImageFocus?: string;
  headingLevel?: HeadingType;
  headingLeft?: string;
  headingRight?: string;
  bodyLeft?: string;
  bodyRight?: string;
  bgImageLeftSrc?: string;
  bgImageLeftFocus?: string;
  bgImageRightSrc?: string;
  bgImageRightFocus?: string;
  bgColorLeft?: styles.BgColorType;
  bgColorRight?: styles.BgColorType;
  imageLeftSrc?: string;
  imageLeftFocus?: string;
  imageRightSrc?: string;
  imageRightFocus?: string;
  ctaLeft?: React.ReactNode;
  ctaRight?: React.ReactNode;
};

export const SplitPoster = ({
  bgImageSrc,
  bgImageFocus,
  headingLevel = 'h3',
  headingLeft,
  headingRight,
  bodyLeft,
  bodyRight,
  bgImageLeftSrc,
  bgImageLeftFocus,
  bgImageRightSrc,
  bgImageRightFocus,
  bgColorLeft,
  bgColorRight,
  imageLeftSrc,
  imageLeftFocus,
  imageRightSrc,
  imageRightFocus,
  ctaLeft,
  ctaRight,
  className,
  ...props
}: SplitPosterProps) => (
  <Container {...props} width="full" className="su-bg-black-true">
    <Container>
      <Grid xl={2}>
        <div className="su-border-r-2 xl:su-border-r su-border-white su-pt-60">
          <PosterContent
            headingLevel={headingLevel}
            heading={headingLeft}
            body={bodyLeft}
            imageSrc={imageLeftSrc}
            imageFocus={imageLeftFocus}
            contentAlign="right"
            className={dcnb(imageLeftSrc ? 'su-text-white' : 'su-text-black', 'su-rounded-tl-[10rem] md:su-rounded-tl-[30rem] su-overflow-hidden su-border-t-2 su-border-l-2 su-border-white')}
          >
            {ctaLeft}
          </PosterContent>
        </div>
        <div className="su-border-l-2 xl:su-border-l su-border-white su-pb-60">
          <PosterContent
            headingLevel={headingLevel}
            heading={headingRight}
            body={bodyRight}
            imageSrc={imageRightSrc}
            imageFocus={imageRightFocus}
            contentAlign="left"
            className={dcnb(imageRightSrc ? 'su-text-white' : 'su-text-black', 'su-rounded-br-[10rem] md:su-rounded-br-[30rem] su-overflow-hidden su-border-r-2 su-border-b-2 su-border-white')}
          >
            {ctaRight}
          </PosterContent>
        </div>
      </Grid>
    </Container>
  </Container>
);
