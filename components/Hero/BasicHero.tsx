import { cnb } from 'cnbuilder';
import { Container } from '@/components/Container';
import { Heading, SrOnlyText, Text } from '@/components/Typography';
import { ImageOverlay } from '@/components/ImageOverlay';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import * as styles from './BasicHero.styles';

/**
 * Basic page hero that allows for different hero styles (e.g., initiative landing and detailed pages)
 */
type BasicHeroProps = {
  title: string;
  isDrukHeading?: boolean;
  isSmallHeading?: boolean;
  superhead?: string;
  subheading?: string;
  imageSrc?: string;
  imageFocus?: string;
  heroContent?: React.ReactNode;
  paddingType?: styles.HeroPaddingType;
};

export const BasicHero = ({
  title,
  isDrukHeading,
  isSmallHeading,
  superhead,
  subheading,
  imageSrc,
  imageFocus,
  heroContent,
  paddingType,
}: BasicHeroProps) => (
  <Container
    width="full"
    bgColor={imageSrc ? undefined : 'black'}
    className={cnb(styles.root, styles.heroPaddings[paddingType])}
  >
    {imageSrc && (
      <>
        <ImageOverlay
          imageSrc={getProcessedImage(imageSrc, '2000x1000', imageFocus)}
          overlay="black-40"
          className="z-0 hidden xl:block"
          overlayClasses="hidden xl:block"
        />
        <ImageOverlay
          imageSrc={getProcessedImage(imageSrc, '1200x900', imageFocus)}
        overlay="black-40"
          className="z-0 xl:hidden"
          overlayClasses="xl:hidden"
        />
      </>
    )}
    <Container className={styles.contentWrapper}>
      {superhead && (
        <Text
          size={3}
          font="serif"
          weight="bold"
          align="center"
          leading="tight"
          color="white"
          aria-hidden
          className={styles.superhead}
        >
          {superhead}
        </Text>
      )}
      <Heading
        as="h1"
        font={isDrukHeading ? 'druk' : 'serif'}
        weight={isDrukHeading ? 'black' : 'bold'}
        align="center"
        leading={isDrukHeading ? 'none' : 'tight'}
        color="white"
        className={styles.heading(isDrukHeading, isSmallHeading)}
      >
        {superhead && <SrOnlyText>{`${superhead}: `}</SrOnlyText>}{title}
      </Heading>
      {subheading && (
        <Text
          size={2}
          align="center"
          leading="display"
          color="white"
          className={styles.subhead}
        >
          {subheading}
        </Text>
      )}
      {!!heroContent && (
        <div className={styles.content}>
          {heroContent}
        </div>
      )}
    </Container>
  </Container>
);
