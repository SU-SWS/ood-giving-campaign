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
      className={cnb(styles.root, className)}
      {...props}
    >
      <div className={cnb(styles.content(!!barColor, quoteOnRight), accentBorderColors[barColor])}>
        {teaser && (
          <FlexBox className="w-fit gap-9" direction={quoteOnRight ? 'row-reverse' : 'row'}>
            <Text
              font="druk"
              className={cnb(
                'shrink-0 leading-[0]', isLargeTeaser ? 'text-[32rem] mt-[11.4rem]' : 'text-[26rem] mt-[9.2rem]',
                accentTextColors[quoteColor])}
            >
              {quoteOnRight ? '”' : '“'}
            </Text>
            <Text size={isLargeTeaser ? 'f5' : 'f4'} leading="none" font="druk" className="rs-mb-0 grow-0 w-fit">{teaser}</Text>
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
            className="mt-02em first:mt-0"
          >
            {body}
          </Text>
        )}
        {source && (
          <Text variant="card" font="serif" className="rs-mt-1 whitespace-pre-line">{source}</Text>
        )}
      </div>
    </Container>
  </AnimateInView>
);
