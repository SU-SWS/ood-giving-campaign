import { cnb } from 'cnbuilder';
import { AnimateInView, type AnimationType } from '../Animate';
import { CtaLink } from '../Cta/CtaLink';
import { Heading, type HeadingType, Paragraph } from '../Typography';
import { SbLinkType } from '../Storyblok/Storyblok.types';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import { slugify } from '@/utilities/slugify';
import { accentBorderColors, type AccentBorderColorType } from '@/utilities/datasource';
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
  taxonomy?: string[];
  animation?: AnimationType;
  delay?: number;
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
  className,
  ...props
}: StoryCardProps) => (
  <AnimateInView animation={animation} delay={delay}>
    <article
      className={cnb(styles.root, className)}
      {...props}
    >
      <div className={styles.cardWrapper}>
        {imageSrc && (
          <div className={styles.imageWrapper}>
            <img
              alt=""
              width={500}
              height={500}
              loading="lazy"
              src={getProcessedImage(imageSrc, '500x500', imageFocus)}
              className={styles.image}
            />
          </div>
        )}
        {heading && (
          <Heading
            as={headingLevel}
            size={isSmallHeading ? 2 : 3}
            leading="tight"
            className={cnb(styles.heading(!!tabColor), accentBorderColors[tabColor])}
          >
            <CtaLink sbLink={link} href={href} className={styles.headingLink}>
              {heading}
            </CtaLink>
          </Heading>
        )}
        {body && (
          <Paragraph variant="card" noMargin className={styles.body}>{body}</Paragraph>
        )}
      </div>
      {/* No taxonomy for MVP; display max 3 topic tags */}
      {/* {!!taxonomy?.length && (
        <ul className={styles.taxonomy(!!tabColor)}>
          {taxonomy.slice(0, 3).map((item) => (
            <li key={item} className={styles.taxonomyItem}>
              <CtaLink href={`/stories?topic=${slugify(item)}`} variant="storyCardTag">{item}</CtaLink>
            </li>
          ))}
        </ul>
      )} */}
    </article>
  </AnimateInView>
);
