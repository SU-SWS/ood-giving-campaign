import { storyblokEditable, type SbBlokData } from '@storyblok/react/rsc';
import { BlurryPoster } from '../BlurryPoster';
import { CreateBloks } from '../CreateBloks';
import { type HeadingType } from '../Typography';
import { type SbImageType, type SbTypographyProps } from './Storyblok.types';
import { paletteAccentColors, type PaletteAccentHexColorType } from '@/utilities/colorPalettePlugin';

type SbBlurryPosterProps = {
  blok: {
    _uid: string;
    superhead?: string;
    heading?: string;
    customHeading?: SbTypographyProps[];
    headingLevel?: HeadingType;
    isSmallHeading?: boolean;
    imageOnLeft?: boolean;
    addDarkOverlay?: boolean;
    body: string;
    byline?: string;
    publishedDate?: string;
    cta?: SbBlokData[];
    image?: SbImageType;
    bgImage?: SbImageType;
    tabColor?: {
      value?: PaletteAccentHexColorType;
    }
  }
};

export const SbBlurryPoster = ({
  blok: {
    superhead,
    heading,
    customHeading,
    headingLevel,
    isSmallHeading,
    imageOnLeft,
    addDarkOverlay,
    body,
    byline,
    publishedDate,
    cta,
    image: { filename, focus } = {},
    bgImage: { filename: bgImageSrc, focus: bgImageFocus } = {},
    tabColor: { value: tabColorValue } = {},
  },
  blok,
}: SbBlurryPosterProps) => {
  const Cta = <CreateBloks blokSection={cta} />;

  return (
    <BlurryPoster
      {...storyblokEditable(blok)}
      type="poster"
      superhead={superhead}
      heading={heading}
      customHeading={customHeading}
      headingLevel={headingLevel}
      isTwoCol
      addBgBlur
      isSmallHeading={isSmallHeading}
      imageOnLeft={imageOnLeft}
      addDarkOverlay={addDarkOverlay}
      body={body}
      byline={byline}
      publishedDate={publishedDate}
      cta={Cta}
      imageSrc={filename}
      imageFocus={focus}
      bgImageSrc={bgImageSrc}
      bgImageFocus={bgImageFocus}
      tabColor={paletteAccentColors[tabColorValue]}
    />
  );
};
