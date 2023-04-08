import React from 'react';
import { HeroIconProps, IconType } from '../HeroIcon';
import {
  CtaVariantType,
  CtaSizeType,
  IconAnimationType,
  CtaColorType,
} from './Cta.styles';

export interface CtaCommonProps {
  variant?: CtaVariantType;
  color?: CtaColorType;
  size?: CtaSizeType;
  srText?: string;
  icon?: IconType;
  iconPosition?: 'left' | 'right';
  animate?: IconAnimationType;
  iconProps?: HeroIconProps & React.ComponentProps<'svg'>;
  uppercase?: boolean;
  children?: React.ReactNode;
}
