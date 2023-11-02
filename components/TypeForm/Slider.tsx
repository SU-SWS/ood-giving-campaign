'use client';
import { SliderButton } from '@typeform/embed-react';
import { type SliderOptions } from '@typeform/embed/types';
import { dcnb, type ClassValue } from 'cnbuilder';

export type SliderProps = SliderOptions & {
  id: string;
  children: React.ReactNode;
  className?: ClassValue;
}

const Slider = ({
  id, children, className, ...rest
}:SliderProps) => {
  return (
    <SliderButton id={id} className={dcnb(className)} {...rest}>
      {children}
    </SliderButton>
  );
};

export { Slider };