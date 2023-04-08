import { dcnb } from 'cnbuilder';
import * as styles from './Cta.styles';

export const getCtaClasses = (
  variant: styles.CtaVariantType,
  color: styles.CtaColorType,
  size: styles.CtaSizeType,
  uppercase: boolean,
  className?: string,
) => {
  const ctaClasses = dcnb(
    styles.cta,
    styles.ctaSizes[size] || styles.ctaSizes[styles.ctaSizeMap[variant]],
    styles.ctaVariants[variant],
    styles.ctaColors[color],
    uppercase ? 'su-uppercase' : '',
    className,
  );

  return ctaClasses;
};
