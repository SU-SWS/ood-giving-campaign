import { type StoryblokRichtext } from 'storyblok-rich-text-react-renderer-ts';
import { AnimateInView } from '@/components/Animate';
import { Container } from '@/components/Container';
import { Heading, Text, SrOnlyText } from '@/components/Typography';
import { type SbImageType, type SbTypographyProps } from '@/components/Storyblok/Storyblok.types';
import { type SbBlokData } from '@storyblok/react/rsc';
import { paletteAccentColors, type PaletteAccentHexColorType } from '@/utilities/colorPalettePlugin';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import * as styles from './StoryHeroStacked.styles';

export type StoryHeroStackedProps = {
  title: string;
  superhead?: string;
  headingFont?: 'serif' | 'druk';
  isSmallHeading?: boolean;
  dek?: string;
  heroBgColor?: string; // Hex color value from Storyblok native color picker
  imageSrc?: string;
  imageFocus?: string;
  alt?: string;
  caption?: StoryblokRichtext;
  isLightHero?: boolean;
  tabColor?: {
    value?: PaletteAccentHexColorType;
  }
};

export const StoryHeroStacked = ({
  title,
  superhead,
  headingFont,
  isSmallHeading,
  dek,
  heroBgColor,
  imageSrc,
  imageFocus,
  alt,
  caption,
  isLightHero = false,
  tabColor: { value: tabColorValue } = {},
}: StoryHeroStackedProps) => {
  return (
    <Container
      width="full"
      className={styles.root}
      pt={10}
      style={{ backgroundColor: heroBgColor }}
    >
      {superhead && (
        <Text
          size={1}
          align="center"
          color={isLightHero ? 'black' : 'white'}
          // If there is a heading, superhead will be rendered as screen reader text as part of the heading
          aria-hidden
          className={styles.superhead}
        >
          {superhead}
        </Text>
      )}
      {title && (
        <Heading
          as="h1"
          align="center"
          color={isLightHero ? 'black' : 'white'}
          font={headingFont}
          leading={headingFont === 'druk' ? 'none' : 'tight'}
          className={styles.heading(isSmallHeading, headingFont)}
        >
          {superhead && <SrOnlyText>{`${superhead}:`}</SrOnlyText>}{title}
        </Heading>
      )}
      {imageSrc && (
        <AnimateInView animation="zoomSharpen" duration={1}>
          <picture>
            <source
              srcSet={getProcessedImage(imageSrc, '2000x0', imageFocus)}
              media="(min-width: 992px)"
              width={2000}
            />
            <source
              srcSet={getProcessedImage(imageSrc, '900x0', imageFocus)}
              media="(min-width: 576px)"
              width={900}
              height={900}
            />
            <source
              srcSet={getProcessedImage(imageSrc, '600x0', imageFocus)}
              media="(max-width: 575px)"
              width={600}
              height={600}
            />
            <img
              src={getProcessedImage(imageSrc, '2000x0', imageFocus)}
              alt={alt || ''}
              // aria-describedby={hasCaption && !!alt ? 'story-hero-caption' : undefined}
              fetchPriority="high"
              // className={styles.image}
            />
          </picture>
        </AnimateInView>
)}
    </Container>
  );
};
