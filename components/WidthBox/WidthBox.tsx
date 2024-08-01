import { cnb } from 'cnbuilder';
import { Container, type ContainerProps, type BgColorType } from '../Container';
import { Grid, type GridProps } from '../Grid';
import * as styles from './WidthBox.styles';

/**
 * For use as a wrapper container that sets a width in terms of number of columns.
 * There is a bounding width of either full (edge-to-edge) or site container width (centered container),
 * Within this bounding outer container, the children can span 12, 10, 8, 6 or 4 out of 12 column.
 * */

type FullWidthBoxProps = Omit<ContainerProps, 'width'> & {
  boundingWidth?: 'full' | 'site';
  width?: '12';
  align?: 'center';
};

type NonFullWidthBoxProps = GridProps & {
  boundingWidth?: 'full' | 'site';
  width?: '12' | '10' | '8' | '6' | '4';
  align?: 'left' | 'center';
  bgColor?: BgColorType;
};

export type WidthType = NonFullWidthBoxProps['width'];
type WidthBoxProps = FullWidthBoxProps | NonFullWidthBoxProps;

export const WidthBox = ({
  boundingWidth = 'full',
  width = '12',
  align = 'center',
  bgColor,
  children,
  className,
  ...props
}: WidthBoxProps) => {
  // If it is edge-to-edge or takes up 12 of 12 column, no need to use a grid
  if ((boundingWidth === 'full' || boundingWidth === 'site') && width === '12') {
    return (
      <Container
        {...props as FullWidthBoxProps}
        bgColor={bgColor}
        width={boundingWidth}
        className={className}
      >
        {children}
      </Container>
    );
  }

  return (
    <Container width={boundingWidth} bgColor={bgColor}>
      <Grid {...props as NonFullWidthBoxProps} gap="default" sm={12} className={className}>
        <div
          className={cnb(
            styles.widthClasses[width]?.column || '',
            align === 'center' ? styles.widthClasses[width]?.columnStart : '',
          )}
        >
          {children}
        </div>
      </Grid>
    </Container>
  );
};
