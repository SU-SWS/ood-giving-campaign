import React, { HTMLAttributes } from 'react';
import { dcnb } from 'cnbuilder';
import { AnimateInView, AnimationType } from '../Animate';
import { CtaLink } from '../Cta/CtaLink';
import { Heading, HeadingType, Paragraph } from '../Typography';
import { SbLinkType } from '../Storyblok/Storyblok.types';
import { TextColorType } from './VerticalCard.styles';
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
  textColor?: TextColorType;
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
      className={dcnb('su-group su-relative su-z-10', styles.textColors[textColor], className)}
      {...props}
    >
      {imageSrc && (
        <div className="su-transition-all su-aspect-w-1 su-aspect-h-1 su-rounded-none group-hover:su-rounded-tl-[10rem] group-hover:su-rounded-br-[10rem] group-focus-within:su-rounded-tl-[10rem] group-focus-within:su-rounded-br-[10rem] su-overflow-hidden">
          <img
            src={getProcessedImage(imageSrc, '600x600', imageFocus)}
            alt={alt}
            className="su-object-cover su-w-full su-h-full"
          />
        </div>
      )}
      {heading && (
        <Heading
          as={headingLevel}
          font={headingFont}
          size={isSmallHeading ? 3 : 4}
          leading="tight"
          className="su-rs-mt-1 su-rs-mb-neg1"
        >
          {(!ctaLabel && (link || href))
            ? (
              <CtaLink sbLink={link} href={href} color={textColor} className="su-stretched-link su-no-underline !su-font-bold">
                {heading}
              </CtaLink>
            ) : heading}
        </Heading>
      )}
      {tabColor && (
        <div className={dcnb(styles.tab, accentBgColors[tabColor])} />
      )}
      {body && (
        <Paragraph variant="big" leading="snug" noMargin>{body}</Paragraph>
      )}
      {ctaLabel && (link || href) && (
        <CtaLink
          color={textColor}
          icon="triangle-right"
          animate="right"
          sbLink={link}
          href={href}
          uppercase
          className="su-inline-block su-w-fit su-stretched-link su-rs-mt-1"
        >
          {ctaLabel}
        </CtaLink>
      )}
    </article>
  </AnimateInView>
);
