import React from 'react';
import ContentLoader, { IContentLoaderProps } from 'react-content-loader';

const Card = (props: React.JSX.IntrinsicAttributes & IContentLoaderProps) => (
  <ContentLoader height={300} width={200} {...props}>
    <rect x="0" y="0" rx="8" ry="8" width="200" height="200" />
    <rect x="0" y="230" rx="0" ry="0" width="200" height="18" />
    <rect x="0" y="255" rx="0" ry="0" width="200" height="20" />
  </ContentLoader>
);

export default Card;