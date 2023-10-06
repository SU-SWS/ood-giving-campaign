import React from 'react';
import { cnb } from 'cnbuilder';
import { Container } from '../Container';
import { BlurryPoster } from '../BlurryPoster';
import { CtaLink } from '../Cta';
import { Grid } from '../Grid';
import { FlexBox } from '../FlexBox';
import { Heading, Text, Paragraph } from '../Typography';
import { paletteAccentColors, type PaletteAccentHexColorType } from '@/utilities/colorPalettePlugin';
import { accentBorderColors, type AccentBorderColorType } from '@/utilities/datasource';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import { slugify } from '@/utilities/slugify';
import { type SbImageType } from '../Storyblok/Storyblok.types';
import * as styles from './StoryHeroMvp.styles';

export type StoryHeroMvpProps = {
  title: string;
  headingFont?: 'serif' | 'druk' | 'druk-small';
  byline?: string;
  publishedDate?: string;
  dek?: string;
  heroImage?: SbImageType;
  bgImage?: SbImageType;
  aspectRatio?: styles.ImageCropType;
  mobileImage?: SbImageType;
  mobileAspectRatio?: styles.ImageCropType;
  imageOnLeft?: boolean;
  alt?: string;
  caption?: string;
  isVerticalHero?: boolean;
  isLeftImage?: boolean;
  isLightHero?: boolean;
  tabColor?: {
    value?: PaletteAccentHexColorType;
  }
  topics?: string[];
};

export const StoryHeroMvp = ({
  title,
  headingFont,
  byline,
  dek,
  publishedDate,
  heroImage: { filename, focus } = {},
  mobileImage: { filename: mobileFilename, focus: mobileFocus } = {},
  bgImage: { filename: bgImageSrc, focus: bgImageFocus } = {},
  imageOnLeft,
  alt,
  caption,
  isVerticalHero = false,
  isLeftImage = false,
  isLightHero = false,
  aspectRatio = isVerticalHero ? '5x8' : '2x1',
  mobileAspectRatio = '1x1',
  tabColor: { value: tabColorValue } = {},
  topics,
}: StoryHeroMvpProps) => {
  const useTwoColLayout = isVerticalHero && !!filename;
  const date = publishedDate && new Date(publishedDate);
  const formattedDate = date && date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const cropSize = styles.imageCrops[aspectRatio];
  const cropWidth = parseInt(cropSize?.split('x')[0], 10);
  const cropHeight = parseInt(cropSize?.split('x')[1], 10);
  const mobileCropSize = styles.mobileImageCrops[mobileAspectRatio];
  const mobileCropWidth = parseInt(mobileCropSize?.split('x')[0], 10);
  const mobileCropHeight = parseInt(mobileCropSize?.split('x')[1], 10);

  const renderOneImage = !!filename && !mobileFilename && mobileAspectRatio === aspectRatio;
  // Render 2 different images if there is both a hero image or a mobile image
  // Or when there is no mobile image, but the mobile aspect ratio is different from the desktop aspect ratio
  const renderTwoImages = (!!filename && !!mobileFilename) ||
    (!!filename && !mobileFilename && mobileAspectRatio !== aspectRatio);

  // TODO: add srcset later in GIVCAMP-71
  // This one will always be rendered when there's a hero image
  const RenderedDesktopImage = (
    <img
      alt={alt || ''}
      loading="eager"
      width={cropWidth}
      height={cropHeight}
      src={getProcessedImage(filename, cropSize, focus)}
      sizes={isVerticalHero ? `${renderOneImage ? '(max-width: 991px) 100vw, 50vw}' : '50vw'}` : '100vw'}
      className={styles.image(renderTwoImages)}
    />
  );

  // This one will only be rendered when the conditions in renderTwoImages are met
  const RenderedMobileImage = renderTwoImages && (
    <img
      alt={alt || ''}
      loading="eager"
      width={mobileCropWidth}
      height={mobileCropHeight}
      src={getProcessedImage(mobileFilename || filename, mobileCropSize, mobileFocus || focus)}
      sizes="100vw"
      className={styles.mobileImage}
    />
  );

  return (
    <Container
      as="header"
      width="full"
      bgColor={isLightHero ? 'white' : 'black'}
      pb={8}
      className={styles.root}
    >
      <BlurryPoster
        heading={title}
        headingLevel="h1"
        headingFont={headingFont === 'serif' ? 'serif' : 'druk'}
        isSmallHeading={headingFont !== 'druk'}
        byline={byline}
        publishedDate={formattedDate}
        body={dek}
        imageSrc={filename}
        bgImageSrc={bgImageSrc}
        imageOnLeft={imageOnLeft}
        tabColor={paletteAccentColors[tabColorValue]}
        addDarkOverlay
      />
    </Container>
  );
};
