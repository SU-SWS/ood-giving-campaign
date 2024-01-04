'use client';
import { SliderButton } from '@typeform/embed-react';
import { type SliderOptions } from '@typeform/embed';
import { cnb, type ClassValue } from 'cnbuilder';

export type SliderProps = SliderOptions & {
  id: string;
  children: React.ReactNode;
  className?: ClassValue;
}

const Slider = ({
  id, children, className, ...rest
}:SliderProps) => {
  return (
    <SliderButton noHeading keepSession id={id} className={cnb(className)} {...rest}>
      {children}
    </SliderButton>
  );
};

export { Slider };