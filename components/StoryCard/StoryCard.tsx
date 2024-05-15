import { cnb } from 'cnbuilder';
import { AnimateInView, type AnimationType } from '@/components/Animate';
import { CtaLink } from '@/components/Cta/CtaLink';
import { FlexBox } from '@/components/FlexBox';
import {
  Heading, Paragraph, type HeadingType, type HeadingLevelNumberType,
} from '@/components/Typography';
import { SbLinkType } from '@/components/Storyblok/Storyblok.types';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import { accentBorderColors, type AccentBorderColorType } from '@/utilities/datasource';
import { taxonomyMap, type TaxonomyType } from '@/utilities/taxonomyMaps';
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
  taxonomy?: TaxonomyType[];
  animation?: AnimationType;
  delay?: number;
  isHorizontal?: boolean;
  isListView?: boolean;
  isDark?: boolean;
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
  isDark,
  className,
  ...props
}: StoryCardProps) => {
  // The heading level of the tags should be one more than the heading level of the card, but maxes out at h6
  const tagsHeadingLevelNumber: HeadingLevelNumberType =
    Math.min(parseInt(headingLevel?.slice(1), 10) + 1, 6) as HeadingLevelNumberType;

  const tagsHeadingLevel: HeadingType = `h${tagsHeadingLevelNumber}`;

  return (
    <AnimateInView animation={animation} delay={delay}>
      <article
        className={cnb(styles.root(isHorizontal, isListView), className)}
        {...props}
      >
        <div className={styles.cardWrapper(isHorizontal, isListView, isDark)}>
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
                color={isDark ? 'white' : 'black'}
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
                color={isDark ? 'white' : 'black'}
                noMargin
                className={cnb(styles.body(isHorizontal, isListView), accentBorderColors[tabColor])}
              >
                {body}
              </Paragraph>
            )}
            <Heading as={tagsHeadingLevel} className="sr-only">Story tags:</Heading>
            {!!taxonomy?.length && (
              <ul className={styles.taxonomy(isHorizontal, isListView)}>
                {taxonomy.slice(0, 3).map((item) => (
                  <li key={item} className={styles.taxonomyItem}>
                    <CtaLink href={`/stories/list/${item}`} variant={isDark ? 'storyCardChipDark' : 'storyCardChip'} className={styles.taxonomyLink}>
                      {taxonomyMap[item]}
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
