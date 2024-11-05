import React, { HTMLAttributes } from 'react';
import { cnb } from 'cnbuilder';
import {
  marginTops,
  marginBottoms,
  marginVerticals,
  type MarginType,
} from '@/utilities/datasource';
import { type GridGapType } from '@/components/Grid/Grid.types';
import * as styles from '@/components/Grid/Grid.styles';


export type ChatProps = HTMLAttributes<HTMLElement> & {
  gap?:GridGapType;
  mt?: MarginType;
  mb?: MarginType;
  my?: MarginType;
};

export const Chat = ({
  gap,
  mt,
  mb,
  my,
  className,
  children,
  ...props
}: ChatProps) => (
  <div
    {...props}
    className={cnb(
      'grid',
      gap ? styles.gridGaps[gap] : '',
      mt ? marginTops[mt] : '',
      mb ? marginBottoms[mb] : '',
      my ? marginVerticals[my] : '',
      className,
    )}
  >
    {children}
  </div>
);
