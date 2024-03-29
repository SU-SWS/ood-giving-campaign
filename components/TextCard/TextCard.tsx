import { HTMLAttributes } from 'react';
import { cnb } from 'cnbuilder';
import { AnimateInView, type AnimationType } from '../Animate';
import { Text } from '../Typography';
import { FlexBox } from '../FlexBox';
import { bgTextColorPairsBlackWhite, type BgTextColorPairBlackWhiteType } from '@/utilities/datasource';
import * as styles from './TextCard.styles';

export type TextCardProps = HTMLAttributes<HTMLDivElement> & {
  text?: string;
  color?: BgTextColorPairBlackWhiteType;
  font?: 'serif' | 'druk6' | 'druk7';
  xsColSpan?: styles.ColSpanType;
  smColSpan?: styles.ColSpanType;
  mdColSpan?: styles.ColSpanType;
  lgColSpan?: styles.ColSpanType;
  xlColSpan?: styles.ColSpanType;
  xxlColSpan?: styles.ColSpanType;
  animation?: AnimationType;
  delay?: number;
};

export const TextCard = ({
  text,
  color = 'white',
  font = 'serif',
  xsColSpan,
  smColSpan,
  mdColSpan,
  lgColSpan,
  xlColSpan,
  xxlColSpan,
  animation = 'none',
  delay,
  className,
  ...props
}: TextCardProps) => {
  const drukFontSize = font === 'druk6' ? 'f5' : 'f7';

  return (
    <div
      className={cnb(
        styles.root,
        xsColSpan ? styles.xsColSpans[xsColSpan] : '',
        smColSpan ? styles.smColSpans[smColSpan] : '',
        mdColSpan ? styles.mdColSpans[mdColSpan] : '',
        lgColSpan ? styles.lgColSpans[lgColSpan] : '',
        xlColSpan ? styles.xlColSpans[xlColSpan] : '',
        xxlColSpan ? styles.xxlColSpans[xxlColSpan] : '',
        color ? bgTextColorPairsBlackWhite[color] : '',
        className,
      )}
      {...props}
    >
      <AnimateInView animation={animation} delay={delay}>
        <FlexBox direction="col">
          <Text
            font={font === 'serif' ? 'serif' : 'druk'}
            size={font === 'serif' ? 'f4' : drukFontSize}
            weight={font === 'serif' ? 'bold' : 'black'}
            leading={font === 'serif' ? 'tight' : 'none'}
          >
            {text}
          </Text>
        </FlexBox>
      </AnimateInView>
    </div>
  );
};
