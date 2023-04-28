import { dcnb } from 'cnbuilder';
import * as types from './Cta.types';
import * as styles from './Cta.styles';

export const getCtaClasses = (
  variant: types.CtaVariantType,
  color: types.CtaColorType,
  size: types.CtaSizeType,
  uppercase: boolean,
  className?: string,
) => {
  const ctaClasses = dcnb(
    styles.cta,
    styles.ctaSizes[size] || styles.ctaSizes[styles.ctaSizeMap[variant]],
    styles.ctaVariants[variant],
    color ? styles.ctaColors[color] : '',
    uppercase ? 'su-uppercase' : '',
    className,
  );

  return ctaClasses;
};
