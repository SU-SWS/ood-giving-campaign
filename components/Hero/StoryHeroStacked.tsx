import { AnimateInView } from '@/components/Animate';
import { Container } from '@/components/Container';
import {
  Heading, Paragraph, Text, SrOnlyText,
} from '@/components/Typography';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import { getSbImageSize } from '@/utilities/getSbImageSize';
import * as styles from './StoryHeroStacked.styles';

export type StoryHeroStackedProps = {
  title: string;
  superhead?: string;
  headingFont?: 'serif' | 'druk';
  isSmallHeading?: boolean;
  dek?: string;
  byline?: string;
  publishedDate?: string;
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
  byline,
  publishedDate,
  heroBgColor,
  imageSrc,
  imageFocus,
  alt,
  hasCaption,
  isLightHero = false,
}: StoryHeroStackedProps) => {
  // We keep the original image aspect ratio
  const imageSize = getSbImageSize(imageSrc) || { width: 0, height: 0 };
  const { width: imageWidth, height: imageHeight } = imageSize;

  const dateTime = publishedDate && new Date(publishedDate);
  const formattedDate = dateTime && dateTime.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
  // We're using the date only (no time) version of the date picker so trimming the time off
  const date = publishedDate?.slice(0, 10);

  return (
    <Container
      width="full"
      className={styles.root}
      pt={10}
      style={{ backgroundColor: heroBgColor || '#888' }}
    >
      <Container className={styles.contentWrapper}>
        {superhead && (
          <AnimateInView animation="slideUp">
            <Text
              size={1}
              align="center"
              color={isLightHero ? 'black' : 'white'}
              // If there is a heading, superhead will be rendered as screen reader text as part of the heading
              aria-hidden
              className={styles.superhead(isLightHero)}
            >
              {superhead}
            </Text>
          </AnimateInView>
        )}
        {title && (
          <AnimateInView animation="slideUp" delay={0.1}>
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
          </AnimateInView>
        )}
        {dek && (
          <AnimateInView animation="slideUp" delay={0.2}>
            <Paragraph
              variant="overview"
              weight="normal"
              leading="display"
              align="center"
              className={styles.dek}
              color={isLightHero ? 'black' : 'white'}
              noMargin
            >
              {dek}
            </Paragraph>
          </AnimateInView>
        )}
        {(byline || publishedDate) && (
          <AnimateInView animation="slideUp" delay={0.3} className={styles.metadata}>
            {byline && (
              <Text align="center" color={isLightHero ? 'black' : 'white'}>{byline}</Text>
            )}
            {date && (
              <Text as="time"
                dateTime={date}
                align="center"
                color={isLightHero ? 'black' : 'white'}
                className="mx-auto block"
              >
                {formattedDate}
              </Text>
            )}
          </AnimateInView>
        )}
      </Container>
      {imageSrc && (
        <AnimateInView animation="zoomSharpen" duration={1}>
          <picture>
            <source
              srcSet={getProcessedImage(imageSrc, '2000x0', imageFocus)}
              media="(min-width: 1500px)"
            />
            <source
              srcSet={getProcessedImage(imageSrc, '1500x0', imageFocus)}
              media="(min-width: 1200px)"
            />
            <source
              srcSet={getProcessedImage(imageSrc, '1200x0', imageFocus)}
              media="(min-width: 768px)"
            />
            <source
              srcSet={getProcessedImage(imageSrc, '800x0', imageFocus)}
              media="(min-width: 576px)"
            />
            <source
              srcSet={getProcessedImage(imageSrc, '600x0', imageFocus)}
              media="(max-width: 575px)"
            />
            <img
              src={getProcessedImage(imageSrc, '2000x0', imageFocus)}
              alt={alt || ''}
              aria-describedby={hasCaption ? 'story-hero-caption' : undefined}
              fetchPriority="high"
              width={imageWidth}
              height={imageHeight}
              className={styles.image}
            />
          </picture>
        </AnimateInView>
      )}
    </Container>
  );
};
