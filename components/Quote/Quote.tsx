import { cnb } from 'cnbuilder';
import { AnimateInView, type AnimationType } from '../Animate';
import { Container } from '../Container';
import { FlexBox } from '../FlexBox';
import { Text } from '../Typography';
import {
  accentBorderColors,
  accentTextColors,
  type AccentBorderColorType,
  type AccentTextColorType,
} from '@/utilities/datasource';
import * as styles from './Quote.styles';


export type QuoteProps = React.HTMLAttributes<HTMLDivElement> & {
  teaser?: string;
  body?: string;
  source?: string;
  addDarkOverlay?: boolean;
  isLargeTeaser?: boolean;
  isLargeBody?: boolean;
  isMinimal?: boolean;
  barColor?: AccentBorderColorType;
  quoteColor?: AccentTextColorType;
  quoteOnRight?: boolean;
  animation?: AnimationType;
  delay?: number;
};

export const Quote = ({
  teaser,
  body,
  addDarkOverlay,
  isMinimal,
  isLargeTeaser,
  isLargeBody,
  source,
  quoteColor,
  barColor,
  quoteOnRight,
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
      pt={addDarkOverlay && !isMinimal ? 6 : undefined}
      pb={addDarkOverlay && !isMinimal ? 4 : undefined}
      className={cnb(styles.root(isMinimal, addDarkOverlay, quoteOnRight, !!barColor), className)}
      {...props}
    >
      <div className={cnb(styles.content(!!barColor, quoteOnRight), accentBorderColors[barColor])}>
        {teaser && (
          <FlexBox className={styles.teaserWrapper} direction={quoteOnRight ? 'row-reverse' : 'row'}>
            <Text
              font="druk"
              className={cnb(styles.quoteMark(isLargeTeaser), accentTextColors[quoteColor])}
            >
              {quoteOnRight ? '”' : '“'}
            </Text>
            <Text size={isLargeTeaser ? 'f5' : 'f4'} leading="none" font="druk" className={styles.teaser}>
              {teaser}
            </Text>
          </FlexBox>
        )}
        {body && (
          <Text
            as="blockquote"
            weight={isLargeBody ? 'semibold' : 'normal'}
            variant={isLargeBody ? undefined : 'big'}
            leading="display"
            size={isLargeBody ? 2 : undefined}
            font="serif"
            className={styles.body(isLargeBody)}
          >
            {body}
          </Text>
        )}
        {source && (
          <Text variant="card" font="serif" className={styles.source}>{source}</Text>
        )}
      </div>
    </Container>
  </AnimateInView>
);
