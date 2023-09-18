import { cnb } from 'cnbuilder';
import {AnimateInView, type AnimationType } from '../Animate';
import { CtaButton } from '../Cta/CtaButton';
import {
  Heading, type HeadingType, Paragraph, Text,
} from '../Typography';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import * as styles from './ChangemakerCard.styles';
import { ImageOverlay } from '../ImageOverlay';

export type ChangemakerCardProps = React.HTMLAttributes<HTMLDivElement> & {
  heading?: string;
  headingLevel?: HeadingType;
  body?: string;
  imageSrc?: string;
  imageFocus?: string;
  ctaLabel?: string;
  ctaSrText?: string;
  animation?: AnimationType;
  delay?: number;
  // children serves as what's on the back of the card
  children?: React.ReactNode;
};

export const ChangemakerCard = ({
  heading,
  headingLevel = 'h3',
  body,
  imageSrc,
  imageFocus,
  ctaLabel,
  ctaSrText,
  animation = 'none',
  delay,
  children,
  className,
  ...props
}: ChangemakerCardProps) => (
  <AnimateInView animation={animation} delay={delay}>
    <article
      className={cnb(styles.root, className)}
      {...props}
    >
      <div className={styles.cardInner}>
        {/* Front of the card */}
        <div className={styles.cardFront}>
          {imageSrc && (
            <div className={cnb(styles.imageWrapper)}>
              <ImageOverlay
                imageSrc={getProcessedImage(imageSrc, '500x1000', imageFocus)}
                overlay="black-gradient"
              />
            </div>
          )}
          <div className={styles.content}>
            {heading && (
              <Heading
                as={headingLevel}
                size={3}
                leading="tight"
                align="center"
                className={styles.heading}
              >
                {heading}
              </Heading>
            )}
            {body && (
              <Paragraph variant="card" align="center" noMargin>{body}</Paragraph>
            )}
            {ctaLabel && (
              <CtaButton
                color="white"
                variant="link"
                icon="arrow-right"
                srText={ctaSrText}
                className={styles.cta}
              >
                {ctaLabel}
              </CtaButton>
            )}
          </div>
        </div>
        {/* Back of the card */}
        <div className={styles.cardBack}>
          {children}
        </div>
      </div>
    </article>
  </AnimateInView>
);
