import { storyblokEditable, type SbBlokData } from '@storyblok/react/rsc';
import { BlurryPoster } from '../BlurryPoster';
import { CreateBloks } from '../CreateBloks';
import { type HeadingType } from '../Typography';
import { type SbImageType, type SbTypographyProps } from './Storyblok.types';
import { paletteAccentColors, type PaletteAccentHexColorType } from '@/utilities/colorPalettePlugin';
import { type HeroOverlayType } from '@/utilities/datasource';

type SbBlurryPosterProps = {
  blok: {
    _uid: string;
    superhead?: string;
    heading?: string;
    customHeading?: SbTypographyProps[];
    headingLevel?: HeadingType;
    isSmallHeading?: boolean;
    imageOnLeft?: boolean;
    darkOverlay?: HeroOverlayType;
    body: string;
    byline?: string;
    publishedDate?: string;
    cta?: SbBlokData[];
    image?: SbImageType;
    alt?: string;
    bgImage?: SbImageType;
    tabColor?: {
      value?: PaletteAccentHexColorType;
    }
    isHidden?: boolean;
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
    darkOverlay,
    body,
    byline,
    publishedDate,
    cta,
    image: { filename, focus } = {},
    alt,
    bgImage: { filename: bgImageSrc, focus: bgImageFocus } = {},
    tabColor: { value: tabColorValue } = {},
    isHidden,
  },
  blok,
}: SbBlurryPosterProps) => {
  if (isHidden) {
    return null;
  }

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
      darkOverlay={darkOverlay}
      body={body}
      byline={byline}
      publishedDate={publishedDate}
      cta={Cta}
      imageSrc={filename}
      imageFocus={focus}
      alt={alt}
      bgImageSrc={bgImageSrc}
      bgImageFocus={bgImageFocus}
      tabColor={paletteAccentColors[tabColorValue]}
    />
  );
};
