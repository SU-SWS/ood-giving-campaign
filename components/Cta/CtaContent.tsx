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
  const heroicon: IconType | undefined = icon || styles.ctaIconMap[variant] || '';
  const iconAnimate = styles.iconAnimation[animate];
  const iconMarginLeft = iconPosition === 'right' && children ? styles.iconLeftMargin[heroicon] || styles.iconLeftMargin.default : '';
  const iconMarginRight = iconPosition === 'left' && children ? styles.iconRightMargin[heroicon] || styles.iconRightMargin.default : '';
  const iconStyle = styles.iconStyles[variant || ''];
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
