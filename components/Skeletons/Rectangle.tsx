import React from 'react';
import ContentLoader, { IContentLoaderProps } from 'react-content-loader';

const Rectangle = ({
width = '100%', height = 600, speed = 2, backgroundColor = '#f3f3f3', foregroundColor = '#ecebeb', ...props
}: React.JSX.IntrinsicAttributes & IContentLoaderProps) => (
  <ContentLoader
    speed={speed}
    width={width}
    height={height}
    backgroundColor={backgroundColor}
    foregroundColor={foregroundColor}
    {...props}
  >
    <rect x="0" y="0" rx="2" ry="2" width={width} height={height} />
  </ContentLoader>
);

export default Rectangle;