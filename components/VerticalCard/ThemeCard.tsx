import { cnb } from 'cnbuilder';
import { AnimateInView, type AnimationType } from '../Animate';
import { CtaLink } from '../Cta/CtaLink';
import { Heading, type HeadingType, Paragraph } from '../Typography';
import { SbLinkType } from '../Storyblok/Storyblok.types';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import * as styles from './ThemeCard.styles';

export type ThemeCardProps = React.HTMLAttributes<HTMLDivElement> & {
  heading?: string;
  headingLevel?: HeadingType;
  body?: string;
  imageSrc?: string;
  imageFocus?: string;
  ctaLabel?: string;
  ctaSrText?: string;
  href?: string;
  link?: SbLinkType;
  animation?: AnimationType;
  delay?: number;
};

export const ThemeCard = ({
  heading,
  headingLevel = 'h3',
  body,
  imageSrc,
  imageFocus,
  ctaLabel,
  ctaSrText,
  link,
  href = '',
  animation = 'none',
  delay,
  className,
  ...props
}: ThemeCardProps) => (
  <AnimateInView animation={animation} delay={delay}>
    <article
      className={cnb(styles.root, className)}
      {...props}
    >
      <div className={styles.cardWrapper}>
        {imageSrc && (
          <div className={styles.imageWrapper}>
            <img
              alt=""
              width={600}
              height={600}
              loading="lazy"
              src={getProcessedImage(imageSrc, '600x600', imageFocus)}
              className={styles.image}
            />
          </div>
        )}
        {heading && (
          <Heading
            as={headingLevel}
            size={2}
            leading="tight"
            className={styles.heading}
          >
            {heading}
          </Heading>
        )}
        {body && (
          <Paragraph variant="card" noMargin>{body}</Paragraph>
        )}
        {ctaLabel && (link || href) && (
          <CtaLink
            variant="solid"
            curve="br"
            icon="arrow-right"
            animate="right"
            srText={ctaSrText}
            sbLink={link}
            href={href}
            className={styles.ctaLink}
          >
            {ctaLabel}
          </CtaLink>
        )}
      </div>
    </article>
  </AnimateInView>
);
