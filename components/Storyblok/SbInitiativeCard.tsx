import { storyblokEditable } from '@storyblok/react/rsc';
import { type AnimationType } from '../Animate';
import { InitiativeCard } from '../InitiativeCard';
import { type HeadingType } from '../Typography';
import { type SbImageType, type SbLinkType } from './Storyblok.types';
import { paletteAccentColors, type PaletteAccentHexColorType } from '@/utilities/colorPalettePlugin';

type SbInitiativeCardProps = {
  blok: {
    _uid: string;
    heading?: string;
    headingLevel?: HeadingType;
    body?: string;
    image?: SbImageType;
    tabColor?: {
      value?: PaletteAccentHexColorType;
    }
    linkText?: string;
    link?: SbLinkType;
    animation?: AnimationType;
    delay?: number;
  };
};

export const SbInitiativeCard = ({
  blok: {
    heading,
    headingLevel,
    body,
    image: { filename, focus } = {},
    tabColor: { value } = {},
    linkText,
    link,
    animation,
    delay,
  },
  blok,
}: SbInitiativeCardProps) => (
  <InitiativeCard
    {...storyblokEditable(blok)}
    heading={heading}
    headingLevel={headingLevel}
    body={body}
    imageSrc={filename}
    imageFocus={focus}
    tabColor={paletteAccentColors[value]}
    linkText={linkText}
    link={link}
    animation={animation}
    delay={delay}
  />
);
