import { Container } from '@/components/Container';
import { Heading, SrOnlyText, Text } from '@/components/Typography';
import { ImageOverlay } from '@/components/ImageOverlay';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import * as styles from './BasicHero.styles';

/**
 * Temporary hero for MVP basic page
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
}: BasicHeroProps) => (
  <Container
    width="full"
    bgColor={imageSrc ? undefined : 'black'}
    className="relative break-words bg-black-70 py-[34vw] md:py-[24vw] xl:py-[16vw] 3xl:py-[26rem]"
  >
    {imageSrc && (
      <>
        <ImageOverlay
          imageSrc={getProcessedImage(imageSrc, '2000x1000', imageFocus)}
          overlay="black-40"
          className="z-0 hidden lg:block"
          overlayClasses="hidden lg:block"
        />
        <ImageOverlay
          imageSrc={getProcessedImage(imageSrc, '1000x1000', imageFocus)}
        overlay="black-40"
          className="z-0 lg:hidden"
          overlayClasses="lg:hidden"
        />
      </>
    )}
    <Container className="*:mx-auto">
      {superhead && (
        <Text
          size={3}
          font="serif"
          weight="bold"
          align="center"
          leading="tight"
          color="white"
          aria-hidden
          className="relative z-10 xl:max-w-900 mx-auto rs-mb-0"
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
          className="relative z-10 xl:max-w-900 mx-auto rs-mt-1 text-shadow-sm"
        >
          {subheading}
        </Text>
      )}
      {!!heroContent && (
        <div className="rs-mt-4 w-fit">
          {heroContent}
        </div>
      )}
    </Container>
  </Container>
);
