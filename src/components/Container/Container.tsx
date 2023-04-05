import React, { ReactNode, HTMLAttributes } from 'react';
import { dcnb, ClassValue } from 'cnbuilder';
import * as styles from './Container.styles';

export type ContainerProps = HTMLAttributes<HTMLElement> & {
  as?: styles.ContainerElementType;
  width?: styles.ContainerWidthType;
  children?: ReactNode;
  className?: ClassValue;
};

export const Container = ({
  as: AsComponent = 'div',
  width = 'site',
  className,
  children,
  ...props
}: ContainerProps) => (
  <AsComponent
    {...props}
    className={dcnb(
      width ? styles.containerWidths[width] : '',
      className,
    )}
  >
    {children}
  </AsComponent>
);
