import React from 'react';
import { Text, TypographyProps } from './Text';
import * as types from './typography.types';

export type HeadingProps = TypographyProps & React.HTMLAttributes<HTMLHeadingElement> & {
  as?: types.HeadingType;
};

// Convenience component for paragraphs
export const Heading = ({
  as = 'h2',
  font = 'serif',
  weight = 'bold',
  ...rest
}: HeadingProps) => <Text {...rest} font={font} weight={weight} as={as} />;
