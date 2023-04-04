import React, { ReactNode, HTMLAttributes } from 'react';
import { dcnb, ClassValue } from 'cnbuilder';
import * as styles from './Container.styles';

export interface ContainerProps {
  as?: styles.ContainerElementType;
  width?: styles.ContainerWidthType;
  children?: ReactNode;
  className?: ClassValue;
}

export const Container = ({
  as = 'div',
  width = 'site',
  className,
  children,
  ...props
}: ContainerProps & HTMLAttributes<HTMLElement>) => React.createElement(
  as,
  {
    className: dcnb(styles.containerWidths[width], className),
    ...props,
  },
  children,
);
