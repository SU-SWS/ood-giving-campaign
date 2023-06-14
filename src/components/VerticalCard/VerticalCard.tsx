import React, { HTMLAttributes } from 'react';
import { cnb } from 'cnbuilder';
import { AnimateInView, AnimationType } from '../Animate';
import { CtaLink } from '../Cta/CtaLink';
import { Heading, HeadingType, Paragraph } from '../Typography';
import { SbLinkType } from '../Storyblok/Storyblok.types';
import { getProcessedImage } from '../../utilities/getProcessedImage';
import * as styles from './VerticalCard.styles';
import { accentBorderColors, AccentBorderColorType } from '../../utilities/datasource';

/**
 * Currently, both Theme Card and Story Card use this component.
 */

export type VerticalCardProps = HTMLAttributes<HTMLDivElement> & {
  heading?: string;
  headingLevel?: HeadingType;
  isSmallHeading?: boolean;
  body?: string;
  imageSrc?: string;
  imageFocus?: string;
  alt?: string;
  tabColor?: AccentBorderColorType;
  ctaLabel?: string;
  ctaSrText?: string;
  href?: string;
  link?: SbLinkType;
  taxonomy?: string[];
  animation?: AnimationType;
  delay?: number;
};

export const VerticalCard = ({
  heading,
  headingLevel = 'h3',
  isSmallHeading,
  body,
  imageSrc,
  imageFocus,
  tabColor,
  ctaLabel,
  ctaSrText,
  link,
  href,
  taxonomy,
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
      <div className={styles.cardWrapper}>
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
            size={isSmallHeading ? 3 : 4}
            leading="tight"
            className={cnb(styles.heading(tabColor), accentBorderColors[tabColor])}
          >
            {(!ctaLabel && (link || href))
              ? (
                <CtaLink sbLink={link} href={href} className={styles.headingLink}>
                  {heading}
                </CtaLink>
              ) : heading}
          </Heading>
        )}
        {/* {tabColor && (
        <div className={cnb(styles.tab, accentBgColors[tabColor])} />
      )} */}
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
      {taxonomy?.length > 0 && (
        <ul className={styles.taxonomy}>
          {taxonomy.map((item) => (
            <li key={item} className={styles.taxonomyItem}>
              <CtaLink href={`tag/${item}`} variant="storyCardTag">{item}</CtaLink>
            </li>
          ))}
        </ul>
      )}
    </article>
  </AnimateInView>
);
