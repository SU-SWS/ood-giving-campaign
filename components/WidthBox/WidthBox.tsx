import { cnb } from 'cnbuilder';
import { Container, type ContainerProps } from '../Container';
import { Grid, type GridProps } from '../Grid';
import * as styles from './WidthBox.styles';

/**
 * For use as a wrapper container that sets a width in terms of number of columns.
 * E.g., Full (edge-to-edge), site container width (12 of 12 columns), 10 of 12, 8 of 12 columns etc.
 * */

type FullWidthBoxProps = Omit<ContainerProps, 'width'> & {
  width: 'full' | 'site';
  align?: 'center';
};

type NonFullWidthBoxProps = GridProps & {
  width: '10' | '8' | '6' | '4';
  align?: 'left' | 'center';
};

export type WidthType = FullWidthBoxProps['width'] | NonFullWidthBoxProps['width'];
type WidthBoxProps = FullWidthBoxProps | NonFullWidthBoxProps;

export const WidthBox = ({
  width = 'full',
  align = 'center',
  children,
  className,
  ...props
}: WidthBoxProps) => {
  // If it is edge-to-edge or takes up 12 of 12 column, no need to use a grid
  if (width === 'full' || width === 'site') {
    return (
      <Container
        {...props as FullWidthBoxProps}
        width={width}
        className={className}
      >
        {children}
      </Container>
    );
  }

  return (
    <Grid {...props as NonFullWidthBoxProps} gap="default" sm={12} className={cnb('cc', className)}>
      <div
        className={cnb(
          styles.widthClasses[width]?.column || '',
          align === 'center' ? styles.widthClasses[width]?.columnStart : '',
        )}
      >
        {children}
      </div>
    </Grid>
  );
};
