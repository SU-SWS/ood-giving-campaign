import { type StoryblokRichtext } from 'storyblok-rich-text-react-renderer-ts';
import { Container } from '@/components/Container';
import { BlurryPoster } from '@/components/BlurryPoster';
import { CreateBloks } from '@/components/CreateBloks';
import { RichText } from '@/components/RichText';
import { Text } from '@/components/Typography';
import { type SbImageType, type SbTypographyProps } from '@/components/Storyblok/Storyblok.types';
import { type SbBlokData } from '@storyblok/react/rsc';
import { paletteAccentColors, type PaletteAccentHexColorType } from '@/utilities/colorPalettePlugin';
import { getNumBloks } from '@/utilities/getNumBloks';
import { hasRichText } from '@/utilities/hasRichText';
import{ type HeroOverlayType } from '@/utilities/datasource';
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
  //addDarkOverlay?: boolean;
  darkOverlay?: HeroOverlayType;
  alt?: string;
  caption?: StoryblokRichtext;
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
  bgImage: { filename: bgImageSrc, focus: bgImageFocus } = {},
  bgImageAlt,
  addBgBlur,
  // addDarkOverlay,
  darkOverlay,
  alt,
  caption,
  isVerticalHero = false,
  isLeftImage = false,
  isLightHero = false,
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

  const Caption = hasRichText(caption)
  ? <RichText textColor="black-70" wysiwyg={caption} className={styles.caption} />
  : undefined;

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
        // addDarkOverlay={addDarkOverlay}
        darkOverlay={darkOverlay}
        imageOnLeft={isLeftImage}
        tabColor={paletteAccentColors[tabColorValue]}
        hasCaption={hasRichText(caption)}
      />
      {!!getNumBloks(heroTexturedBar) && (
        <CreateBloks blokSection={heroTexturedBar} />
      )}
      {hasRichText(caption) && (
        <Container
          bgColor="white"
          // id is for aria-describedby in the images since we can't use figcaption here
          id="story-hero-caption"
          className={styles.captionWrapper}
        >
          {Caption}
        </Container>
      )}
    </Container>
  );
};
