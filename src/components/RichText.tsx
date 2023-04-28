/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { render, StoryblokRichtext } from 'storyblok-rich-text-react-renderer-ts';
import { dcnb } from 'cnbuilder';
import { CtaLink } from './Cta';
import { SbCta } from './Storyblok/SbCta';
import {
  Heading,
  FontSizeType,
  Paragraph,
  textAligns,
  TextAlignType,
} from './Typography';

export type RichTextProps = {
  wysiwyg: StoryblokRichtext;
  isLightText?: boolean;
  textAlign?: TextAlignType;
  className?: string;
  linkColor?: string;
};

export const RichText = ({
  wysiwyg,
  isLightText,
  textAlign,
  className,
}: RichTextProps) => {
  const textColor = isLightText ? 'su-text-white print:su-text-black' : 'su-text-black';

  const rendered = render(wysiwyg, {
    markResolvers: {
      styled: (children, props) => (
        <span className={props.class}>{children}</span>
      ),
      bold: (children) => <strong>{children}</strong>,
      italic: (children) => <em>{children}</em>,
      link: (children, props) => {
        const {
          href,
          target,
          linktype,
          anchor,
        } = props;
        // Structure the link data so it takes the same shape as sbLink
        const sbLink = {
          linktype,
          cached_url: linktype !== 'email' ? href : '',
          email: linktype === 'email' ? href : '',
          anchor,
          // The WYSIWYG link adds a target="_self" by default which is unnecessary
          target: target === '_blank' ? '_blank' : undefined,
        };

        return (
          <CtaLink
            sbLink={sbLink}
            variant={isLightText ? 'inlineDark' : 'inline'}
            className="children:su-inline"
            rel={linktype === 'url' ? 'noopener' : undefined}
          >
            {children}
          </CtaLink>
        );
      },
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
    <div
      className={dcnb(
        'su-wysiwyg',
        textColor,
        textAligns[textAlign] || '',
        className,
      )}
    >
      {rendered}
    </div>
  );
};
