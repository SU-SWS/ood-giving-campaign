import React, { HTMLAttributes } from 'react';
import { cnb } from 'cnbuilder';
import { FlexBox } from '@/components/FlexBox';
import {
  marginTops,
  marginBottoms,
  marginVerticals,
  type MarginType,
} from '@/utilities/datasource';
import * as styles from './Row.styles';
import * as types from './Row.types';

export type RowProps = Omit<HTMLAttributes<HTMLElement>, 'className'> & {
  as?: types.RowElementType;
  isList?: boolean;
  gap?: types.RowGapType;
  columnRatio?: types.RowColumnRatioType;
  // Breakpoint to start display items in a row. Before that they stack vertically.
  displayRowAt?: types.RowDisplayRowAtType;
  verticalAlign?: types.RowVerticalAlignType;
  mt?: MarginType;
  mb?: MarginType;
  my?: MarginType;
  className?: string;
};

export const Row = ({
  isList,
  as = isList ? 'ul' : 'div',
  gap,
  columnRatio,
  displayRowAt = 'md',
  verticalAlign = 'top',
  mt,
  mb,
  my,
  className,
  children,
  ...props
}: RowProps) => (
  <FlexBox
    as={as}
    className={cnb(
      styles.root,
      styles.displayRowAts[displayRowAt],
      styles.verticalAligns[verticalAlign],
      gap ? styles.rowGaps[gap] : '',
      mt ? marginTops[mt] : '',
      mb ? marginBottoms[mb] : '',
      my ? marginVerticals[my] : '',
      isList ? 'list-unstyled *:mb-0' : '',
      styles.rowColumnRatios[columnRatio],
      className,
    )}
    {...props}
  >
    {children}
  </FlexBox>
);
