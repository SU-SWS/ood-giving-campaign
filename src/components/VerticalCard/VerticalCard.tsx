import React, { HTMLAttributes } from 'react';
import { cnb } from 'cnbuilder';
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
  tabColor?: AccentBgColorType;
  ctaLabel?: string;
  ctaSrText?: string;
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
  tabColor,
  ctaLabel,
  ctaSrText,
  link,
  href,
  animation = 'none',
  delay,
  className,
  ...props
}: VerticalCardProps) => (
  <AnimateInView animation={animation} delay={delay}>
    <article
      className={cnb(styles.root, className)}
      {...props}
    >
      {imageSrc && (
        <div className={styles.imageWrapper}>
          <img
            alt=""
            src={getProcessedImage(imageSrc, '600x600', imageFocus)}
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
              <CtaLink sbLink={link} href={href} className={styles.headingLink}>
                {heading}
              </CtaLink>
            ) : heading}
        </Heading>
      )}
      {tabColor && (
        <div className={cnb(styles.tab, accentBgColors[tabColor])} />
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
    </article>
  </AnimateInView>
);
