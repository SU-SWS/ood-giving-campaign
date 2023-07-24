import { cnb } from 'cnbuilder';
import {AnimateInView, AnimationType } from '../Animate';
import { CtaButton } from '../Cta/CtaButton';
import {
  Heading, HeadingType, Paragraph, Text,
} from '../Typography';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import * as styles from './PortraitCard.styles';

export type PortraitCardProps = React.HTMLAttributes<HTMLDivElement> & {
  heading?: string;
  headingLevel?: HeadingType;
  body?: string;
  quote?: string;
  source1?: string;
  source2?: string;
  imageSrc?: string;
  imageFocus?: string;
  curve?: styles.CurvesType;
  ctaLabel?: string;
  ctaSrText?: string;
  animation?: AnimationType;
  delay?: number;
};

export const PortraitCard = ({
  heading,
  headingLevel = 'h3',
  body,
  quote,
  source1,
  source2,
  imageSrc,
  imageFocus,
  curve,
  ctaLabel,
  ctaSrText,
  animation = 'none',
  delay,
  className,
  ...props
}: PortraitCardProps) => (
  <AnimateInView animation={animation} delay={delay}>
    <article
      className={cnb(styles.root, styles.curves[curve], className)}
      {...props}
    >
      <div>
        {imageSrc && (
          <div className={cnb(styles.imageWrapper)}>
            <img
              alt=""
              width={700}
              height={1400}
              loading="lazy"
              src={getProcessedImage(imageSrc, '700x1400', imageFocus)}
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
          {quote && (
            <Text as="blockquote" size={2} color="white" font="serif" weight="bold" leading="display">
              {`“${quote}”`}
            </Text>
          )}
          {source1 && (
            <Text variant="card" color="white" leading="snug" className="mt-06em">
              {source1}
            </Text>
          )}
          {source2 && (
            <Text variant="card" color="white" leading="snug">
              {source2}
            </Text>
          )}
          {ctaLabel && (
            <CtaButton
              color="white"
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
