import { VerticalCard, type VerticalCardProps } from './VerticalCard';

export type StoryCardProps = Omit<VerticalCardProps, 'ctaLabel' | 'ctaSrText'>;

export const StoryCard = (props: StoryCardProps) => (
  <VerticalCard {...props} />
);
