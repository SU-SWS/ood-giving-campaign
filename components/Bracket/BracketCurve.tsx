import { HTMLAttributes } from 'react';
import { cnb } from 'cnbuilder';
import { FlexBox } from '../FlexBox';
import * as styles from './Bracket.styles';

export type BracketCurveProps = HTMLAttributes<HTMLDivElement> & {
  corner?: styles.CornerType;
  color?: styles.ColorType;
  isSolid?: boolean;
};

export const BracketCurve = ({
  corner = 'tl',
  color = 'white',
  isSolid = false,
  className = 'text-[clamp(1.2rem,1.5vw,2.5rem)] h-100 sm:h-[12vw] 2xl:h-[8em]',
  ...props
}: BracketCurveProps) => (
  <FlexBox
    className={cnb(
      styles.root,
      styles.colors[color],
      className,
    )}
    {...props}
  >
    <div className={styles.curve(corner, isSolid)} />
    <div className={styles.rectangle(corner, isSolid)} />
  </FlexBox>
);
