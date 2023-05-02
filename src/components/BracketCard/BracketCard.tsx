import React, { HTMLAttributes } from 'react';
import { dcnb } from 'cnbuilder';
// import { AnimateInView, AnimationType } from '../Animate';
import { CtaLink } from '../Cta/CtaLink';
import { FlexBox } from '../FlexBox';
import { Heading, HeadingType, Paragraph } from '../Typography';
import { SbLinkType } from '../Storyblok/Storyblok.types';
import { getProcessedImage } from '../../utilities/getProcessedImage';
import { accentBgColors, AccentBgColorType } from '../../utilities/datasource';
import * as styles from './BracketCard.styles';

export type BracketCardProps = HTMLAttributes<HTMLDivElement> & {
  heading?: string;
  headingLevel?: HeadingType;
  isSmallHeading?: boolean;
  body?: string;
  imageSrc?: string;
  imageFocus?: string;
  alt?: string;
  textOnLeft?: boolean;
  textColor?: styles.TextColorType;
  tabColor?: AccentBgColorType;
  tabBgImage?: string;
  ctaLabel?: string;
  href?: string;
  link?: SbLinkType;
};

export const BracketCard = ({
  heading,
  headingLevel = 'h3',
  isSmallHeading,
  body,
  imageSrc,
  imageFocus,
  alt = '',
  textOnLeft,
  textColor,
  tabColor,
  ctaLabel,
  link,
  href,
  className,
  ...props
}: BracketCardProps) => (
  <article className={dcnb(styles.root, className)} {...props}>
    {imageSrc && (
      <div className={styles.imageWrapper}>
        <img
          src={getProcessedImage(imageSrc, '1000x800', imageFocus)}
          alt={alt}
          className={styles.image}
        />
      </div>
    )}
    <FlexBox direction="col" className={styles.contentWrapper}>
      {heading && (
        <Heading
          as={headingLevel}
          size={isSmallHeading ? 5 : 6}
          leading="tight"
          className={styles.heading}
        >
          {heading}
        </Heading>
      )}
      {tabColor && (
        <div className={dcnb(styles.tab, accentBgColors[tabColor])} />
      )}
      {body && (
        <Paragraph noMargin className="su-grow xl:su-max-w-400">{body}</Paragraph>
      )}
      {ctaLabel && (link || href) && (
        <CtaLink
          color={textColor}
          icon="triangle-right"
          animate="right"
          variant="ghost"
          sbLink={link}
          href={href}
          uppercase
          className={styles.ctaLink}
        >
          {ctaLabel}
        </CtaLink>
      )}
    </FlexBox>
  </article>
);
