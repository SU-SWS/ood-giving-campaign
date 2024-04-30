import { cnb } from 'cnbuilder';
import { AnimateInView, type AnimationType } from '@/components/Animate';
import { CtaLink } from '@/components/Cta/CtaLink';
import { FlexBox } from '@/components/FlexBox';
import {
  Heading, type HeadingType, Paragraph, type FontSizeType,
} from '../Typography';
import { SbLinkType } from '@/components/Storyblok/Storyblok.types';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import { accentBorderColors, type AccentBorderColorType } from '@/utilities/datasource';
import { initiativesMap, type InitiativesType } from '@/utilities/taxonomyMaps';
import * as styles from './StoryCard.styles';

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
  taxonomy?: InitiativesType[];
  animation?: AnimationType;
  delay?: number;
  isHorizontal?: boolean;
  isListView?: boolean;
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
  isListView,
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
        className={cnb(styles.root(isHorizontal, isListView), className)}
        {...props}
      >
        <div className={styles.cardWrapper(isHorizontal, isListView)}>
          {imageSrc && (
            <div className={styles.imageWrapper}>
              <picture>
                {!isHorizontal && (
                  <source
                    srcSet={getProcessedImage(imageSrc, '500x500', imageFocus)}
                    media="(min-width: 768px)"
                  />
                )}
                <source
                  srcSet={getProcessedImage(imageSrc, isHorizontal ? '750x750' : '400x400', imageFocus)}
                  media="(min-width: 576px)"
                />
                <source
                  srcSet={getProcessedImage(imageSrc, isHorizontal ? '530x530' : '300x300', imageFocus)}
                  media="(max-width: 575px)"
                />
                <img
                  alt=""
                  width={isHorizontal ? 750 : 500}
                  height={isHorizontal ? 750 : 500}
                  loading="lazy"
                  src={getProcessedImage(imageSrc, isHorizontal ? '750x750' : '500x500', imageFocus)}
                  className={styles.image}
                />
              </picture>
            </div>
          )}
          <FlexBox
            direction="col"
            justifyContent={isHorizontal ? 'center' : undefined}
            className={styles.contentWrapper(isHorizontal, isListView)}
          >
            {heading && (
              <Heading
                as={headingLevel}
                leading="none"
                className={cnb(
                  styles.heading(isHorizontal, isSmallHeading, isListView),
                  accentBorderColors[tabColor])
                }
              >
                <CtaLink sbLink={link} href={href} className={styles.headingLink}>
                  {heading}
                </CtaLink>
              </Heading>
            )}
            {body && (
              <Paragraph
                noMargin
                className={cnb(styles.body(isHorizontal, isListView), accentBorderColors[tabColor])}
              >
                {body}
              </Paragraph>
            )}
            {!!taxonomy?.length && (
              <ul className={styles.taxonomy(isHorizontal, isListView)}>
                {taxonomy.slice(0, 3).map((item) => (
                  <li key={item} className={styles.taxonomyItem}>
                    <CtaLink href={`/stories/list/item`} variant="storyCardChipDark" className={styles.taxonomyLink}>
                      {initiativesMap[item]}
                    </CtaLink>
                  </li>
                ))}
              </ul>
            )}
          </FlexBox>
        </div>
      </article>
    </AnimateInView>
  );
};
