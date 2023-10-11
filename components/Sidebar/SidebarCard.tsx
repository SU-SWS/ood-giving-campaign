import { cnb } from 'cnbuilder';
import { AnimateInView, type AnimationType } from '../Animate';
import { Container } from '../Container';
import { Heading, type HeadingType, Text } from '../Typography';
import {
  accentBorderColors,
  accentBgColors,
  type AccentBorderColorType,
  type AccentColorType,
} from '@/utilities/datasource';
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
  barOnRight?: boolean;
  bgColor?: AccentColorType;
  cta?: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  children?: React.ReactNode;
};

export const SidebarCard = ({
  heading,
  headingLevel = 'h3',
  isSmallHeading,
  superhead,
  barColor,
  barOnRight,
  bgColor,
  cta,
  animation,
  delay,
  children,
  className,
  ...props
}: SidebarCardProps) => (
  <AnimateInView animation={animation} delay={delay}>
    <Container
      as="article"
      width="full"
      py={3}
      className={cnb(styles.root, accentBgColors[bgColor], className)}
      {...props}
    >
      <div className={cnb(styles.content(!!bgColor, !!barColor, barOnRight), accentBorderColors[barColor])}>
        {superhead && (
          <Text weight="semibold" aria-hidden>{superhead}</Text>
        )}
        {heading && (
          <Heading size={isSmallHeading ? 2 : 3} className="rs-mb-3">
            {superhead && <Text srOnly>{superhead}: </Text>}{heading}
          </Heading>
        )}
        {children}
        {cta && (
          <div className="rs-mt-3">
            {cta}
          </div>
        )}
      </div>
    </Container>
  </AnimateInView>
);
