/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { render, StoryblokRichtext } from 'storyblok-rich-text-react-renderer-ts';
import { dcnb } from 'cnbuilder';
import { SbCta } from './Storyblok/SbCta';
import { Heading, FontSizeType, Paragraph } from './Typography';

export type RichTextProps = {
  wysiwyg: StoryblokRichtext;
  isLightText?: boolean;
  className?: string;
  linkColor?: string;
};

export const RichText = ({
  wysiwyg,
  isLightText,
  className,
}: RichTextProps) => {
  let textColor = 'su-text-current';

  if (isLightText) {
    textColor = 'su-text-white print:su-text-black';
  }
  const rendered = render(wysiwyg, {
    markResolvers: {
      styled: (children, props) => React.createElement(
        'span',
        {
          // eslint-disable-next-line react/destructuring-assignment
          className: props?.class || '',
        },
        children,
      ),
      bold: (children) => <strong>{children}</strong>,
      italic: (children) => <em>{children}</em>,
    },
    nodeResolvers: {
      heading: (children, props) => {
        const { level } = props;
        const headingSize = 7 - level;

        return (
          <Heading as={`h${level}`} size={headingSize as FontSizeType}>
            {children}
          </Heading>
        );
      },
    },
    blokResolvers: {
      sbCta: (props) => (
        <SbCta blok={props} />
      ),
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
