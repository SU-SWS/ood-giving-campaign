import { dcnb } from 'cnbuilder';
import * as styles from './Cta.styles';

export const getCtaClasses = (variant, color, size, uppercase, className) => {
  let ctaSize = '' as keyof typeof styles.ctaSizes;

  switch (variant) {
    case 'primary':
    case 'secondary':
    case 'ghost':
    case 'ghostLeaf':
    case 'ghostSwipe':
    case 'ghostSwipeDown':
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
    styles.ctaColors[color],
    uppercase ? 'su-uppercase' : '',
    className,
  );

  return ctaClasses;
};
