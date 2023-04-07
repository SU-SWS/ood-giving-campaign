import { dcnb } from 'cnbuilder';
import * as styles from './Cta.styles';

export const getCtaClasses = (variant, size, uppercase, className) => {
  let ctaSize = '' as keyof typeof styles.ctaSizes;

  switch (variant) {
    case 'primary':
    case 'secondary':
      ctaSize = size || 'default';
      break;
    case 'footer':
      ctaSize = size || 'footer';
      break;
    case 'masthead':
      ctaSize = size || 'masthead';
      break;
    case 'link':
      ctaSize = size || 'unset';
      break;
    case 'dismiss':
      ctaSize = size || 'dismiss';
      break;
    case 'close':
      ctaSize = size || 'close';
      break;
    case 'back':
      ctaSize = size || 'back';
      break;
    case 'chip':
      ctaSize = size || 'chip';
      break;
    default:
      ctaSize = size;
  }

  const ctaClasses = dcnb(
    styles.cta,
    styles.ctaSizes[ctaSize],
    styles.ctaVariants[variant],
    uppercase ? 'su-uppercase' : '',
    className,
  );

  return ctaClasses;
};
