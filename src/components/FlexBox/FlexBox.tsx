import React, { ReactNode, HTMLAttributes } from 'react';
import { dcnb } from 'cnbuilder';
import * as styles from './FlexBox.styles';
import * as types from './FlexBox.types';

type FlexBoxProps = HTMLAttributes<HTMLElement> & {
  children?: ReactNode;
  as?: types.FlexElementType;
  direction?: types.FlexDirectionType;
  wrap?: types.FlexWrapType;
  gap?: boolean;
  justifyContent?: types.FlexJustifyContentType;
  alignContent?: types.FlexAlignContentType;
  alignItems?: types.FlexAlignItemsType;
};

export const FlexBox = ({
  as: AsComponent = 'div',
  direction,
  wrap,
  gap,
  justifyContent,
  alignContent,
  alignItems,
  className,
  children,
  ...props
}: FlexBoxProps) => (
  <AsComponent
    {...props}
    className={dcnb(
      'su-flex',
      direction ? styles.flexDirection[direction] : '',
      wrap ? styles.flexWrap[wrap] : '',
      justifyContent ? styles.flexJustifyContent[justifyContent] : '',
      alignContent ? styles.flexAlignContent[alignContent] : '',
      alignItems ? styles.flexAlignItems[alignItems] : '',
      gap ? 'su-grid-gap' : '',
      className,
    )}
  >
    {children}
  </AsComponent>
);
