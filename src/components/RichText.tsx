/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {
  render,
  MARK_STYLED,
  MARK_BOLD,
  MARK_ITALIC,
  NODE_HEADING,
} from 'storyblok-rich-text-react-renderer';
import { dcnb } from 'cnbuilder';
import { Heading, Paragraph } from './Typography';

export type RichTextProps = {
  wysiwyg: React.ReactNode;
  isDark?: boolean;
  className?: string;
  linkColor?: string;
};

export const RichText = ({
  wysiwyg,
  isDark,
  className,
}: RichTextProps) => {
  let textColor = 'su-text-current';

  if (isDark) {
    textColor = 'su-text-black-20 print:su-text-black';
  }
  const rendered = render(wysiwyg, {
    markResolvers: {
      [MARK_STYLED]: (children, props) => React.createElement(
        'span',
        {
          // eslint-disable-next-line react/destructuring-assignment
          className: props?.class || '',
        },
        children,
      ),
      [MARK_BOLD]: (children) => <strong>{children}</strong>,
      [MARK_ITALIC]: (children) => <em>{children}</em>,
    },
    nodeResolvers: {
      [NODE_HEADING]: (children, props) => {
        const { level } = props;
        if (level > 1 && level < 6) {
          return (
            <Heading as={`h${level}`} font="serif">
              {children}
            </Heading>
          );
        }

        if (level === 6) {
          return (
            <Heading as="h6" font="serif" size="base">
              {children}
            </Heading>
          );
        }

        return null;
      },
    },
    blokResolvers: {
      // TODO: Add components
    },
    defaultBlokResolver: (name) => (
      <Paragraph weight="bold">
        Missing blok resolver for blok type {name}.
      </Paragraph>
    ),
    defaultStringResolver: (str) => <div>{str}</div>,
  });

  return (
    <div className={dcnb('su-wysiwyg', textColor, className)}>{rendered}</div>
  );
};
