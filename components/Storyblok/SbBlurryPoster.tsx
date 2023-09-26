import { storyblokEditable, type SbBlokData } from '@storyblok/react/rsc';
import { type StoryblokRichtext } from 'storyblok-rich-text-react-renderer-ts';
import { BlurryPoster } from '../BlurryPoster';
import { CreateBloks } from '../CreateBloks';
import { RichText } from '../RichText';
import { type HeadingType } from '../Typography';
import { type SbImageType } from './Storyblok.types';
import { hasRichText } from '@/utilities/hasRichText';

type SbBlurryPosterProps = {
  blok: {
    _uid: string;
    heading?: string;
    headingLevel?: HeadingType;
    isSmallHeading?: boolean;
    body: string;
    cta?: SbBlokData[];
    image?: SbImageType;
    bgImage?: SbImageType;
  },
};

export const SbBlurryPoster = ({
  blok: {
    heading,
    headingLevel,
    isSmallHeading,
    body,
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
      body={body}
      cta={Cta}
      imageSrc={filename}
      imageFocus={focus}
      bgImageSrc={bgImageSrc}
      bgImageFocus={bgImageFocus}
    />
  );
};
