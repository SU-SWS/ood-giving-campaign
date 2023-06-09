import React, { HTMLAttributes } from 'react';
import { cnb } from 'cnbuilder';
import { AnimateInView } from '../Animate';
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
  // TODO: We possibly could remove this and have the text color be inherited from the parent
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
    className={cnb(
      styles.root,
      marginBottoms[spacingBottom],
      className,
    )}
    {...props}
  >
    {/* Heading for XS breakpoint */}
    {heading && (
      <Heading
        as={headingLevel}
        size={isSmallHeading ? 5 : 6}
        leading="tight"
        align={textOnLeft ? 'left' : 'right'}
        className={styles.headingMobile(textOnLeft)}
      >
        {heading}
      </Heading>
    )}
    {imageSrc && (
      <AnimateInView
        duration={0.6}
        animation={textOnLeft ? 'slideInFromRight' : 'slideInFromLeft'}
      >
        <Grid sm={12} className={styles.imageGrid(textOnLeft)}>
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
      </AnimateInView>
    )}
    <div className={styles.grid(textOnLeft)}>
      <Bracket isClose={textOnLeft} className={styles.bracket(textOnLeft)} />
      <div className={styles.contentCard(textOnLeft)}>
        <FlexBox
          direction="col"
          alignItems={textOnLeft ? 'start' : 'end'}
          className={styles.contentWrapper(textOnLeft, isSmallHeading)}
        >
          {/* Heading for SM and up */}
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
            <div className={cnb(styles.tab, accentBgColors[tabColor])} />
          )}
          {body && (
            <Paragraph
              noMargin
              leading="cozy"
              align={textOnLeft ? 'left' : 'right'}
              className={styles.body(textOnLeft)}
            >
              {body}
            </Paragraph>
          )}
          {ctaLabel && (link || href) && (
            <CtaLink
              curve={textOnLeft ? 'tl' : 'tr'}
              icon="arrow-right"
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
    </div>
  </article>
);
