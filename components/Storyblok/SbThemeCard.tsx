import { storyblokEditable } from '@storyblok/react/rsc';
import { ThemeCard } from '@/components/ThemeCard';
import { type AnimationType } from '@/components/Animate';
import { type HeadingType } from '@/components/Typography';
import { type SbImageType, type SbLinkType } from './Storyblok.types';

export type SbThemeCardProps = {
  blok: {
    _uid: string;
    heading?: string;
    headingLevel?: HeadingType;
    body?: string;
    image?: SbImageType;
    link?: SbLinkType;
    ctaLabel?: string;
    ctaSrText?: string;
    animation?: AnimationType;
    delay?: number;
  };
};

export const SbThemeCard = ({
  blok: {
    heading,
    headingLevel,
    body,
    image: { filename, focus } = {},
    ctaLabel,
    ctaSrText,
    link,
    animation,
    delay,
  },
  blok,
}: SbThemeCardProps) => (
  <ThemeCard
    {...storyblokEditable(blok)}
    heading={heading}
    headingLevel={headingLevel}
    body={body}
    imageSrc={filename}
    imageFocus={focus}
    ctaLabel={ctaLabel}
    ctaSrText={ctaSrText}
    link={link}
    animation={animation}
    delay={delay}
  />
);
