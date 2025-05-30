import { type HeroIconProps, type IconType } from '@/components/HeroIcon';
import { type MarginType } from '@/utilities/datasource';
import * as styles from './Cta.styles';

export type CtaVariantType = keyof typeof styles.ctaVariants;
export type CtaColorType = keyof typeof styles.ctaColors;
export type CtaCurveType = keyof typeof styles.ctaCurves;
export type IconColorType = keyof typeof styles.iconColors;
export type IconAnimationType = keyof typeof styles.iconAnimation | '';

export type CtaSizeObjectType = Partial<{
  [Key in CtaVariantType | 'default' | 'large' | 'small']: string;
}>;
export type CtaSizeType = keyof CtaSizeObjectType;

export type CtaSizeMapType = {
  [Key in CtaVariantType]: keyof typeof styles.ctaSizes;
}

export type CtaIconStyleType = Partial<{
  [Key in CtaVariantType]: string;
}>;

export type CtaIconMapType = Partial<{
  [Key in CtaVariantType]: IconType;
}>;

export type CtaIconRightMarginType = Partial<{
  [Key in IconType]: string;
}>;

export type CtaIconLeftMarginType = Partial<{
  [Key in IconType]: string;
}>;

export interface CtaCommonProps {
  variant?: CtaVariantType;
  color?: CtaColorType;
  size?: CtaSizeType;
  curve?: CtaCurveType;
  srText?: string;
  icon?: IconType;
  iconPosition?: 'left' | 'right';
  animate?: IconAnimationType;
  iconProps?: Omit<HeroIconProps, 'icon'> & React.ComponentProps<'svg'>;
  mt?: MarginType;
  mb?: MarginType;
  children?: React.ReactNode;
}
