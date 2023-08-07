import { storyblokEditable } from '@storyblok/react/rsc';
import { PortraitCard } from '../PortraitCard';
import { type CurvesType } from '../PortraitCard';
import { type AnimationType } from '../Animate';
import { type SbImageType } from './Storyblok.types';
import { type HeadingType } from '../Typography';

export type SbPortraitCardProps = {
  blok: {
    image?: SbImageType;
    curve?: CurvesType;
    heading?: string;
    headingLevel?: HeadingType;
    body?: string;
    quote?: string;
    source1?: string;
    source2?: string;
    ctaLabel?: string;
    ctaSrText?: string;
    animation?: AnimationType;
    delay?: number;
  };
};

export const SbPortraitCard = ({
  blok: {
    image: { filename, focus } = {},
    curve,
    heading,
    headingLevel,
    body,
    quote,
    source1,
    source2,
    ctaLabel,
    ctaSrText,
    animation,
    delay,
  },
  blok,
}: SbPortraitCardProps) => (
  <PortraitCard
    {...storyblokEditable(blok)}
    imageSrc={filename}
    imageFocus={focus}
    curve={curve}
    heading={heading}
    headingLevel={headingLevel}
    body={body}
    quote={quote}
    source1={source1}
    source2={source2}
    ctaLabel={ctaLabel}
    ctaSrText={ctaSrText}
    animation={animation}
    delay={delay}
  />
);
