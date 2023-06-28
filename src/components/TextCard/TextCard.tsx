import React, { HTMLAttributes } from 'react';
import { cnb } from 'cnbuilder';
import { AnimateInView, AnimationType } from '../Animate';
import { Text } from '../Typography';
import { FlexBox } from '../FlexBox';
import { bgTextColorPairsBlackWhite, BgTextColorPairBlackWhiteType } from '../../utilities/datasource';
import * as styles from './TextCard.styles';

export type TextCardProps = HTMLAttributes<HTMLDivElement> & {
  text?: string;
  color?: BgTextColorPairBlackWhiteType;
  font?: 'serif' | 'druk6' | 'druk7';
  colSpan?: styles.ColSpanType;
  animation?: AnimationType;
  delay?: number;
};

export const TextCard = ({
  text,
  color = 'white',
  font = 'serif',
  colSpan = 1,
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
        styles.colSpans[colSpan],
        bgTextColorPairsBlackWhite[color],
        className,
      )}
      {...props}
    >
      <AnimateInView animation={animation} delay={delay}>
        <FlexBox direction="col">
          <Text
            font={font === 'serif' ? 'serif' : 'druk'}
            size={font === 'serif' ? 4 : drukFontSize}
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
