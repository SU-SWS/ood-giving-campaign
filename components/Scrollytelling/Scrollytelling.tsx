import { useRef } from 'react';
import {
  m, useScroll, useTransform, useWillChange,
} from 'framer-motion';
import { Container } from '@/components/Container';
import { Heading, Text, type HeadingType } from '@/components/Typography';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import { type MarginType } from '@/utilities/datasource';
import * as styles from './Scrollytelling.styles';
import { AnimateInView } from '../Animate';


type ScrollytellingProps = React.HTMLAttributes<HTMLDivElement> & {
  heading?: string;
  headingLevel?: HeadingType;
  subheading?: string;
  content?: React.ReactNode;
  caption?: React.ReactNode;
  bgImageSrc?: string;
  bgImageFocus?: string;
  bgImageAlt?: string;
  overlay?: styles.OverlayType;
  contentAlign?: styles.ContentAlignType;
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
  overlay,
  contentAlign = 'center',
  spacingTop,
  spacingBottom,
  children,
  ...props
}: ScrollytellingProps) => {
  const willChange = useWillChange();
  const contentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ['start center', 'end start'],
  });
  const animateOpacity = useTransform(scrollYProgress, [0, 0.1], ['0%', '100%']);
  const animateScale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  return (
    <Container width="full" mt={spacingTop} mb={spacingBottom} {...props}>
      <Container width="full" bgColor="black" className={styles.wrapper} >
        <m.div
          className={styles.imageWrapper}
          style={{ scale: animateScale, willChange }}
        >
          <img
            src={getProcessedImage(bgImageSrc, '2000x1200', bgImageFocus)}
            alt={bgImageAlt || ''}
            width={2000}
            height={1200}
            className={styles.image}
          />
          <img
            src={getProcessedImage(bgImageSrc, '900x1600', bgImageFocus)}
            alt={bgImageAlt || ''}
            width={900}
            height={1600}
            className={styles.imageMobile}
          />
          <m.div
            className={styles.imageOverlay(overlay)}
            style={{ opacity: animateOpacity, willChange }}
          />
        </m.div>
        <div ref={contentRef} className={styles.content}>
          <div className={styles.contentWrapper(contentAlign)}>
            {(heading || subheading) && (
              <AnimateInView animation="slideUp" delay={0.1} className={styles.header}>
                {heading && (
                  <Heading
                    as={headingLevel}
                    size={5}
                    color="white"
                    align="center"
                    className={styles.heading}
                  >
                    {heading}
                  </Heading>

                )}
                {subheading && (
                  <Text variant="subheading" align="center">
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
        <Container className={styles.caption}>
          {caption}
        </Container>
      )}
    </Container>
  );
};
