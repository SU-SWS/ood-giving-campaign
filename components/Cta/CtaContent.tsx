import { cnb } from 'cnbuilder';
import { FlexBox } from '../FlexBox';
import { HeroIcon, IconType } from '../HeroIcon';
import { SrOnlyText } from '../Typography';
import * as styles from './Cta.styles';
import * as types from './Cta.types';

type CtaContentProps = Omit<types.CtaCommonProps, 'size' | 'color'>;

export const CtaContent = ({
  variant,
  icon,
  iconPosition,
  animate = icon?.includes('right') ? 'right' : '',
  iconProps,
  srText,
  children,
}: CtaContentProps) => {
  const heroicon = icon || styles.ctaIconMap[variant as types.CtaIconMapType] as IconType;
  const iconAnimate = animate ? styles.iconAnimation[animate] : '';

  const iconMarginLeft = iconPosition === 'right' && children && heroicon
    ? styles.iconLeftMargin[heroicon as types.CtaIconLeftMarginType] || styles.iconLeftMarginDefault
    : '';
  const iconMarginRight = iconPosition === 'left' && children && heroicon
    ? styles.iconRightMargin[heroicon as types.CtaIconRightMarginType] || styles.iconRightMarginDefault
    : '';
  const iconStyle = styles.iconStyles[variant as types.CtaIconStyleType];
  const { className: iconClasses, ...iProps } = iconProps || {};

  return (
    <FlexBox as="span" alignItems="center">
      {iconPosition === 'right' && children}
      {heroicon && (
        <HeroIcon
          icon={heroicon}
          className={cnb(styles.icon, iconStyle, iconAnimate, iconMarginLeft, iconMarginRight, iconClasses)}
          {...iProps}
        />
      )}
      {iconPosition !== 'right' && children}
      {srText && <SrOnlyText>{srText}</SrOnlyText>}
    </FlexBox>
  );
};
