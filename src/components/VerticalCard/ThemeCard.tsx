import React from 'react';
import { VerticalCard, VerticalCardProps } from './VerticalCard';

export type ThemeCardProps = Omit<VerticalCardProps, 'isSmallHeading'>;

export const ThemeCard = (props: ThemeCardProps) => (
  <VerticalCard {...props} isSmallHeading />
);
