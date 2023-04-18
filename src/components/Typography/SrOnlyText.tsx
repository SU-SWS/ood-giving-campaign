import React from 'react';
import { Text, TextProps } from './Text';

export const SrOnlyText = ({ children = '(link is external)', ...props }: TextProps) => (
  <Text {...props} srOnly className="su-white-space-pre">
    {` ${children}`}
  </Text>
);
