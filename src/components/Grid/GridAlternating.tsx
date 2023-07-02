'use client';
import React, { HTMLAttributes, useRef } from 'react';
import {
  useScroll, useSpring, motion, MotionStyle,
} from 'framer-motion';
import { cnb } from 'cnbuilder';
import { Grid, GridProps } from './Grid';
import { GridNegativeSpacingType, GridWidthType } from './Grid.types';
import { marginBottoms, MarginType } from '../../utilities/datasource';
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
  spacing?: MarginType | GridNegativeSpacingType;
  // inline CSS Style for grid cell
  gridCellStyle?: MotionStyle;
};

export const GridAlternating = ({
  as,
  startOnRight,
  addCenterLine,
  width = 'inset',
  spacing,
  pt,
  pb,
  py,
  children,
  gridCellStyle,
  ...props
}: GridAlternatingProps) => {
  // turn children into array
  const childrenArray = React.Children.toArray(children);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['-600px', '60%'],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className={cnb(styles.alternatingGridWrapper, styles.gridWidths[width])} ref={containerRef}>
      <Grid as={as} gap="split" md={2} py={py} pt={pt} pb={pb} {...props}>
        {startOnRight && <div />}
        {childrenArray?.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <React.Fragment key={index}>
            <motion.div
              className={cnb(
                marginBottoms[spacing || ''],
                styles.negativeSpacing[spacing || ''],
                styles.cellWithContent,
              )}
              style={gridCellStyle}
            >
              {item}
            </motion.div>
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
        <motion.div
          className={styles.centerline}
          style={{ scaleY }}
        />
      )}
    </div>
  );
};
