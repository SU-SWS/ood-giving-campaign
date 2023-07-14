import { VerticalCard, VerticalCardProps } from './VerticalCard';

export type ThemeCardProps = Omit<VerticalCardProps, 'isSmallHeading' | 'taxonomy'>;

export const ThemeCard = (props: ThemeCardProps) => (
  <VerticalCard {...props} isSmallHeading />
);
