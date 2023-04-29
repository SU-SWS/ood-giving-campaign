import React, { HTMLAttributes } from 'react';
import { Grid, GridProps } from './Grid';

type GridAlternatingProps = HTMLAttributes<HTMLElement> & Pick<GridProps, 'as' | 'gap' | 'pt' | 'pb' | 'py'> & {
  startOnRight?: boolean;
  addCenterLine?: boolean;
  spacing?: string;
};

export const GridAlternating = ({
  as,
  startOnRight,
  addCenterLine,
  spacing,
  pt,
  pb,
  py,
  children,
  ...props
}: GridAlternatingProps) => {
  // turn children into array
  const childrenArray = React.Children.toArray(children);

  return (
    <Grid as={as} gap="split" md={2} py={py} pt={pt} pb={pb} {...props}>
      {startOnRight && <div />}
      {childrenArray?.map((item, index) => (
        <>
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={index}
          >
            {item}
          </div>
          <div />
          <div />
        </>
      ))}
    </Grid>
  );
};
