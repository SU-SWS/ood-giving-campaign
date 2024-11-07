import React, { HTMLAttributes } from 'react';
import { cnb } from 'cnbuilder';
import {
  marginTops,
  marginBottoms,
  marginVerticals,
  type MarginType,
} from '@/utilities/datasource';

export type ChatProps = HTMLAttributes<HTMLElement> & {
  mt?: MarginType;
  mb?: MarginType;
  my?: MarginType;
};

export const Chat = ({
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
      'grid gap-4',
      mt ? marginTops[mt] : '',
      mb ? marginBottoms[mb] : '',
      my ? marginVerticals[my] : '',
      className,
    )}
  >
    {children}
  </div>
);
