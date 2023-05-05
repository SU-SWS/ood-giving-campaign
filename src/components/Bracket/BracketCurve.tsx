import React, { HTMLAttributes } from 'react';
import { dcnb } from 'cnbuilder';
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
  isSolid,
  className = 'su-text-[clamp(1.2rem,1.5vw,2.5rem)]',
  ...props
}: BracketCurveProps) => (
  <FlexBox
    className={dcnb(
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
