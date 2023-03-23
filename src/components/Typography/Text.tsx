import React, { ReactNode } from 'react';
import { dcnb } from 'cnbuilder';
import { HeroIcon, HeroIconProps, IconType } from '../HeroIcon/HeroIcon';
import * as styles from './typography.styles';
import * as types from './typography.types';

export type TypographyProps = {
  as?: types.TextType;
  font?: types.FontStackType;
  size?: types.FontSizeType;
  weight?: types.FontWeightType;
  align?: types.TextAlignType;
  color?: types.TextColorType;
  variant?: types.TextVariantType;
  leading?: types.FontLeadingType;
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
  italic,
  srOnly,
  uppercase,
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
          styles.fontStacks[font],
          styles.fontSizes[size],
          styles.fontWeights[weight],
          styles.textAligns[align],
          styles.textColors[color],
          styles.textVariants[variant],
          styles.fontLeadings[leading],
          italic ? 'su-italic' : '',
          srOnly ? 'su-sr-only' : '',
          uppercase ? 'su-uppercase' : '',
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
