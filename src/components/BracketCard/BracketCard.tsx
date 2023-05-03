import React, { HTMLAttributes } from 'react';
import { dcnb } from 'cnbuilder';
// import { AnimateInView, AnimationType } from '../Animate';
import { BracketCurve } from '../Bracket/BracketCurve';
import { CtaLink } from '../Cta/CtaLink';
import { FlexBox } from '../FlexBox';
import { Grid } from '../Grid';
import { Heading, HeadingType, Paragraph } from '../Typography';
import { SbLinkType } from '../Storyblok/Storyblok.types';
import { getProcessedImage } from '../../utilities/getProcessedImage';
import { accentBgColors, AccentBgColorType } from '../../utilities/datasource';
import * as styles from './BracketCard.styles';

type BracketCardProps = HTMLAttributes<HTMLDivElement> & {
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
    <Grid lg={12} className="su-absolute su-top-0 lg:su-bottom-[4vw] 3xl:su-bottom-70 su-w-full">
      <FlexBox direction="col" className="su-relative su-z-10 lg:su-col-span-2 lg:su-col-start-2 su-w-[120%]">
        <BracketCurve />
        <div className="su-grow su-border-l-2 su-border-r-2 su-border-white su-w-[calc(83%_+_0.2rem)]" />
        <BracketCurve corner="bl" />
      </FlexBox>
      <div className="su-relative su-z-10 lg:su-col-span-9 lg:su-col-start-4 su-border-b-2 su-border-white">
        <FlexBox
          direction="col"
          alignItems={textOnLeft ? 'start' : 'end'}
          className={styles.contentWrapper(textOnLeft)}
        >
          {heading && (
            <Heading
              as={headingLevel}
              // size={isSmallHeading ? 5 : 6}
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
            <Paragraph noMargin leading="snug" className="su-grow lg:su-pl-20 xl:su-pl-30 lg:su-max-w-[55%] lg:su-text-16 xl:su-text-20 2xl:su-text-23">
              {body}
            </Paragraph>
          )}
          {ctaLabel && (link || href) && (
            <CtaLink
              color={textColor}
              icon="triangle-right"
              animate="right"
              variant="ghost"
              sbLink={link}
              href={href}
              className={styles.ctaLink}
            >
              {ctaLabel}
            </CtaLink>
          )}
        </FlexBox>
      </div>
    </Grid>
    {imageSrc && (
      <Grid lg={12} className="lg:su-pt-[6vw] 3xl:su-pt-100">
        <div className={styles.imageWrapper}>
          <div className={styles.imageAspectRatio}>
            <img
              src={getProcessedImage(imageSrc, '900x750', imageFocus)}
              alt={alt}
              loading="lazy"
              className={styles.image}
            />
          </div>
        </div>
      </Grid>
    )}
  </article>
);
