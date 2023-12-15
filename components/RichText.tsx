import { render, type StoryblokRichtext } from 'storyblok-rich-text-react-renderer-ts';
import { cnb } from 'cnbuilder';
import { CtaLink } from './Cta';
import { SbCta } from './Storyblok/SbCta';
import { SbTriangle } from './Storyblok/SbTriangle';
import { SbText } from './Storyblok/SbText';
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
  // "default" is for main content, e.g., Story body content
  type?: 'default' | 'card';
  textColor?: 'black' | 'white' | 'black-70';
  bgColor?: 'black' | 'black-50' | 'black-60' | 'black-70' | 'white' | 'none';
  textAlign?: TextAlignType;
  className?: string;
};

const textClasses = {
  black: 'text-gc-black',
  white: 'text-white',
  'black-70': 'text-black-70',
};

const bgClasses = {
  black: 'bg-gc-black',
  'black-50': 'bg-black-true/50',
  'black-60': 'bg-black-true/60',
  'black-70': 'bg-black-true/70',
  white: 'bg-white',
  none: '',
};

export const RichText = ({
  wysiwyg,
  type,
  textColor = 'black',
  bgColor = 'none',
  textAlign = 'left',
  className,
}: RichTextProps) => {
  const printColor = 'print:text-gc-black';

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
            variant={textColor === 'white' ? 'inlineDark' : 'inline'}
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
        // All heading sizes are type-1 if using the "card" type WYSIWYG
        // For regular main content WYSIWYG, this gets you type-4 for h2, type-3 for h3, etc.
        const headingSize = type === 'default' ? Math.max(5 - level, 0) : 1;

        return (
          <Heading as={`h${level}`} size={headingSize as FontSizeType} leading="tight">
            {children}
          </Heading>
        );
      },
      paragraph: (children) => (
        <Paragraph variant={type === 'card' ? 'card' : 'none'}>
          {children}
        </Paragraph>
      ),
    },
    blokResolvers: {
      sbCta: (props) => (
        <SbCta blok={props} />
      ),
      sbText: (props) => (
        <SbText blok={props} />
      ),
      sbTriangle: (props) => (
        <SbTriangle blok={props} />
      ),
    },
    defaultBlokResolver: (name) => (
      <Paragraph weight="bold" variant={type === 'card' ? 'card' : 'none'}>
        Missing blok resolver for blok type {name}.
      </Paragraph>
    ),
    defaultStringResolver: (str) => <div>{str}</div>,
  });

  return (
    <div
      className={cnb(
        'wysiwyg',
        textClasses[textColor],
        bgClasses[bgColor],
        !!bgColor && bgColor !== 'none' ? 'rs-p-2 backdrop-blur-sm' : '',
        printColor,
        textAligns[textAlign],
        className,
      )}
    >
      {rendered}
    </div>
  );
};
