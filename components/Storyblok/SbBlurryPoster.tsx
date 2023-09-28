import { storyblokEditable, type SbBlokData } from '@storyblok/react/rsc';
import { BlurryPoster } from '../BlurryPoster';
import { CreateBloks } from '../CreateBloks';
import { type HeadingType } from '../Typography';
import { type SbImageType } from './Storyblok.types';

type SbBlurryPosterProps = {
  blok: {
    _uid: string;
    heading?: string;
    headingLevel?: HeadingType;
    isSmallHeading?: boolean;
    imageOnLeft?: boolean;
    body: string;
    byline?: string;
    publishedDate?: string;
    cta?: SbBlokData[];
    image?: SbImageType;
    bgImage?: SbImageType;
  }
};

export const SbBlurryPoster = ({
  blok: {
    heading,
    headingLevel,
    isSmallHeading,
    imageOnLeft,
    body,
    byline,
    publishedDate,
    cta,
    image: { filename, focus } = {},
    bgImage: { filename: bgImageSrc, focus: bgImageFocus } = {},
  },
  blok,
}: SbBlurryPosterProps) => {
  const Cta = <CreateBloks blokSection={cta} />;

  return (
    <BlurryPoster
      {...storyblokEditable(blok)}
      heading={heading}
      headingLevel={headingLevel}
      isSmallHeading={isSmallHeading}
      imageOnLeft={imageOnLeft}
      body={body}
      byline={byline}
      publishedDate={publishedDate}
      cta={Cta}
      imageSrc={filename}
      imageFocus={focus}
      bgImageSrc={bgImageSrc}
      bgImageFocus={bgImageFocus}
    />
  );
};
