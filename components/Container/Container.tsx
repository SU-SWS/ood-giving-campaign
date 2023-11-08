import { HTMLAttributes } from 'react';
import { cnb } from 'cnbuilder';
import {
  paddingTops,
  paddingBottoms,
  paddingVerticals,
  marginTops,
  marginBottoms,
  marginVerticals,
  type MarginType,
  type PaddingType,
} from '@/utilities/datasource';
import * as styles from './Container.styles';
import * as types from './Container.types';

export type ContainerProps = HTMLAttributes<HTMLElement> & {
  as?: types.ContainerElementType;
  width?: types.WidthType;
  pt?: PaddingType;
  pb?: PaddingType;
  py?: PaddingType;
  mt?: MarginType;
  mb?: MarginType;
  my?: MarginType;
  bgColor?: types.BgColorType;
  style?: React.CSSProperties;
};

export const Container = ({
  as: AsComponent = 'div',
  width = 'site',
  py,
  pt,
  pb,
  mt,
  mb,
  my,
  bgColor,
  style,
  className,
  children,
  ...props
}: ContainerProps) => (
  <AsComponent
    {...props}
    style={style}
    className={cnb(
      bgColor ? styles.bgColors[bgColor] : '',
      py ? paddingVerticals[py] : '',
      pt ? paddingTops[pt] : '',
      pb ? paddingBottoms[pb] : '',
      my ? marginVerticals[my] : '',
      mt ? marginTops[mt] : '',
      mb ? marginBottoms[mb] : '',
      width ? styles.widths[width] : '',
      className,
    )}
  >
    {children}
  </AsComponent>
);
