import React, { ReactNode } from 'react';
import { dcnb } from 'cnbuilder';
import { HeroIcon, HeroIconProps, IconType } from '../HeroIcon';
import * as styles from './typography.styles';
import * as types from './typography.types';

export type TypographyProps = {
  as?: types.TextType;
  font?: types.FontFamilyType;
  size?: types.FontSizeType;
  weight?: types.FontWeightType;
  align?: types.TextAlignType;
  color?: types.TextColorType;
  variant?: types.TextVariantType;
  leading?: types.FontLeadingType;
  /**
   * If true, use default tracking for the font - for Druk and Druk Wide
   */
  useDefaultTracking?: boolean;
  italic?: boolean;
  srOnly?: boolean;
  uppercase?: boolean;
  icon?: IconType;
  iconProps?: Omit<HeroIconProps, 'icon' | 'noBaseStyle'>;
  className?: string;
  children?: ReactNode;
};

export type TextProps = TypographyProps & React.HTMLAttributes<HTMLElement>;

export const Text = ({
  as: AsComponent = 'div',
  font = 'sans',
  size,
  weight,
  align,
  color = 'default',
  variant,
  leading,
  useDefaultTracking = font === 'druk-wide',
  italic,
  srOnly,
  uppercase = font === 'druk',
  icon,
  iconProps,
  className,
  children,
  ...rest
}: TextProps) => {
  const { className: iconClasses, ...iProps } = iconProps || {};

  return (
    <AsComponent
      {...rest}
      className={
        dcnb(
          font ? styles.fontFamilies[font] : '',
          size ? styles.fontSizes[size] : '',
          weight ? styles.fontWeights[weight] : '',
          align ? styles.textAligns[align] : '',
          color ? styles.textColors[color] : '',
          variant ? styles.textVariants[variant] : '',
          leading ? styles.fontLeadings[leading] : '',
          italic ? 'su-italic' : '',
          srOnly ? 'su-sr-only' : '',
          uppercase ? 'su-uppercase' : '',
          useDefaultTracking ? 'su-tracking-normal' : '',
          font === 'druk' ? 'su-tracking-normal sm:su-tracking-wide' : '',
          className,
        )
      }
    >
      {icon && (
        <HeroIcon
          icon={icon}
          noBaseStyle
          className={dcnb(styles.iconStyle, iconClasses)}
          {...iProps}
        />
      )}
      {children}
    </AsComponent>
  );
};
