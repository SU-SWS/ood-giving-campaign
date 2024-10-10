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
import { RichText } from '../RichText';
import { type StoryblokRichtext } from 'storyblok-rich-text-react-renderer-ts';

export type QuoteProps = React.HTMLAttributes<HTMLDivElement> & {
  teaser?: string;
  body?: string | StoryblokRichtext;
  source?: string;
  addDarkOverlay?: boolean;
  isLargeTeaser?: boolean;
  isLargeBody?: boolean;
  isMinimal?: boolean;
  barColor?: AccentBorderColorType;
  quoteColor?: AccentTextColorType;
  quoteOnRight?: boolean;
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
  quoteOnRight,
  verticalAlign = 'bottom',
  animation = 'slideUp',
  delay,
  children,
  className,
  ...props
}: QuoteProps) => {
  const content = typeof body === 'string' ? body : <RichText wysiwyg={body} />;
  return (<AnimateInView animation={animation} delay={delay}>
    <Container
      width="full"
      pt={addDarkOverlay && !isMinimal ? 6 : undefined}
      pb={addDarkOverlay && !isMinimal ? 4 : undefined}
      className={cnb(
        styles.root(isMinimal, addDarkOverlay, quoteOnRight, !!barColor),
        styles.verticalAlignments[verticalAlign],
        className,
      )}
      {...props}
    >
      <blockquote className={cnb(styles.content(!!barColor, quoteOnRight), accentBorderColors[barColor])}>
        {teaser && (
          <FlexBox className={styles.teaserWrapper} direction={quoteOnRight ? 'row-reverse' : 'row'}>
            <Text
              font="druk"
              className={cnb(styles.quoteMark(isLargeTeaser), accentTextColors[quoteColor])}
            >
              {quoteOnRight ? '”' : '“'}
            </Text>
            <Text
              size={isLargeTeaser ? 'f5' : 'f4'}
              leading="none"
              font="druk"
              className={styles.teaser}
            >
              {teaser}
            </Text>
          </FlexBox>
        )}
        {body && (
          <Text
            weight="semibold"
            variant={isLargeBody ? undefined : 'big'}
            leading="display"
            size={isLargeBody ? 2 : undefined}
            font="serif"
            className={styles.body}
          >
            {content}
          </Text>
        )}
        {source && (
          <Text variant="card" className={styles.source}>{source}</Text>
        )}
      </blockquote>
    </Container>
  </AnimateInView>);
};
