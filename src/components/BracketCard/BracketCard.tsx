import React, { HTMLAttributes } from 'react';
import { dcnb } from 'cnbuilder';
// import { AnimateInView, AnimationType } from '../Animate';
import { Bracket } from '../Bracket';
import { CtaLink } from '../Cta/CtaLink';
import { FlexBox } from '../FlexBox';
import { Grid } from '../Grid';
import { Heading, HeadingType, Paragraph } from '../Typography';
import { SbLinkType } from '../Storyblok/Storyblok.types';
import { getProcessedImage } from '../../utilities/getProcessedImage';
import {
  accentBgColors, AccentBgColorType, marginBottoms, MarginType,
} from '../../utilities/datasource';
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
  link?: SbLinkType;
  href?: string;
  spacingBottom?: MarginType;
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
  spacingBottom = 'none',
  className,
  ...props
}: BracketCardProps) => (
  <article
    className={dcnb(
      styles.root,
      marginBottoms[spacingBottom],
      className,
    )}
    {...props}
  >
    <Grid lg={12} className={styles.grid}>
      <Bracket isClose={textOnLeft} className={styles.bracket(textOnLeft)} />
      <div className={styles.contentCard(textOnLeft)}>
        <FlexBox
          direction="col"
          alignItems={textOnLeft ? 'start' : 'end'}
          className={styles.contentWrapper(textOnLeft, isSmallHeading)}
        >
          {heading && (
            <Heading
              as={headingLevel}
              leading="tight"
              align={textOnLeft ? 'left' : 'right'}
              className={styles.heading(isSmallHeading)}
            >
              {heading}
            </Heading>
          )}
          {tabColor && (
            <div className={dcnb(styles.tab, accentBgColors[tabColor])} />
          )}
          {body && (
            <Paragraph
              noMargin
              leading="snug"
              align={textOnLeft ? 'left' : 'right'}
              className={styles.body(textOnLeft)}
            >
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
      <Grid lg={12} className={styles.imageGrid}>
        <div className={styles.imageWrapper(textOnLeft)}>
          <div className={styles.imageAspectRatio}>
            <img
              src={getProcessedImage(imageSrc, '900x750', imageFocus)}
              alt={alt}
              loading="lazy"
              className={styles.image}
            />
            <div className={styles.imageOverlay(textOnLeft)} />
          </div>
        </div>
      </Grid>
    )}
  </article>
);
