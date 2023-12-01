import { cnb } from 'cnbuilder';
import { type SbBlokData } from '@storyblok/react/rsc';
import { Container } from '@/components/Container';
import { Grid } from '@/components/Grid';
import { ImageOverlay } from '@/components/ImageOverlay';
import { Heading, Text, type HeadingType } from '@/components/Typography';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import { type MarginType } from '@/utilities/datasource';


type ScrollytellingProps = React.HTMLAttributes<HTMLDivElement> & {
  heading?: string;
  headingLevel?: HeadingType;
  subheading?: string;
  content?: React.ReactNode;
  caption?: string;
  bgImageSrc?: string;
  bgImageFocus?: string;
  bgImageAlt?: string;
  contentAlign?: 'left' | 'center' | 'right';
  spacingTop?: MarginType;
  spacingBottom?: MarginType;
};

export const Scrollytelling = ({
  heading,
  headingLevel = 'h2',
  subheading,
  caption,
  bgImageSrc,
  bgImageFocus,
  bgImageAlt,
  contentAlign = 'left',
  spacingTop,
  spacingBottom,
  children,
  ...props
}: ScrollytellingProps) => (
  <Container width="full" className="relative" bgColor="black" mt={spacingTop} mb={spacingBottom} {...props}>
    <div className="sticky top-0 h-screen w-full">
      <ImageOverlay
        imageSrc={getProcessedImage(bgImageSrc, '2000x0', bgImageFocus)}
        overlay="black-40"
      />
    </div>
    <div className="relative w-2/3 lg:w-1/3 mx-auto text-white z-10 rs-py-10">
      <Heading as={headingLevel} color="white" align="center">
        {heading}
      </Heading>
      <Text variant="subheading" align="center">
        {subheading}
      </Text>
      {children}
    </div>
  </Container>
);