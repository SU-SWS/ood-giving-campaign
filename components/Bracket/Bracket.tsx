import { cnb } from 'cnbuilder';
import { BracketCurve, BracketCurveProps } from './BracketCurve';
import { FlexBox } from '../FlexBox';
import * as styles from './Bracket.styles';

type BracketProps = Omit<BracketCurveProps, 'corner'> & {
  // Open or close bracket
  isClose?: boolean;
  curveClassName?: string;
};

export const Bracket = ({
  isClose = false,
  color,
  isSolid = false,
  className,
  curveClassName,
  ...props
}: BracketProps) => (
  <FlexBox
    direction="col"
    className={cnb(
      styles.colors[color || ''],
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
