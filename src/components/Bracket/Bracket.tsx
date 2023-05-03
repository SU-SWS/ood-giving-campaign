import React from 'react';
import { dcnb } from 'cnbuilder';
import { BracketCurve, BracketCurveProps } from './BracketCurve';
import { FlexBox } from '../FlexBox';
import * as styles from './Bracket.styles';

type BracketProps = Omit<BracketCurveProps, 'corner'> & {
  // Open or close bracket
  isClose?: boolean;
};

export const Bracket = ({
  isClose,
  color,
  isSolid,
  className,
  ...props
}: BracketProps) => (
  <FlexBox
    direction="col"
    className={dcnb(
      styles.colors[color],
      styles.directions(isClose),
      className,
    )}
    {...props}
  >
    <BracketCurve isSolid={isSolid} color={color} />
    <div className={styles.middle(isSolid)} />
    <BracketCurve isSolid={isSolid} color={color} corner="bl" />
  </FlexBox>
);
