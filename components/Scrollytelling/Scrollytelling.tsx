import { useRef } from 'react';
import {
  m, useScroll, useTransform, useWillChange,
} from 'framer-motion';
import { useWindowSize } from 'usehooks-ts';
import { AnimateInView } from '@/components/Animate';
import { Caption } from '@/components/Media/Caption';
import { Container } from '@/components/Container';
import { Heading, Text, type HeadingType } from '@/components/Typography';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import { type MarginType } from '@/utilities/datasource';
import { config } from '@/utilities/config';
import * as styles from './Scrollytelling.styles';

type ScrollytellingProps = React.HTMLAttributes<HTMLDivElement> & {
  heading?: string;
  headingLevel?: HeadingType;
  subheading?: string;
  content?: React.ReactNode;
  caption?: React.ReactNode;
  isLightCaption?: boolean;
  bgImageSrc?: string;
  bgImageFocus?: string;
  bgImageAlt?: string;
  imageEntrance?: styles.ImageEntranceType;
  imageWidth?: styles.imageWidthType;
  imageAlign?: styles.ImageAlignType;
  overlay?: styles.OverlayType;
  contentAlign?: styles.ContentAlignType;
  spacingTop?: MarginType;
  spacingBottom?: MarginType;
};

const cropImageWidths = {
  '100%': { width: 2000, height: 1200 },
  '60%': { width: 2000, height: 2000 },
  '50%': { width: 1800, height: 2000 },
  '40%': { width: 1600, height: 2000 },
};

export const Scrollytelling = ({
  heading,
  headingLevel = 'h2',
  subheading,
  caption,
  isLightCaption,
  bgImageSrc,
  bgImageFocus,
  bgImageAlt,
  imageEntrance,
  imageWidth = '100%',
  imageAlign = 'center',
  overlay,
  contentAlign = 'center',
  spacingTop,
  spacingBottom,
  children,
  ...props
}: ScrollytellingProps) => {
  const windowSize = useWindowSize();
  const isDesktop = windowSize.width >= config.breakpoints.lg;

  const willChange = useWillChange();
  const contentRef = useRef<HTMLDivElement>(null);

  const hasImageEntrance = !!imageEntrance && imageEntrance !== 'none';
  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ['start center', 'end start'],
  });
  let imageZoomStart = 1;
  if (imageEntrance === 'zoom-in') {
    imageZoomStart = 0.8;
  } else if (imageEntrance === 'zoom-out') {
    imageZoomStart = 1.1;
  }
  const animateDarkOverlayOpacity = useTransform(scrollYProgress, [0, 0.2], ['0%', '100%']);
  const animateImageScale = useTransform(scrollYProgress, [0, 0.3], [imageZoomStart, 1]);
  const animateFilterOpacity = useTransform(scrollYProgress, [0, 0.2], ['0', '100%']);
  const animateImageWidth = useTransform(scrollYProgress, [0, 0.3], ['100%', isDesktop ? imageWidth : '100%']);

  const cropWidth = cropImageWidths[imageWidth].width;
  const cropHeight = cropImageWidths[imageWidth].height;

  return (
    <Container width="full" mt={spacingTop} mb={spacingBottom} {...props}>
      <Container width="full" bgColor="black" className={styles.wrapper} >
        <m.div
          className={styles.imageWrapper}
          style={{
            scale: imageZoomStart !== 1 ? animateImageScale : undefined,
            willChange,
          }}
        >
          <picture>
            <source
              srcSet={getProcessedImage(bgImageSrc, `${cropWidth}x${cropHeight}`, bgImageFocus)}
              media="(min-width: 992px) and (orientation: landscape)"
              width={cropWidth}
              height={cropHeight}
            />
            <source
              srcSet={getProcessedImage(bgImageSrc, '1200x1800', bgImageFocus)}
              media="(max-width: 1199px) and (orientation: portrait)"
              width={1200}
              height={1800}
            />
            <source
              srcSet={getProcessedImage(bgImageSrc, '900x1600', bgImageFocus)}
              media="(min-width: 576px)"
              width={900}
              height={1600}
            />
            <source
              srcSet={getProcessedImage(bgImageSrc, '600x900', bgImageFocus)}
              media="(max-width: 575px)"
              width={600}
              height={900}
            />
            <m.img
              src={getProcessedImage(bgImageSrc, `${cropWidth}x${cropHeight}`, bgImageFocus)}
              alt={bgImageAlt || ''}
              width={cropWidth}
              height={cropHeight}
              style={{ width: animateImageWidth, willChange }}
              className={styles.image(imageAlign)}
            />
          </picture>
          <m.div
            className={styles.imageOverlay(overlay)}
            style={{ opacity: animateDarkOverlayOpacity, willChange }}
          />
          {hasImageEntrance && !imageEntrance?.includes('zoom') && (
            <m.div
              className={styles.filterOverlay(imageEntrance)}
              style={{ opacity: animateFilterOpacity, willChange }}
            />
          )}
        </m.div>
        <div ref={contentRef} className={styles.content}>
          <div className={styles.contentWrapper(contentAlign)}>
            {(heading || subheading) && (
              <AnimateInView animation="slideUp" delay={0.1} className={styles.header}>
                {heading && (
                  <Heading
                    as={headingLevel || 'h2'}
                    size={5}
                    color="white"
                    align="center"
                    className={styles.heading}
                  >
                    {heading}
                  </Heading>

                )}
                {subheading && (
                  <Text variant="subheading" align="center" className={styles.subhead}>
                    {subheading}
                  </Text>
                )}
              </AnimateInView>
            )}
            <div className={styles.children}>
              {children}
            </div>
          </div>
        </div>
      </Container>
      {caption && (
        <Caption as="div" caption={caption} isCaptionInset />
      )}
    </Container>
  );
};
