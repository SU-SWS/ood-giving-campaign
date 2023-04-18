import React, { HTMLAttributes } from 'react';
import { dcnb } from 'cnbuilder';
import { Container } from '../Container';
import { Grid } from '../Grid';
import { Heading, Paragraph, HeadingType } from '../Typography';
import { PosterContent } from './PosterContent';
import { SbLinkType } from '../Storyblok/Storyblok.types';
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
  imageLeftSrc,
  imageLeftFocus,
  imageRightSrc,
  imageRightFocus,
  ctaLeft,
  ctaRight,
  className,
  ...props
}: SplitPosterProps) => (
  <Container {...props} width="full">
    <Container>
      <Grid lg={2}>
        <div className="su-border-r su-border-white">
          <PosterContent
            headingLevel={headingLevel}
            heading={headingLeft}
            body={bodyLeft}
          >
            {ctaLeft}
          </PosterContent>
        </div>
        <div className="su-border-l su-border-white">
          <PosterContent
            headingLevel={headingLevel}
            heading={headingRight}
            body={bodyRight}
          >
            {ctaRight}
          </PosterContent>
        </div>
      </Grid>
    </Container>
  </Container>
);
