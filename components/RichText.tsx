import { render, type StoryblokRichtext } from 'storyblok-rich-text-react-renderer-ts';
import { cnb } from 'cnbuilder';
import { CtaLink } from './Cta';
import { SbCta } from './Storyblok/SbCta';
import { SbTriangle } from './Storyblok/SbTriangle';
import {
  Heading,
  type FontSizeType,
  Paragraph,
  textAligns,
  type TextAlignType,
} from './Typography';

/**
 * TW classes used in Richtext WYSIWYG to pre-generate
 * -top-04em (used in BlurryPoster)
 */

export type RichTextProps = {
  wysiwyg: StoryblokRichtext;
  isLightText?: boolean;
  textAlign?: TextAlignType;
  className?: string;
};

export const RichText = ({
  wysiwyg,
  isLightText,
  textAlign = 'left',
  className,
}: RichTextProps) => {
  const textColor = isLightText ? 'text-white print:text-gc-black' : 'text-gc-black';

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
            className="children:inline"
            // Custom link attributes are not supported by the rich text renderer currently
            // Adding rel="noopener" for all eternal links for security reasons
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
        // This gets you type-1 for h6, type-2 for h5, type-3 for h4 and so on
        const headingSize = 7 - level;

        return (
          <Heading as={`h${level}`} size={headingSize as FontSizeType} leading="tight">
            {children}
          </Heading>
        );
      },
    },
    blokResolvers: {
      sbCta: (props) => (
        <SbCta blok={props} />
      ),
      sbTriangle: (props) => (
        <SbTriangle blok={props} />
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
      className={cnb(
        'wysiwyg',
        textColor,
        textAligns[textAlign],
        className,
      )}
    >
      {rendered}
    </div>
  );
};
