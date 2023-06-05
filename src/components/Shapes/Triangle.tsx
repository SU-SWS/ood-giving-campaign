import React from 'react';

export const Triangle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 60 30"
    {...props}
  >
    <path d="M60 0H0l29.23 30L60 0z" />
  </svg>
);
