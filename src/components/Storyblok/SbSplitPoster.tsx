import React from 'react';
import { storyblokEditable } from 'gatsby-source-storyblok';
import { CreateBloks } from '../CreateBloks';
import { HeadingType } from '../Typography';
import { SbImageType } from './Storyblok.types';
import { SplitPoster, BgColorType } from '../SplitPoster';

type SbSplitPosterProps = {
  blok: {
    _uid: string;
    headingLevel?: HeadingType;
    bgImage: SbImageType;
    headingLeft?: string;
    headingRight?: string;
    bodyLeft?: string;
    bodyRight?: string;
    bgImageLeft?: SbImageType;
    bgImageRight?: SbImageType;
    bgColorLeft?: BgColorType;
    bgColorRight?: BgColorType;
    imageLeft?: SbImageType;
    imageRight?: SbImageType;
    ctaLeft?: any[];
    ctaRight?: any[];
  };
};

export const SbSplitPoster = ({
  blok: {
    _uid,
    headingLevel,
    bgImage: { filename: bgImageSrc, focus: bgImageFocus } = {},
    headingLeft,
    headingRight,
    bodyLeft,
    bodyRight,
    bgImageLeft: { filename: bgImageLeftSrc, focus: bgImageLeftFocus } = {},
    bgImageRight: { filename: bgImageRightSrc, focus: bgImageRightFocus } = {},
    bgColorLeft,
    bgColorRight,
    imageLeft: { filename: imageLeftSrc, focus: imageLeftFocus } = {},
    imageRight: { filename: imageRightSrc, focus: imageRightFocus } = {},
    ctaLeft,
    ctaRight,
  },
  blok,
}: SbSplitPosterProps) => {
  const CtaLeft = <CreateBloks blokSection={ctaLeft} />;
  const CtaRight = <CreateBloks blokSection={ctaRight} />;

  return (
    <SplitPoster
      {...storyblokEditable(blok)}
      key={_uid}
      headingLevel={headingLevel}
      bgImageSrc={bgImageSrc}
      bgImageFocus={bgImageFocus}
      headingLeft={headingLeft}
      headingRight={headingRight}
      bodyLeft={bodyLeft}
      bodyRight={bodyRight}
      bgImageLeftSrc={bgImageLeftSrc}
      bgImageLeftFocus={bgImageLeftFocus}
      bgImageRightSrc={bgImageRightSrc}
      bgImageRightFocus={bgImageRightFocus}
      bgColorLeft={bgColorLeft}
      bgColorRight={bgColorRight}
      imageLeftSrc={imageLeftSrc}
      imageLeftFocus={imageLeftFocus}
      imageRightSrc={imageRightSrc}
      imageRightFocus={imageRightFocus}
      ctaLeft={CtaLeft}
      ctaRight={CtaRight}
    />
  );
};
