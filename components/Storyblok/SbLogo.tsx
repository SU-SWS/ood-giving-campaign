import { storyblokEditable } from '@storyblok/react/rsc';
import { Logo, LogoVariantType, LogoColorType } from '../Logo';

type SbLogoProps = {
  blok: {
    _uid: string;
    type?: LogoVariantType;
    color?: LogoColorType;
  };
};

export const SbLogo = ({
  blok: {
    type,
    color,
  },
  blok,
}: SbLogoProps) => (
  <Logo {...storyblokEditable(blok)} variant={type} color={color} />
);
