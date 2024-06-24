import { storyblokEditable } from '@storyblok/react/rsc';
import {
  CtaLink,
  iconColors,
  type CtaColorType,
  type CtaVariantType,
  type CtaCurveType,
  type IconAnimationType,
  type IconColorType,
} from '@/components/Cta';
import { type IconType } from '@/components/HeroIcon';
import { type SbLinkType } from '@/components/Storyblok/Storyblok.types';
import { type MarginType } from '@/utilities/datasource';

type SbCtaType = {
  blok: {
    _uid: string;
    link: SbLinkType;
    label: string;
    srText?: string;
    variant?: string;
    curve?: CtaCurveType;
    isLarge?: boolean;
    icon?: IconType;
    iconColor?: IconColorType;
    animation?: IconAnimationType;
    spacingTop?: MarginType;
    spacingBottom?: MarginType;
  };
};

export const SbCta = ({
  blok: {
    link,
    label,
    srText,
    variant,
    curve,
    isLarge,
    icon,
    iconColor,
    animation,
    spacingTop,
    spacingBottom,
  },
  blok,
}: SbCtaType) => {
  // Split out the color from the variant using the white space
  const ctaVariant = variant?.split(' ')[0] as CtaVariantType;
  const color = variant?.split(' ')[1] as CtaColorType;

  return (
    <CtaLink
      {...storyblokEditable(blok)}
      sbLink={link}
      variant={ctaVariant}
      curve={`${curve}${isLarge && curve ? '-large' : ''}` as CtaCurveType}
      size={isLarge ? 'large' : 'default'}
      color={color}
      srText={srText}
      icon={icon}
      iconProps={{ className: iconColors[iconColor] }}
      animate={animation}
      mt={spacingTop}
      mb={spacingBottom}
    >
      {label}
    </CtaLink>
  );
};
