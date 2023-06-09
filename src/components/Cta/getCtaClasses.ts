import { cnb } from 'cnbuilder';
import * as types from './Cta.types';
import * as styles from './Cta.styles';

export const getCtaClasses = (
  variant: types.CtaVariantType,
  size: types.CtaSizeType,
  curve?: types.CtaCurveType,
  color?: types.CtaColorType,
  className?: string,
) => {
  const ctaClasses = cnb(
    styles.cta,
    styles.ctaSizes[size] || styles.ctaSizes[styles.ctaSizeMap[variant]],
    styles.ctaVariants[variant],
    curve ? styles.ctaCurves[curve] : '',
    color ? styles.ctaColors[color] : '',
    className,
  );

  return ctaClasses;
};
