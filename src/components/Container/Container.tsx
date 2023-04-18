import React, { HTMLAttributes } from 'react';
import { dcnb } from 'cnbuilder';
import * as styles from './Container.styles';

export type ContainerProps = HTMLAttributes<HTMLElement> & {
  as?: styles.ContainerElementType;
  width?: styles.ContainerWidthType;
  style?: React.CSSProperties;
};

export const Container = ({
  as: AsComponent = 'div',
  width = 'site',
  style,
  className,
  children,
  ...props
}: ContainerProps) => (
  <AsComponent
    {...props}
    style={style}
    className={dcnb(
      width ? styles.containerWidths[width] : '',
      className,
    )}
  >
    {children}
  </AsComponent>
);
