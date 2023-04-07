import React from 'react';
import { ClassValue } from 'cnbuilder';
import { HeroIconProps, IconType } from '../HeroIcon';
import { CtaVariantType, CtaSizeType, IconAnimationType } from './Cta.styles';
import { CtaExternalLinkProps } from './CtaExternalLink';
import { CtaButtonProps } from './CtaButton';
import { CtaGatsbyLinkProps } from './CtaGatsbyLink';

export interface CtaCommonProps {
  variant?: CtaVariantType;
  size?: CtaSizeType;
  srText?: string;
  icon?: IconType;
  iconPosition?: 'left' | 'right';
  animate?: IconAnimationType;
  iconProps?: HeroIconProps & React.ComponentProps<'svg'>;
  uppercase?: boolean;
  disabled?: boolean;
  className?: ClassValue;
  children?: React.ReactNode;
}

export type CtaProps = CtaButtonProps | CtaExternalLinkProps | CtaGatsbyLinkProps;

// Type guards to branch our props union
// CtaAnchor is for external/mailto/anchor links and CtaLink is for internal links (uses Next Link)
export const isAnchor = (props: CtaProps): props is CtaExternalLinkProps => !!props.href && (props.href.startsWith('http') || props.href.startsWith('mailto') || props.href.startsWith('#'));
export const isLink = (props: CtaProps): props is CtaGatsbyLinkProps => !!props.href && !(props.href.startsWith('http') && props.href.startsWith('mailto') && props.href.startsWith('#'));
