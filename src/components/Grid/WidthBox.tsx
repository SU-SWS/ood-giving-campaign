import React from 'react';
import { dcnb } from 'cnbuilder';
import { Container, ContainerProps } from '../Container';
import { Grid, GridProps } from './Grid';
import * as styles from './WidthBox.styles';

/**
 * For use as a wrapper container that sets a width in terms of number of columns.
 * E.g., Edge-to-edge, site container width (12 of 12 columns), 10 of 12, 8 of 12 columns etc.
 * */

type WidthBoxProps = GridProps & Omit<ContainerProps, 'width'> & {
  width: 'edge-to-edge' | 'site' | '10' | '8' | '6' | '4';
  align?: 'left' | 'center';
};

export const WidthBox = ({
  width = 'site',
  align = 'center',
  children,
  className,
  ...props
}: WidthBoxProps) => {
  // If it is edge-to-edge or takes up 12 of 12 column, no need to use a grid
  if (width === 'edge-to-edge' || width === 'site') {
    return (
      <Container {...props} width={width === 'site' ? 'site' : 'full'} className={className}>
        {children}
      </Container>
    );
  }

  return (
    <Grid {...props} gap sm={12} className={dcnb('su-cc', className)}>
      <div
        className={dcnb(
          styles.widthClasses[width].column,
          align === 'center' ? styles.widthClasses[width].columnStart : '',
        )}
      >
        {children}
      </div>
    </Grid>
  );
};
