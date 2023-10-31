'use client';
import { ReactHTML, HTMLAttributes, CSSProperties } from 'react';
import { SliderButton } from '@typeform/embed-react';
import { SliderOptions } from '@typeform/embed/types';
import { dcnb, type ClassValue } from 'cnbuilder';

type SliderButtonProps = SliderOptions & {
  id: string;
  children: React.ReactNode;
  className?: ClassValue;
}

const Slider = ({
  id, children, className, ...rest
}:SliderButtonProps) => {
  return (
    <SliderButton id={id} className={dcnb(className)} {...rest}>
      {children}
    </SliderButton>
  );
};

export { Slider };