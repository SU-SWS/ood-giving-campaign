import { HTMLAttributes } from 'react';
import Image from 'next/image';
import { cnb } from 'cnbuilder';
import { AnimateInView, AnimationType } from '../Animate';
import { CtaLink } from '../Cta/CtaLink';
import { Heading, HeadingType, Paragraph } from '../Typography';
import { HeroIcon } from '../HeroIcon';
import { FlexBox } from '../FlexBox';
import { SbLinkType } from '../Storyblok/Storyblok.types';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import { accentBorderColors, AccentBorderColorType } from '@/utilities/datasource';
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
  imageSrc = '',
  imageFocus,
  tabColor,
  link,
  animation = 'none',
  delay,
  className,
  ...props
}: InitiativeCardProps) => (
  <AnimateInView animation={animation} delay={delay}>
    <FlexBox
      as="article"
      direction="col"
      className={cnb(styles.root, className)}
      {...props}
    >
      <div className={styles.topWrapper}>
        <div className={styles.imageWrapper}>
          <Image
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
          className={cnb(styles.body(!!tabColor), accentBorderColors[tabColor || ''])}
        >
          {body}
        </Paragraph>
      </div>
      <CtaLink variant="unset" sbLink={link} className={styles.cta}>
        <HeroIcon
          title={heading}
          icon="arrow-right"
          noBaseStyle
          className={styles.arrowIcon}
        />
      </CtaLink>
    </FlexBox>
  </AnimateInView>
);
