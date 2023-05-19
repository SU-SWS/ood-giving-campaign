import React, { HTMLAttributes } from 'react';
import { dcnb } from 'cnbuilder';
import { AnimateInView, AnimationType } from '../Animate';
import { CtaLink } from '../Cta/CtaLink';
import { Heading, HeadingType, Paragraph } from '../Typography';
import { SbLinkType } from '../Storyblok/Storyblok.types';
import { getProcessedImage } from '../../utilities/getProcessedImage';
import * as styles from './VerticalCard.styles';
import { accentBgColors, AccentBgColorType } from '../../utilities/datasource';

export type VerticalCardProps = HTMLAttributes<HTMLDivElement> & {
  heading?: string;
  headingLevel?: HeadingType;
  headingFont?: 'serif' | 'druk';
  isSmallHeading?: boolean;
  body?: string;
  imageSrc?: string;
  imageFocus?: string;
  alt?: string;
  textColor?: styles.TextColorType;
  tabColor?: AccentBgColorType;
  ctaLabel?: string;
  href?: string;
  link?: SbLinkType;
  animation?: AnimationType;
  delay?: number;
};

export const VerticalCard = ({
  heading,
  headingLevel = 'h3',
  headingFont = 'serif',
  isSmallHeading,
  body,
  imageSrc,
  imageFocus,
  alt = '',
  textColor,
  tabColor,
  ctaLabel,
  link,
  href,
  animation,
  delay,
  className,
  ...props
}: VerticalCardProps) => (
  <AnimateInView animation={animation} delay={delay}>
    <article
      className={dcnb(styles.root, styles.textColors[textColor], className)}
      {...props}
    >
      {imageSrc && (
        <div className={styles.imageWrapper}>
          <img
            src={getProcessedImage(imageSrc, '600x600', imageFocus)}
            alt={alt}
            className={styles.image}
          />
        </div>
      )}
      {heading && (
        <Heading
          as={headingLevel}
          font={headingFont}
          size={isSmallHeading ? 3 : 4}
          leading="tight"
          className={styles.heading}
        >
          {(!ctaLabel && (link || href))
            ? (
              <CtaLink sbLink={link} href={href} color={textColor} className={styles.headingLink}>
                {heading}
              </CtaLink>
            ) : heading}
        </Heading>
      )}
      {tabColor && (
        <div className={dcnb(styles.tab, accentBgColors[tabColor])} />
      )}
      {body && (
        <Paragraph variant="card" noMargin>{body}</Paragraph>
      )}
      {ctaLabel && (link || href) && (
        <CtaLink
          variant="secondary"
          icon="triangle-right"
          animate="right"
          sbLink={link}
          href={href}
          className={styles.ctaLink}
        >
          {ctaLabel}
        </CtaLink>
      )}
    </article>
  </AnimateInView>
);
