import { Container } from '@/components/Container';
import { BlurryPoster } from '@/components/BlurryPoster';
import { CreateBloks } from '@/components/CreateBloks';
import { Text } from '@/components/Typography';
import { type SbImageType, type SbTypographyProps } from '@/components/Storyblok/Storyblok.types';
import { type SbBlokData } from '@storyblok/react/rsc';
import { paletteAccentColors, type PaletteAccentHexColorType } from '@/utilities/colorPalettePlugin';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import { getNumBloks } from '@/utilities/getNumBloks';
import * as styles from './StoryHeroMvp.styles';

export type StoryHeroMvpProps = {
  title: string;
  superhead?: string;
  customHeading?: SbTypographyProps[];
  headingFont?: 'serif' | 'druk';
  isSmallHeading?: boolean;
  byline?: string;
  publishedDate?: string;
  dek?: string;
  heroImage?: SbImageType;
  bgImage?: SbImageType;
  bgImageAlt?: string;
  addBgBlur?: boolean;
  addDarkOverlay?: boolean;
  aspectRatio?: styles.ImageCropType;
  mobileImage?: SbImageType;
  mobileAspectRatio?: styles.ImageCropType;
  alt?: string;
  caption?: string;
  isVerticalHero?: boolean;
  isLeftImage?: boolean;
  isLightHero?: boolean;
  tabColor?: {
    value?: PaletteAccentHexColorType;
  }
  topics?: string[];
  heroTexturedBar?: SbBlokData[];
};

export const StoryHeroMvp = ({
  title,
  superhead,
  customHeading,
  headingFont,
  isSmallHeading,
  byline,
  dek,
  publishedDate,
  heroImage: { filename, focus } = {},
  mobileImage: { filename: mobileFilename, focus: mobileFocus } = {},
  bgImage: { filename: bgImageSrc, focus: bgImageFocus } = {},
  bgImageAlt,
  addBgBlur,
  addDarkOverlay,
  alt,
  caption,
  isVerticalHero = false,
  isLeftImage = false,
  isLightHero = false,
  aspectRatio = isVerticalHero ? '5x8' : '2x1',
  mobileAspectRatio = '1x1',
  tabColor: { value: tabColorValue } = {},
  heroTexturedBar,
}: StoryHeroMvpProps) => {
  const useTwoColLayout = isVerticalHero;
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
      className={styles.root}
    >
      <BlurryPoster
        type="hero"
        isTwoCol={useTwoColLayout}
        heading={title}
        superhead={superhead}
        customHeading={customHeading}
        headingLevel="h1"
        headingFont={headingFont === 'druk' ? 'druk' : 'serif'}
        isSmallHeading={isSmallHeading}
        byline={byline}
        publishedDate={formattedDate}
        body={dek}
        imageSrc={filename}
        imageFocus={focus}
        alt={alt}
        bgImageSrc={bgImageSrc}
        bgImageFocus={bgImageFocus}
        bgImageAlt={bgImageAlt}
        bgColor={isLightHero ? 'white' : 'black'}
        addBgBlur={addBgBlur}
        addDarkOverlay={addDarkOverlay}
        imageOnLeft={isLeftImage}
        tabColor={paletteAccentColors[tabColorValue]}
        caption={caption}
      />
      {!!getNumBloks(heroTexturedBar) && (
        <CreateBloks blokSection={heroTexturedBar} />
      )}
      {caption && (
        <Container bgColor="white" className="mt-06em">
          <Text
            id="story-hero-caption"
            color="black-80"
            variant="caption"
            leading="display"
            className="max-w-prose-wide text-black-70"
          >
            {caption}
          </Text>
        </Container>
      )}
    </Container>
  );
};
