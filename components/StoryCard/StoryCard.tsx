import { cnb } from 'cnbuilder';
import { AnimateInView, type AnimationType } from '../Animate';
import { CtaLink } from '../Cta/CtaLink';
import {
  Heading, type HeadingType, Paragraph, type FontSizeType,
} from '../Typography';
import { SbLinkType } from '../Storyblok/Storyblok.types';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import { accentBorderColors, type AccentBorderColorType } from '@/utilities/datasource';
import * as styles from './StoryCard.styles';
import { FlexBox } from '../FlexBox';

export type StoryCardProps = React.HTMLAttributes<HTMLDivElement> & {
  heading?: string;
  headingLevel?: HeadingType;
  isSmallHeading?: boolean;
  body?: string;
  imageSrc?: string;
  imageFocus?: string;
  tabColor?: AccentBorderColorType;
  href?: string;
  link?: SbLinkType;
  taxonomy?: string[];
  animation?: AnimationType;
  delay?: number;
  isHorizontal?: boolean;
};

export const StoryCard = ({
  heading,
  headingLevel = 'h3',
  isSmallHeading,
  body,
  imageSrc,
  imageFocus,
  tabColor,
  link,
  href = '',
  taxonomy,
  animation = 'none',
  delay,
  isHorizontal,
  className,
  ...props
}: StoryCardProps) => {
  let headingSize: FontSizeType = 3;
  if (isHorizontal) {
    headingSize = 'f5';
  } else if (isSmallHeading && !isHorizontal) {
    headingSize = 2;
  };

  return (
    <AnimateInView animation={animation} delay={delay}>
      <article
        className={cnb(styles.root(isHorizontal), className)}
        {...props}
      >
        <div className={styles.cardWrapper(isHorizontal)}>
          {imageSrc && (
            <div className={styles.imageWrapper}>
              <picture>
                <source
                  srcSet={getProcessedImage(imageSrc, '500x500', imageFocus)}
                  media="(min-width: 768px)"
                />
                <source
                  srcSet={getProcessedImage(imageSrc, '400x400', imageFocus)}
                  media="(min-width: 576px)"
                />
                <source
                  srcSet={getProcessedImage(imageSrc, '320x320', imageFocus)}
                  media="(max-width: 575px)"
                />
                <img
                  alt=""
                  width={500}
                  height={500}
                  loading="lazy"
                  src={getProcessedImage(imageSrc, '500x500', imageFocus)}
                  className={styles.image}
                />
              </picture>
            </div>
          )}
          <FlexBox
            direction="col"
            justifyContent={isHorizontal ? 'center' : undefined}
            className={styles.contentWrapper(isHorizontal)}
          >
            {heading && (
              <Heading
                as={headingLevel}
                leading="none"
                className={cnb(styles.heading(!!tabColor, isHorizontal, isSmallHeading), accentBorderColors[tabColor])}
              >
                <CtaLink sbLink={link} href={href} className={styles.headingLink}>
                  {heading}
                </CtaLink>
              </Heading>
            )}
            {body && (
              <Paragraph
                variant={isHorizontal ? 'big' : 'card'}
                leading={isHorizontal ? 'snug' : 'display'}
                noMargin
                className={cnb(styles.body(isHorizontal), accentBorderColors[tabColor])}
              >
                {body}
              </Paragraph>
            )}
          </FlexBox>
        </div>
      </article>
    </AnimateInView>
  );
};
