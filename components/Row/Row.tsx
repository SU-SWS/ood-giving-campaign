import React, { HTMLAttributes } from 'react';
import { cnb } from 'cnbuilder';
import {
  marginTops,
  marginBottoms,
  marginVerticals,
  type MarginType,
} from '@/utilities/datasource';
import * as styles from './Row.styles';
import * as types from './Row.types';

export type RowProps = HTMLAttributes<HTMLElement> & {
  as?: types.RowElementType;
  isList?: boolean;
  gap?: types.RowGapType;
  mt?: MarginType;
  mb?: MarginType;
  my?: MarginType;
};

export const Row = ({
  isList,
  as: AsComponent = isList ? 'ul' : 'div',
  gap,
  mt,
  mb,
  my,
  className,
  children,
  ...props
}: RowProps) => (
  <AsComponent
    {...props}
    className={cnb(
      'grid',
      gap ? styles.rowGaps[gap] : '',
      mt ? marginTops[mt] : '',
      mb ? marginBottoms[mb] : '',
      my ? marginVerticals[my] : '',
      isList ? 'list-unstyled *:mb-0' : '',
      className,
    )}
  >
    {children}
  </AsComponent>
);
