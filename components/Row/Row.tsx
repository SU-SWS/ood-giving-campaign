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
      'flex-col lg:flex-row *:grow-0 *:w-full',
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
