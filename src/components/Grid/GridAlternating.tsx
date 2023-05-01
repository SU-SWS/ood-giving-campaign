import React, { HTMLAttributes, useRef } from 'react';
import { useScroll, useSpring, m } from 'framer-motion';
import { dcnb } from 'cnbuilder';
import { Grid, GridProps } from './Grid';
import { GridWidthType } from './Grid.types';
import { paddingBottoms, PaddingType } from '../../utilities/datasource';
import * as styles from './Grid.styles';

/**
 * This component place each React node in the children in an alternating grid pattern.
 *
 * @component
 *
 * @example
 * <GridAlternating startOnRight>
 *  <Paragraph>Item 1 - Lorem Ipsum</Paragraph>
 *  <Paragraph>Item 2 - Lorem Ipsum</Paragraph>
 *  <Paragraph>Item 3 - Lorem Ipsum</Paragraph>
 * </GridAlternating>
 */

type GridAlternatingProps = HTMLAttributes<HTMLElement> & Pick<GridProps, 'as' | 'gap' | 'pt' | 'pb' | 'py'> & {
  startOnRight?: boolean;
  addCenterLine?: boolean;
  width?: GridWidthType;
  spacing?: PaddingType;
};

export const GridAlternating = ({
  as,
  startOnRight,
  addCenterLine,
  width = 'inset',
  spacing = 6,
  pt,
  pb,
  py,
  children,
  ...props
}: GridAlternatingProps) => {
  // turn children into array
  const childrenArray = React.Children.toArray(children);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['-600px', '200px'],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className={dcnb(styles.alternatingGridWrapper, styles.gridWidths[width])} ref={containerRef}>
      <Grid as={as} gap="split" md={2} py={py} pt={pt} pb={pb} {...props}>
        {startOnRight && <div />}
        {childrenArray?.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <React.Fragment key={index}>
            <div className={dcnb(paddingBottoms[spacing], 'last:su-pb-0')}>{item}</div>
            {index !== childrenArray.length - 1 && (
              <>
                <div />
                <div />
              </>
            )}
          </React.Fragment>
        ))}
      </Grid>
      {addCenterLine && (
        <m.div
          className={styles.centerline}
          style={{ scaleY }}
        />
      )}
    </div>
  );
};
