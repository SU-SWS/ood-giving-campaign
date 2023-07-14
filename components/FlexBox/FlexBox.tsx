import React, { ReactNode, HTMLAttributes } from 'react';
import { cnb } from 'cnbuilder';
import * as styles from './FlexBox.styles';
import * as types from './FlexBox.types';

type FlexBoxProps = HTMLAttributes<HTMLElement> & {
  as?: types.FlexElementType;
  direction?: types.FlexDirectionType;
  wrap?: types.FlexWrapType;
  gap?: boolean;
  justifyContent?: types.FlexJustifyContentType;
  alignContent?: types.FlexAlignContentType;
  alignItems?: types.FlexAlignItemsType;
  children?: ReactNode;
};

export const FlexBox = ({
  as: AsComponent = 'div',
  direction,
  gap,
  wrap,
  justifyContent,
  alignContent,
  alignItems,
  children,
  className,
  ...props
}: FlexBoxProps) => (
  <AsComponent
    {...props}
    className={cnb(
      'flex',
      direction ? styles.flexDirection[direction] : '',
      wrap ? styles.flexWrap[wrap] : '',
      justifyContent ? styles.flexJustifyContent[justifyContent] : '',
      alignContent ? styles.flexAlignContent[alignContent] : '',
      alignItems ? styles.flexAlignItems[alignItems] : '',
      gap ? 'grid-gap' : '',
      className,
    )}
  >
    {children}
  </AsComponent>
);
