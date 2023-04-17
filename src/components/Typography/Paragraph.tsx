import React from 'react';
import { dcnb } from 'cnbuilder';
import { Text, TypographyProps } from './Text';

type ParagraphProps = Omit<TypographyProps, 'className'> & React.HTMLAttributes<HTMLParagraphElement> & {
  noMargin?: boolean; // If true, remove the bottom margin from base styles
};

// Convenience component for paragraphs
export const Paragraph = ({ noMargin, className, ...rest }: ParagraphProps) => (
  <Text {...rest} as="p" className={dcnb(noMargin ? 'su-mb-0' : '', className)} />
);
