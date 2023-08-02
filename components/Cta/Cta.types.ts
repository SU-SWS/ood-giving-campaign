import { HeroIconProps, IconType } from '../HeroIcon';
import * as styles from './Cta.styles';

export type CtaVariantType = keyof typeof styles.ctaVariants | '';
export type CtaColorType = keyof typeof styles.ctaColors | '';
export type CtaSizeType = keyof typeof styles.ctaSizes | '';
export type CtaCurveType = keyof typeof styles.ctaCurves | '';
export type IconAnimationType = keyof typeof styles.iconAnimation | '';

export type CtaIconStyleType = keyof typeof styles.iconStyles;
export type CtaIconMapType = keyof typeof styles.ctaIconMap;
export type CtaIconRightMarginType = keyof typeof styles.iconRightMargin;
export type CtaIconLeftMarginType = keyof typeof styles.iconLeftMargin;

export interface CtaCommonProps {
  variant?: CtaVariantType;
  color?: CtaColorType;
  size?: CtaSizeType;
  curve?: CtaCurveType;
  srText?: string;
  icon?: IconType;
  iconPosition?: 'left' | 'right';
  animate?: IconAnimationType;
  iconProps?: HeroIconProps & React.ComponentProps<'svg'>;
  children?: React.ReactNode;
}
