import { cnb } from 'cnbuilder';
import { AnimateInView, type AnimationType } from '../Animate';
import { Container } from '../Container';
import { Text } from '../Typography';
import {
  accentBorderColors,
  accentBgColors,
  type AccentBorderColorType,
  type AccentColorType,
} from '@/utilities/datasource';
import * as styles from './Quote.styles';

export type QuoteProps = React.HTMLAttributes<HTMLDivElement> & {
  teaser?: string;
  body?: string;
  source?: string;
  isLargeBody?: boolean;
  isMinimal?: boolean;
  barColor?: AccentBorderColorType;
  quoteColor?: AccentBorderColorType;
  quoteOnRight?: boolean;
  bgColor?: AccentColorType;
  animation?: AnimationType;
  delay?: number;
};

export const Quote = ({
  teaser,
  body,
  isLargeBody,
  source,
  quoteColor,
  barColor,
  quoteOnRight,
  bgColor,
  animation = 'slideUp',
  delay,
  children,
  className,
  ...props
}: QuoteProps) => (
  <AnimateInView animation={animation} delay={delay}>
    <Container
      as="article"
      width="full"
      py={bgColor ? 3 : undefined}
      className={cnb(styles.root, accentBgColors[bgColor], className)}
      {...props}
    >
      <Text size={isLargeBody ? 2 : 1} font="serif">
        {body}
      </Text>
    </Container>
  </AnimateInView>
);
