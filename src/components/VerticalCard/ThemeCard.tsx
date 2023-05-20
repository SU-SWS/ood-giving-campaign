import React from 'react';
import { VerticalCard, VerticalCardProps } from './VerticalCard';

type ThemeCardProps = Omit<VerticalCardProps, 'headingFont' | 'isSmallHeading'>;

export const ThemeCard = (props: ThemeCardProps) => (
  <VerticalCard {...props} headingFont="serif" isSmallHeading />
);
