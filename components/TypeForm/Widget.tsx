'use client';
import { Widget as TypeFormWidget } from '@typeform/embed-react';
import { dcnb, type ClassValue } from 'cnbuilder';
import { type WidgetOptions } from '@typeform/embed/types';

type WidgetProps = Omit<WidgetOptions, 'container'> & {
  id: string;
  className?: ClassValue;
}

const Widget = ({
  id, className, ...rest
}:WidgetProps) => {
  return <TypeFormWidget id={id} className={dcnb(className)} {...rest} />;
};

export { Widget };