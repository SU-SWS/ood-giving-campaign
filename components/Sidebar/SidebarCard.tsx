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
  animation = 'slideUp',
  delay,
  children,
  className,
  ...props
}: SidebarCardProps) => (
  <AnimateInView animation={animation} delay={delay}>
    <Container
      as="article"
      width="full"
      py={bgColor ? 3 : undefined}
      className={cnb(styles.root(!!bgColor), accentBgColors[bgColor], className)}
      {...props}
    >
      <div className={cnb(styles.content(!!bgColor, !!barColor, barOnRight), accentBorderColors[barColor])}>
        {superhead && (
          <Text weight="semibold" aria-hidden={!!heading}>{superhead}</Text>
        )}
        {heading && (
          <Heading as={headingLevel} size={isSmallHeading ? 2 : 3} className={styles.heading}>
            {superhead && <Text srOnly>{superhead}: </Text>}{heading}
          </Heading>
        )}
        {children}
        {!!cta && (
          <div className={styles.cta}>
            {cta}
          </div>
        )}
      </div>
    </Container>
  </AnimateInView>
);
