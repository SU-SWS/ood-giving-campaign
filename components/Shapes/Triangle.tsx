import React from 'react';
import { cnb } from 'cnbuilder';

type TriangleProps = React.SVGProps<SVGSVGElement>;

export const Triangle = ({ className, ...rest }: TriangleProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 60 30"
    aria-hidden
    className={cnb('su-fill-digital-red-light su-w-30 sm:su-w-40 lg:su-w-60 motion-safe:su-animate-bounce', className)}
    {...rest}
  >
    <path d="M60 0H0l29.23 30L60 0z" />
  </svg>
);
