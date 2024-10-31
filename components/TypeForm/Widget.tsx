'use client';
import { Widget as TypeFormWidget } from '@typeform/embed-react';
import { cnb, type ClassValue } from 'cnbuilder';
import { type WidgetOptions } from '@typeform/embed';

export type WidgetProps = Omit<WidgetOptions, 'container'> & {
  id: string;
  className?: ClassValue;
}

const Widget = ({
  id, className, ...rest
}:WidgetProps) => {
  return <TypeFormWidget noHeading keepSession id={id} className={cnb(className)} {...rest} />;
};

export { Widget };
