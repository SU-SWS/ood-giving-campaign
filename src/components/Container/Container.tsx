import React, { HTMLAttributes } from 'react';
import { dcnb } from 'cnbuilder';
import * as styles from './Container.styles';
import * as types from './Container.types';

export type ContainerProps = HTMLAttributes<HTMLElement> & {
  as?: types.ContainerElementType;
  width?: types.WidthType;
  pt?: types.PaddingType;
  pb?: types.PaddingType;
  py?: types.PaddingType;
  bgColor?: types.BgColorType;
  style?: React.CSSProperties;
};

export const Container = ({
  as: AsComponent = 'div',
  width = 'site',
  py,
  pt,
  pb,
  bgColor,
  style,
  className,
  children,
  ...props
}: ContainerProps) => (
  <AsComponent
    {...props}
    style={style}
    className={dcnb(
      bgColor ? styles.bgColors[bgColor] : '',
      py ? styles.paddingVerticals[py] : '',
      pt ? styles.paddingTops[pt] : '',
      pb ? styles.paddingBottoms[pb] : '',
      width ? styles.widths[width] : '',
      className,
    )}
  >
    {children}
  </AsComponent>
);
