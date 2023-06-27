import React, { HTMLAttributes } from 'react';
import { cnb } from 'cnbuilder';
import { AnimateInView, AnimationType } from '../Animate';
import { CtaLink } from '../Cta/CtaLink';
import { Heading, HeadingType, Paragraph } from '../Typography';
import { SbLinkType } from '../Storyblok/Storyblok.types';
import { getProcessedImage } from '../../utilities/getProcessedImage';
import { accentBorderColors, AccentBorderColorType } from '../../utilities/datasource';
import * as styles from './InitiativeCard.styles';

export type InitiativeCardProps = HTMLAttributes<HTMLDivElement> & {
  heading?: string;
  headingLevel?: HeadingType;
  isSmallHeading?: boolean;
  body?: string;
  imageSrc?: string;
  imageFocus?: string;
  tabColor?: AccentBorderColorType;
  link?: SbLinkType;
  animation?: AnimationType;
  delay?: number;
};

export const InitiativeCard = ({
  heading,
  headingLevel = 'h2',
  isSmallHeading,
  body,
  imageSrc,
  imageFocus,
  tabColor,
  link,
  animation = 'none',
  delay,
  className,
  ...props
}: InitiativeCardProps) => (
  <AnimateInView animation={animation} delay={delay}>
    <article
      className={cnb(styles.root, className)}
      {...props}
    >
      {imageSrc && (
        <div className={styles.imageWrapper}>
          <img
            alt=""
            src={getProcessedImage(imageSrc, '600x800', imageFocus)}
            className={styles.image}
          />
        </div>
      )}
      {heading && (
        <Heading
          as={headingLevel}
          font="druk-wide"
          size={1}
          leading="tight"
          className={styles.heading}
        >
          <CtaLink sbLink={link} className={styles.headingLink}>
            {heading}
          </CtaLink>
        </Heading>
      )}
      {body && (
        <div className={styles.bodyWrapper}>
          <Paragraph
            variant="subheading"
            leading="display"
            noMargin
            className={cnb(styles.body(!!tabColor), accentBorderColors[tabColor])}
          >
            {body}
          </Paragraph>
        </div>
      )}
    </article>
  </AnimateInView>
);
