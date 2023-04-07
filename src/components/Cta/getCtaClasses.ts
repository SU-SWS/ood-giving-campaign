import { dcnb } from 'cnbuilder';
import * as styles from './Cta.styles';

export const getCtaClasses = (variant, size, uppercase, className) => {
  let ctaSize = '' as keyof typeof styles.ctaSizes;

  switch (variant) {
    case 'primary':
    case 'secondary':
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

  const levers: { [key: string]: string } = {};
  levers.variant = styles.ctaVariants[variant];
  levers.size = styles.ctaSizes[ctaSize];
  levers.uppercase = uppercase ? 'su-uppercase' : '';
  const ctaClasses = dcnb(styles.cta, levers.size, levers.variant, levers.uppercase, className);

  return ctaClasses;
};
