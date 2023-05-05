import React from 'react';
import { dcnb } from 'cnbuilder';
import { BracketCurve, BracketCurveProps } from './BracketCurve';
import { FlexBox } from '../FlexBox';
import * as styles from './Bracket.styles';

type BracketProps = Omit<BracketCurveProps, 'corner'> & {
  // Open or close bracket
  isClose?: boolean;
  curveClassName?: string;
};

export const Bracket = ({
  isClose,
  color,
  isSolid,
  className,
  curveClassName,
  ...props
}: BracketProps) => (
  <FlexBox
    direction="col"
    className={dcnb(
      styles.colors[color],
      className,
    )}
    {...props}
  >
    <BracketCurve
      isSolid={isSolid}
      color={color}
      corner={isClose ? 'tr' : 'tl'}
      className={curveClassName}
    />
    <div className={styles.middle(isClose, isSolid)} />
    <BracketCurve
      isSolid={isSolid}
      color={color}
      corner={isClose ? 'br' : 'bl'}
      className={curveClassName}
    />
  </FlexBox>
);
