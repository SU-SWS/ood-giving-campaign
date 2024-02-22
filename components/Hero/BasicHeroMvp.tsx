import { Container } from '@/components/Container';
import { Heading, Text } from '@/components/Typography';
import { ImageOverlay } from '@/components/ImageOverlay';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import { subhead } from '../Scrollytelling';

/**
 * Temporary hero for MVP basic page
 */
type BasicHeroMvpProps = {
  title: string;
  subheading?: string;
  imageSrc?: string;
  imageFocus?: string;
  heroContent?: React.ReactNode;
};

export const BasicHeroMvp = ({
  title,
  subheading,
  imageSrc,
  imageFocus,
  heroContent,
}: BasicHeroMvpProps) => (
  <Container width="full" bgColor={imageSrc ? undefined : 'black'} className="relative bg-black-70 py-[34vw] md:py-[24vw] xl:py-[16vw] 3xl:py-[26rem]">
    {imageSrc && (
      <>
        <ImageOverlay
          imageSrc={getProcessedImage(imageSrc, '2000x1200', imageFocus)}
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
      <Heading
        as="h1"
        font="serif"
        align="center"
        leading="tight"
        color="white"
        className="relative z-10 max-w-1200 mx-auto fluid-type-6 md:fluid-type-7 mb-0 text-balance"
      >
        {title}
      </Heading>
      {subheading && (
        <Text
          size={2}
          align="center"
          leading="display"
          color="white"
          className="relative z-10 xl:max-w-900 mx-auto rs-mt-1"
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
