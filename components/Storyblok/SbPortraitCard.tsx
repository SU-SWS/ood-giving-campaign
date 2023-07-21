import { storyblokEditable } from '@storyblok/react/rsc';
import { PortraitCard } from '../PortraitCard';
import { AnimationType } from '../Animate';
import { SbImageType } from './Storyblok.types';
import { HeadingType } from '../Typography';

export type SbPortraitCardProps = {
  blok: {
    image?: SbImageType;
    heading?: string;
    headingLevel?: HeadingType;
    body?: string;
    ctaLabel?: string;
    ctaSrText?: string;
    animation?: AnimationType;
    delay?: number;
  };
};

export const SbPortraitCard = ({
  blok: {
    heading,
    headingLevel,
    body,
    image: { filename, focus } = {},
    ctaLabel,
    ctaSrText,
    animation,
    delay,
  },
  blok,
}: SbPortraitCardProps) => (
  <PortraitCard
    {...storyblokEditable(blok)}
    heading={heading}
    headingLevel={headingLevel}
    body={body}
    imageSrc={filename}
    imageFocus={focus}
    ctaLabel={ctaLabel}
    ctaSrText={ctaSrText}
    animation={animation}
    delay={delay}
  />
);
