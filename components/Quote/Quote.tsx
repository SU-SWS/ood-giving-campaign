import { cnb } from 'cnbuilder';
import { AnimateInView, type AnimationType } from '@/components/Animate';
import { Container } from '@/components/Container';
import { RichText } from '@/components/RichText';
import { Text } from '@/components/Typography';
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
  barOnLeft?: boolean;
  verticalAlign?: styles.QuoteVerticalAlignType;
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
  barOnLeft,
  verticalAlign = 'bottom',
  animation = 'slideUp',
  delay,
  children,
  className,
  ...props
}: QuoteProps) => {
  /**
   * Before we add the boolean showQuoteMark toggle,
   * user can add an empty space in the teaser field to trick it into displaying a quotation mark.
   * This test whether a real teaser (not just empty space) is present.
   */
  const hasRealTeaser = !!teaser?.trim();
  const displayQuoteMark = !!teaser;

  return (
    <AnimateInView animation={animation} delay={delay}>
      <Container
        width="full"
        py={addDarkOverlay && !isMinimal ? 5 : undefined}
        className={cnb(
          styles.root(isMinimal, addDarkOverlay, barOnLeft, !!barColor),
          styles.verticalAlignments[verticalAlign],
          className,
        )}
        {...props}
      >
        <blockquote className={cnb(styles.content(!!barColor, barOnLeft), accentBorderColors[barColor])}>
          {displayQuoteMark && (
            <Text font="druk" className={cnb(styles.quoteMark(isLargeTeaser), accentTextColors[quoteColor])}>“</Text>
          )}
          {hasRealTeaser && (
            <Text
              size={isLargeTeaser ? 'f5' : 'f4'}
              leading="none"
              font="druk"
              className={styles.teaser}
            >
              {teaser}
            </Text>
          )}
          {body && (
            <Text
              weight="semibold"
              variant={isLargeBody ? undefined : 'big'}
              leading="display"
              size={isLargeBody ? 2 : undefined}
              font="serif"
              className={styles.body(hasRealTeaser)}
            >
              {body}
            </Text>
          )}
          {source && (
            <Text variant="card" className={styles.source}>{source}</Text>
          )}
        </blockquote>
      </Container>
    </AnimateInView>
  );
};
