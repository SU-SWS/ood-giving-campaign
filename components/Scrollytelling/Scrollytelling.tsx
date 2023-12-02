import { useRef } from 'react';
import { m, useScroll, useTransform } from 'framer-motion';
import { Container } from '@/components/Container';
import { Grid } from '@/components/Grid';
import { ImageOverlay } from '@/components/ImageOverlay';
import { WidthBox } from '@/components/WidthBox';
import { Heading, Text, type HeadingType } from '@/components/Typography';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import { type MarginType } from '@/utilities/datasource';


type ScrollytellingProps = React.HTMLAttributes<HTMLDivElement> & {
  heading?: string;
  headingLevel?: HeadingType;
  subheading?: string;
  content?: React.ReactNode;
  caption?: React.ReactNode;
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
}: ScrollytellingProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ['start center', 'end start'],
  });
  const animateOpacity = useTransform(scrollYProgress, [0, 0.1], ['0%', '100%']);
  const animateScale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  return (
    <Container width="full" mt={spacingTop} mb={spacingBottom} {...props}>
      <Container width="full" className="relative" bgColor="black">
        <m.div
          className="sticky top-0 h-screen w-full"
          style={{ scale: animateScale }}
        >
          <img
            src={getProcessedImage(bgImageSrc, '2000x0', bgImageFocus)}
            alt=""
            loading="eager"
            className="absolute w-full h-full object-cover top-0 left-0"
          />
          <m.div
            className="absolute w-full h-full top-0 left-0 bg-black-true/50"
            style={{ opacity: animateOpacity }}
          />
        </m.div>
        <div ref={contentRef} className="relative cc text-white z-10 rs-py-10">
          <div className="w-full sm:w-2/3 xl:w-1/2 mx-auto">
            <Heading as={headingLevel} size={5} color="white" align="center" className="mb-02em whitespace-pre-line">
              {heading}
            </Heading>
            <Text variant="subheading" align="center">
              {subheading}
            </Text>
            <div className="rs-mt-6 grid gap-y-30 md:gap-y-40 xl:gap-y-60">
              {children}
            </div>
          </div>
        </div>
      </Container>
      {caption && (
        <Container className="relative children:children:leading-display caption mt-07em children:max-w-prose-wide ml-0">
          {caption}
        </Container>
      )}
    </Container>
  );
};
