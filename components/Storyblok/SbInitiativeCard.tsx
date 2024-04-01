import { storyblokEditable } from '@storyblok/react/rsc';
import { type AnimationType } from '../Animate';
import { InitiativeCard, type InitiativeCardImageAspectRatio } from '../InitiativeCard';
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
    imageAspectRatio?: InitiativeCardImageAspectRatio;
    isHorizontal?: boolean;
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
    imageAspectRatio,
    tabColor: { value } = {},
    isHorizontal,
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
    imageAspectRatio={imageAspectRatio}
    isHorizontal={isHorizontal}
    tabColor={paletteAccentColors[value]}
    linkText={linkText}
    link={link}
    animation={animation}
    delay={delay}
  />
);
