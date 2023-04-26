import React, { HTMLAttributes } from 'react';
import { dcnb } from 'cnbuilder';
import * as styles from './Grid.styles';
import * as types from './Grid.types';

export type GridProps = HTMLAttributes<HTMLElement> & {
  as?: types.GridElementType;
  gap?: boolean,
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
};

export const Grid = ({
  as: AsComponent = 'div',
  gap,
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
  className,
  children,
  ...props
}: GridProps) => (
  <AsComponent
    {...props}
    className={dcnb(
      'su-grid',
      gap ? 'su-grid-gap su-gap-y-[5rem] xl:su-gap-y-[7rem]' : '',
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
      className,
    )}
  >
    {children}
  </AsComponent>
);
