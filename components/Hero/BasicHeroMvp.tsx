import { Container } from '@/components/Container';
import { Heading, Text } from '@/components/Typography';
import { ImageOverlay } from '@/components/ImageOverlay';
import { getProcessedImage } from '@/utilities/getProcessedImage';

/**
 * Temporary hero component for me to layout a generic page for testing
 */
type BasicHeroMvpProps = {
  title: string;
  subheading?: string;
  imageSrc?: string;
  imageFocus?: string;
};

export const BasicHeroMvp = ({
  title,
  imageSrc,
  imageFocus,
}: BasicHeroMvpProps) => (
  <Container width="full" className="relative bg-black-70 py-[40vw] md:py-[30vw] xl:py-[20vw] 3xl:py-[34rem]">
    {imageSrc && (
      <ImageOverlay
        imageSrc={getProcessedImage(imageSrc, '2000x1200', imageFocus)}
        overlay="black-30"
        className="z-0"
      />
    )}
    <Container>
      <Heading
        as="h1"
        font="serif"
        align="center"
        leading="tight"
        color="white"
        className="relative z-10 max-w-1200 mx-auto mb-0 fluid-type-5 md:fluid-type-7"
      >
        {title}
      </Heading>
    </Container>
  </Container>
);
