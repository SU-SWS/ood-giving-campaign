import { cnb } from 'cnbuilder';
import { AnimateInView, type AnimationType } from '../Animate';
import { Container } from '../Container';
import {
  Heading, type HeadingType, SrOnlyText, Text,
} from '../Typography';
import {
  accentBorderColors,
  accentBgColors,
  type AccentBorderColorType,
  type AccentColorType,
} from '@/utilities/datasource';
import * as styles from './DataCard.styles';

export type DataCardProps = React.HTMLAttributes<HTMLDivElement> & {
  heading?: string;
  headingLevel?: HeadingType;
  isSmallHeading?: boolean;
  isLightText?: boolean;
  barColor?: AccentBorderColorType;
  cta?: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
};

export const DataCard = ({
  heading,
  headingLevel = 'h3',
  isSmallHeading,
  barColor,
  cta,
  animation = 'slideUp',
  delay,
  children,
  className,
  ...props
}: DataCardProps) => (
  <AnimateInView animation={animation} delay={delay}>
    <Container
      as="article"
      width="full"
      {...props}
    >
      <div className={cnb(styles.content(!!barColor), accentBorderColors[barColor])}>
        {heading && (
          <Heading font="druk" leading="druk" as={headingLevel} size="f5" >
            {heading}
          </Heading>
        )}
        {children}
        {cta && (
          <div className={styles.cta}>
            {cta}
          </div>
        )}
      </div>
    </Container>
  </AnimateInView>
);
