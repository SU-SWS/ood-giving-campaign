import { AnimateInView } from '@/components/Animate';
import { Container } from '@/components/Container';
import {
  Heading, Paragraph, Text, SrOnlyText,
} from '@/components/Typography';
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
  hasCaption?: boolean;
  isLightHero?: boolean;
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
  hasCaption,
  isLightHero = false,
}: StoryHeroStackedProps) => {
  return (
    <Container
      width="full"
      className={styles.root}
      pt={10}
      style={{ backgroundColor: heroBgColor }}
    >
      <Container className="mt-40 md:-mt-60 xl:mt-0">
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
            leading={headingFont === 'druk' ? 'druk' : 'tight'}
            className={styles.heading(isSmallHeading, headingFont)}
          >
            {superhead && <SrOnlyText>{`${superhead}:`}</SrOnlyText>}{title}
          </Heading>
        )}
        {dek && (
          <Paragraph
            variant="overview"
            weight="normal"
            leading="display"
            align="center"
            className="max-w-900 text-balance mx-auto rs-mt-3"
            color={isLightHero ? 'black' : 'white'}
            noMargin
          >
            {dek}
          </Paragraph>
        )}
      </Container>
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
              srcSet={getProcessedImage(imageSrc, '575x0', imageFocus)}
              media="(max-width: 575px)"
              width={575}
              height={600}
            />
            <source
              srcSet={getProcessedImage(imageSrc, '430x0', imageFocus)}
              media="(max-width: 430px)"
              width={430}
              height={600}
            />
            <img
              src={getProcessedImage(imageSrc, '2000x0', imageFocus)}
              alt={alt || ''}
              aria-describedby={hasCaption ? 'story-hero-caption' : undefined}
              fetchPriority="high"
              className="rs-mt-4 w-full"
            />
          </picture>
        </AnimateInView>
      )}
    </Container>
  );
};
