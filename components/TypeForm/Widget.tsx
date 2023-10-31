'use client';
import { CSSProperties } from 'react';
import { Widget as TypeFormWidget } from '@typeform/embed-react';
import { dcnb, type ClassValue } from 'cnbuilder';
import { WidgetOptions } from '@typeform/embed/types';

type WidgetProps = Omit<WidgetOptions, 'container'> & {
  id: string;
  className?: ClassValue;
  style?: CSSProperties;
}

const Widget = ({
  id, className, ...rest
}:WidgetProps) => {
  return <TypeFormWidget id={id} className={dcnb(className)} {...rest} />;
};

export { Widget };