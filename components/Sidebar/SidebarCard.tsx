import { cnb } from 'cnbuilder';
import { AnimateInView, type AnimationType } from '../Animate';
import { CtaLink } from '../Cta/CtaLink';
import { Heading, type HeadingType, Paragraph } from '../Typography';
import { accentBorderColors, type AccentBorderColorType } from '@/utilities/datasource';
import * as styles from './SidebarCard.styles';

/**
 * Currently, both Theme Card and Story Card use this component.
 */

export type SidebarCardProps = React.HTMLAttributes<HTMLDivElement> & {
  heading?: string;
  headingLevel?: HeadingType;
  isSmallHeading?: boolean;
  superhead?: string;
  barColor?: AccentBorderColorType;
  bgColor?: 'black' | 'white';
  cta?: React.ReactNode;
  children?: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
};

export const SidebarCard = ({
  heading,
  headingLevel = 'h3',
  isSmallHeading,
  barColor,
  cta,
  animation,
  delay,
  children,
  className,
  ...props
}: SidebarCardProps) => (
  <AnimateInView animation={animation} delay={delay}>
    <article
      className={cnb(styles.root, className)}
      {...props}
    >
      {children}
    </article>
  </AnimateInView>
);
