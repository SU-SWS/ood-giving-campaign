import React, { ReactNode } from 'react';
import { dcnb } from 'cnbuilder';
import { HeroIcon, HeroIconProps, IconType } from '../HeroIcon';
import * as styles from './typography.styles';
import * as types from './typography.types';

export type TypographyProps = {
  as?: types.PolymorphicType;
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

// IntrinsicProps provides a union of all valid pairings of props and as.
export type IntrinsicProps = {
  [K in keyof JSX.IntrinsicElements]: JSX.IntrinsicElements[K] & { as?: K; }
}[keyof JSX.IntrinsicElements];

export type TextProps = TypographyProps & IntrinsicProps;

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
      {!isLinkedin && children}
      {isLinkedin && (
        <span className={linkedinWrapperStyle}>
          { children }
          <LinkedInIcon srText={linkedinSrText} className={linkedinIconStyle} />
        </span>
      )}
    </AsComponent>
  );
};
