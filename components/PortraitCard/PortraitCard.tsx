import { cnb } from 'cnbuilder';
import { AnimateInView, AnimationType } from '../Animate';
import { CtaButton } from '../Cta/CtaButton';
import { Heading, HeadingType, Paragraph } from '../Typography';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import * as styles from './PortraitCard.styles';

export type PortraitCardProps = React.HTMLAttributes<HTMLDivElement> & {
  heading?: string;
  headingLevel?: HeadingType;
  body?: string;
  imageSrc?: string;
  imageFocus?: string;
  ctaLabel?: string;
  ctaSrText?: string;
  animation?: AnimationType;
  delay?: number;
};

export const PortraitCard = ({
  heading,
  headingLevel = 'h3',
  body,
  imageSrc,
  imageFocus,
  ctaLabel,
  ctaSrText,
  animation = 'none',
  delay,
  className,
  ...props
}: PortraitCardProps) => (
  <AnimateInView animation={animation} delay={delay}>
    <article
      className={cnb(styles.root, className)}
      {...props}
    >
      <div className={styles.wrapper}>
        {imageSrc && (
          <div className={styles.imageWrapper}>
            <img
              alt=""
              width={700}
              height={1400}
              loading="lazy"
              src={getProcessedImage(imageSrc, '700x1400', imageFocus)}
              className={styles.image}
            />
          </div>
        )}
        <div className={styles.content}>
          {heading && (
            <Heading
              as={headingLevel}
              leading="tight"
              className={styles.heading}
            >
              {heading}
            </Heading>
          )}
          {body && (
            <Paragraph variant="card" noMargin>{body}</Paragraph>
          )}
          {ctaLabel && (
            <CtaButton
              variant="link"
              icon="arrow-right"
              srText={ctaSrText}
              className={styles.ctaLink}
            >
              {ctaLabel}
            </CtaButton>
          )}
        </div>
      </div>
    </article>
  </AnimateInView>
);
