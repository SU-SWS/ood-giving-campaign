import { storyblokEditable, type SbBlokData } from '@storyblok/react/rsc';
import { VerticalPoster } from '../VerticalPoster';
import { CreateBloks } from '../CreateBloks';
import { type HeadingType } from '../Typography';
import { type SbImageType, type SbTypographyProps } from './Storyblok.types';

type SbVerticalPosterProps = {
  blok: {
    _uid: string;
    heading?: string;
    customHeading?: SbTypographyProps[];
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

export const SbVerticalPoster = ({
  blok: {
    heading,
    customHeading,
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
}: SbVerticalPosterProps) => {
  const Cta = <CreateBloks blokSection={cta} />;

  return (
    <VerticalPoster
      {...storyblokEditable(blok)}
      heading={heading}
      customHeading={customHeading}
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
