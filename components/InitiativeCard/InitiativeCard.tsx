import { HTMLAttributes } from 'react';
import { cnb } from 'cnbuilder';
import { AnimateInView, type AnimationType } from '../Animate';
import { CtaLink, type IconAnimationType } from '../Cta';
import {
  Heading, type HeadingType, Paragraph, Text, SrOnlyText,
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
  imageAspectRatio?: styles.InitiativeCardImageAspectRatio;
  tabColor?: AccentBorderColorType;
  isHorizontal?: boolean;
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
  imageAspectRatio = '3x4',
  tabColor,
  isHorizontal,
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

  const imageSize = imageAspectRatio === '3x4' ? '510x680' : '700x700';

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
        direction='col'
        className={cnb(styles.root(isHorizontal), className)}
        {...props}
      >
        <div className={styles.topWrapper(isHorizontal)}>
          <div className={styles.imageWrapper(imageAspectRatio)}>
            <img
              width={600}
              height={800}
              alt=""
              loading="lazy"
              src={getProcessedImage(imageSrc, imageSize, imageFocus) || ''}
              className={styles.image}
            />
          </div>
          <Heading
            as={headingLevel}
            font="druk-wide"
            size={isHorizontal ? 2 : 1}
            leading="tight"
            uppercase
            className={styles.heading(isHorizontal)}
          >
            {heading}
          </Heading>
        </div>
        <div className={styles.bodyWrapper(isHorizontal)}>
          <Paragraph
            variant="subheading"
            leading="display"
            noMargin
            className={cnb(styles.body(!!tabColor), accentBorderColors[tabColor])}
          >
            {body}
          </Paragraph>
        </div>
        {!isHorizontal && (
          <CtaLink
            variant="unset"
            sbLink={link}
            className={styles.cta}
            icon={cardIcon}
            iconProps={{ className: styles.icon(!!linkText) }}
            animate={iconAnimation}
          >
            {linkText ? (
              <Text as="span" weight="semibold" align="right" leading="none" className={styles.linkText}>
                {firstPart} <span className={styles.lastword}>{lastWord}</span>
              </Text>
            ) : (
              <SrOnlyText>{`Go to the ${heading} page`}</SrOnlyText>
            )}
          </CtaLink>
        )}
      </FlexBox>
    </AnimateInView>
  );
};
