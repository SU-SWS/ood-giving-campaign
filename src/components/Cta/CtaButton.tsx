import React from 'react';
import { CtaContent } from './CtaContent';
import { getCtaClasses } from './getCtaClasses';
import { CtaCommonProps } from './Cta.types';

export type CtaButtonProps = React.ComponentPropsWithoutRef<'button'> & CtaCommonProps;

export const CtaButton = React.forwardRef<HTMLButtonElement, CtaButtonProps>(
  (props, ref) => {
    const {
      type = 'button',
      variant = 'solid',
      color = 'white',
      iconPosition = 'right',
      icon,
      size,
      curve,
      animate,
      iconProps,
      srText,
      children,
      className,
      ...rest
    } = props;

    const ctaClasses = getCtaClasses(variant, size, curve, color, className);

    return (
      <button
        // eslint-disable-next-line react/button-has-type
        type={type}
        className={ctaClasses}
        ref={ref as React.ForwardedRef<HTMLButtonElement>}
        {...rest}
      >
        <CtaContent
          variant={variant}
          icon={icon}
          iconPosition={iconPosition}
          animate={animate}
          iconProps={iconProps}
          srText={srText}
        >
          {children}
        </CtaContent>
      </button>
    );
  },
);
