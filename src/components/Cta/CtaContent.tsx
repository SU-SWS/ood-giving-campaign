import React from 'react';
import { dcnb } from 'cnbuilder';
import { FlexBox } from '../FlexBox';
import { HeroIcon, IconType } from '../HeroIcon';
import { SrOnlyText } from '../Typography';
import * as styles from './Cta.styles';

export const CtaContent = (props) => {
  const {
    variant,
    icon,
    iconPosition,
    animate = icon === 'triangle-right' ? 'right' : '',
    iconProps,
    srText,
    children,
  } = props;

  let heroicon = '' as IconType;

  switch (variant) {
    case 'dismiss':
      heroicon = icon || 'dismiss';
      break;
    case 'close':
    case 'close-x':
      heroicon = icon || 'close';
      break;
    case 'back':
      heroicon = icon || 'back';
      break;
    case 'back-external':
      heroicon = icon || 'back';
      break;
    case 'user':
      heroicon = icon || 'arrow-right';
      break;
    case 'showmore':
    case 'showmore-button':
    case 'showmore-panel':
      heroicon = icon || 'chevron-down';
      break;
    default:
      heroicon = icon;
  }

  const iconAnimate = styles.iconAnimation[animate];
  const iconMarginLeft = iconPosition === 'right' && children ? styles.iconLeftMargin[heroicon] || styles.iconLeftMargin.default : '';
  const iconMarginRight = iconPosition === 'left' && children ? styles.iconRightMargin[heroicon] || styles.iconRightMargin.default : '';
  const iconStyle = styles.iconStyles[variant];
  const { className: iconClasses, ...iProps } = iconProps || {};

  return (
    <FlexBox alignItems="center">
      {iconPosition === 'right' && children}
      {heroicon && (
        <HeroIcon
          icon={heroicon}
          className={dcnb(styles.icon, iconStyle, iconAnimate, iconMarginLeft, iconMarginRight, iconClasses)}
          {...iProps}
        />
      )}
      {iconPosition !== 'right' && children}
      {srText && <SrOnlyText>{srText}</SrOnlyText>}
    </FlexBox>
  );
};
