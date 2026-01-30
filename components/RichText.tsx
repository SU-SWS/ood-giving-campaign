import {
  render,
  type StoryblokRichtext,
  MARK_BOLD,
  MARK_ITALIC,
  MARK_STYLED,
  MARK_LINK,
  MARK_STRIKE,
  MARK_TEXT_STYLE,
  NODE_HEADING,
  NODE_PARAGRAPH,
} from 'storyblok-rich-text-react-renderer';
import { cnb } from 'cnbuilder';
import { CtaLink } from './Cta';
import { SbCta, type SbCtaType } from '@/components/Storyblok/SbCta';
import { SbText, type SbTextProps } from '@/components/Storyblok/SbText';
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

export type RichTextBaseFontSizeType = 'default' | 'card' | 'changemaker' | 'changemakerHorizontal' | 'big';
export type RichTextLinkColorType = 'unset' | 'white' | 'digital-red-xlight';

export type RichTextProps = {
  wysiwyg: StoryblokRichtext;
  /**
   * "default" is for main content, e.g., Story body content
   * "card" is for card typed content where heading sizes are all type-1
   */
  type?: 'default' | 'card';
  baseFontSize?: RichTextBaseFontSizeType;
  textColor?: 'black' | 'white' | 'black-70';
  linkColor?: RichTextLinkColorType;
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
  baseFontSize = 'default',
  textColor = 'black',
  linkColor = 'unset',
  bgColor = 'none',
  textAlign = 'left',
  className,
}: RichTextProps) => {
  const printColor = 'print:text-gc-black';

  const rendered = render(wysiwyg, {
    markResolvers: {
      [MARK_STYLED]: (children, props) => (
        <span className={props.class}>{children}</span>
      ),
      [MARK_BOLD]: (children) => <strong>{children}</strong>,
      [MARK_ITALIC]: (children) => <em>{children}</em>,
      [MARK_STRIKE]: (children) => <del>{children}</del>,
      // This get rid of inline CSS text colors that are being copied and pasted
      [MARK_TEXT_STYLE]: (children, { color }) => <>{children}</>,
      [MARK_LINK]: (children, props) => {
        const {
          href,
          target,
          linktype,
          anchor,
        } = props;
        // Structure the link data so it takes the same shape as sbLink
        const sbLink = {
          linktype,
          cached_url: linktype === 'story' ? href : '',
          url: linktype === 'asset' || 'url' ? href : '',
          email: linktype === 'email' ? href : '',
          anchor,
          // The WYSIWYG link adds a target="_self" by default which is unnecessary
          target: target === '_blank' ? '_blank' : undefined,
        };

        return (
          <CtaLink
            sbLink={sbLink}
            variant="inline"
            color={linkColor}
            className="*:inline"
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
      [NODE_HEADING]: (children, props) => {
        const { level } = props;
        /**
         * All heading sizes are type-1 if using the "card" type WYSIWYG (SbCardWysiwyg)
         * For regular main content WYSIWYG, this gets you type-3 for h2, type-2 for h3, type-1 for h4
         * but h5 and h6 would be type-0 (the minimum font size)
         */
        const headingSize = type === 'default' ? Math.max(5 - level, 0) : 1;

        return (
          <Heading as={`h${level}`} size={headingSize as FontSizeType} leading="tight">
            {children}
          </Heading>
        );
      },
      [NODE_PARAGRAPH]: (children) => (
        <Paragraph variant={baseFontSize === 'default' ? undefined : baseFontSize}>
          {children}
        </Paragraph>
      ),
    },
    blokResolvers: {
      ['sbCta:']: (props) => (
        <SbCta blok={props as SbCtaType['blok']} />
      ),
      ['sbText']: (props) => (
        <SbText blok={props as SbTextProps['blok']} />
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
