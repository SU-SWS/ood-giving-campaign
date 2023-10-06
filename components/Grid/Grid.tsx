import React, { HTMLAttributes } from 'react';
import { cnb } from 'cnbuilder';
import {
  paddingTops,
  paddingBottoms,
  paddingVerticals,
  type PaddingType,
} from '@/utilities/datasource';
import * as styles from './Grid.styles';
import * as types from './Grid.types';

export type GridProps = HTMLAttributes<HTMLElement> & {
  as?: types.GridElementType;
  gap?: types.GridGapType;
  rtl?: boolean;
  xs?: types.GridNumColsType;
  sm?: types.GridNumColsType;
  md?: types.GridNumColsType;
  lg?: types.GridNumColsType;
  xl?: types.GridNumColsType;
  xxl?: types.GridNumColsType;
  justifyContent?: types.GridJustifyContentType,
  justifyItems?: types.GridJustifyItemsType,
  alignContent?: types.GridAlignContentType,
  alignItems?: types.GridAlignItemsType,
  pt?: PaddingType;
  pb?: PaddingType;
  py?: PaddingType;
};

export const Grid = ({
  as: AsComponent = 'div',
  gap,
  rtl,
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
  justifyContent,
  justifyItems,
  alignContent,
  alignItems,
  pt,
  pb,
  py,
  className,
  children,
  ...props
}: GridProps) => (
  <AsComponent
    {...props}
    className={cnb(
      'grid',
      gap ? styles.gridGaps[gap] : '',
      rtl ? styles.rtl : '',
      xs ? styles.gridNumCols.xs[xs] : '',
      sm ? styles.gridNumCols.sm[sm] : '',
      md ? styles.gridNumCols.md[md] : '',
      lg ? styles.gridNumCols.lg[lg] : '',
      xl ? styles.gridNumCols.xl[xl] : '',
      xxl ? styles.gridNumCols.xxl[xxl] : '',
      justifyContent ? styles.gridJustifyContent[justifyContent] : '',
      justifyItems ? styles.gridJustifyItems[justifyItems] : '',
      alignContent ? styles.gridAlignContent[alignContent] : '',
      alignItems ? styles.gridAlignItems[alignItems] : '',
      py ? paddingVerticals[py] : '',
      pt ? paddingTops[pt] : '',
      pb ? paddingBottoms[pb] : '',
      className,
    )}
  >
    {children}
  </AsComponent>
);
