import { HTMLAttributes } from 'react';
import { cnb } from 'cnbuilder';
import { AnimateInView, type AnimationType } from '../Animate';
import { CtaLink, type IconAnimationType } from '../Cta';
import {
  Heading, type HeadingType, Paragraph, Text,
} from '../Typography';
import { FlexBox } from '../FlexBox';
import { type SbLinkType } from '../Storyblok/Storyblok.types';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import { accentBorderColors, type AccentBorderColorType } from '@/utilities/datasource';
import * as styles from './InitiativeCard.styles';
import { IconType } from '../HeroIcon';

export type InitiativeCardProps = HTMLAttributes<HTMLDivElement> & {
  heading?: string;
  headingLevel?: HeadingType;
  body?: string;
  imageSrc?: string;
  imageFocus?: string;
  tabColor?: AccentBorderColorType;
  linkText?: string;
  link?: SbLinkType;
  animation?: AnimationType;
  delay?: number;
};

export const InitiativeCard = ({
  heading,
  headingLevel = 'h2',
  body,
  imageSrc = '',
  imageFocus,
  tabColor,
  linkText,
  link,
  animation = 'none',
  delay,
  className,
  ...props
}: InitiativeCardProps) => {
  // Split the linkText into an array of words
  const words = linkText?.trim().split(/\s+/);

  // Extract the last word
  const lastWord = words?.pop();

  // Join the remaining words to form the first part of the link text
  const firstPart = words?.join(' ');

  let cardIcon: IconType;
  let iconAnimation: IconAnimationType;

  switch (link?.linktype) {
    case 'asset':
      cardIcon = 'download';
      iconAnimation = 'down';
      break;
    case 'story':
      cardIcon = 'arrow-right';
      iconAnimation = 'right';
      break;
    default:
      cardIcon = 'external';
      iconAnimation = 'top-right';
  }

  return (
    <AnimateInView animation={animation} delay={delay}>
      <FlexBox
        as="article"
        direction="col"
        className={cnb(styles.root, className)}
        {...props}
      >
        <div className={styles.topWrapper}>
          <div className={styles.imageWrapper}>
            <img
              width={600}
              height={800}
              alt=""
              loading="lazy"
              src={getProcessedImage(imageSrc, '600x800', imageFocus) || ''}
              className={styles.image}
            />
          </div>
          <Heading
            as={headingLevel}
            font="druk-wide"
            size={1}
            leading="tight"
            uppercase
            className={styles.heading}
          >
            {heading}
          </Heading>
        </div>
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
        <CtaLink
          variant="unset"
          sbLink={link}
          className={styles.cta}
          icon={cardIcon}
          iconProps={{ className: styles.icon }}
          animate={iconAnimation}
        >
          {linkText && (
            <Text weight="semibold" align="right" leading="none" className={styles.linkText}>
              {firstPart} <span className={styles.lastword}>{lastWord}</span>
            </Text>
          )}
        </CtaLink>
      </FlexBox>
    </AnimateInView>
  );
};
