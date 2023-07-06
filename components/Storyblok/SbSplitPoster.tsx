'use client';
import { storyblokEditable } from '@storyblok/react/rsc';
import { CreateBloks } from '../CreateBloks';
import { HeadingType } from '../Typography';
import { SbImageType } from './Storyblok.types';
import { SplitPoster } from '../SplitPoster';
import { BgTextColorPairType } from '@/utilities/datasource';

export type SbSplitPosterProps = {
  blok: {
    _uid: string;
    headingLevel?: HeadingType;
    isLargeOffset?: boolean;
    bgImage: SbImageType;
    headingLeft?: string;
    headingRight?: string;
    bodyLeft?: string;
    bodyRight?: string;
    bgImageLeft?: SbImageType;
    bgImageRight?: SbImageType;
    bgColorLeft?: BgTextColorPairType;
    bgColorRight?: BgTextColorPairType;
    imageLeft?: SbImageType;
    addImageOverlayLeft?: boolean;
    imageRight?: SbImageType;
    addImageOverlayRight?: boolean;
    ctaLeft?: any[];
    ctaRight?: any[];
  };
};

export const SbSplitPoster = ({
  blok: {
    headingLevel,
    bgImage: { filename: bgImageSrc, focus: bgImageFocus } = {},
    isLargeOffset,
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
    addImageOverlayLeft,
    addImageOverlayRight,
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
      headingLevel={headingLevel}
      bgImageSrc={bgImageSrc}
      bgImageFocus={bgImageFocus}
      isLargeOffset={isLargeOffset}
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
      addImageOverlayLeft={addImageOverlayLeft}
      imageRightSrc={imageRightSrc}
      imageRightFocus={imageRightFocus}
      addImageOverlayRight={addImageOverlayRight}
      ctaLeft={CtaLeft}
      ctaRight={CtaRight}
    />
  );
};
