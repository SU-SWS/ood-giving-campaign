import { type StoryblokRichtext } from 'storyblok-rich-text-react-renderer-ts';
import { storyblokEditable } from '@storyblok/react/rsc';
import { RichText, type RichTextLinkColorType } from '../RichText';

/**
 * This is used only as a sub-component currently
 * Used in: SbSidebarCard
 */

type SbCardWysiwygProps = {
  blok: {
    _uid: string;
    content: StoryblokRichtext;
    isLightText?: boolean;
  },
  baseFontSize?: 'default' | 'changemaker' | 'changemakerHorizontal' | 'card';
  linkColor?: RichTextLinkColorType;
};

export const SbCardWysiwyg = ({
  blok: {
    content,
    isLightText,
  },
  blok,
  baseFontSize,
  linkColor,
}: SbCardWysiwygProps) => (
  <div {...storyblokEditable(blok)}>
    <RichText
      baseFontSize={baseFontSize}
      type="card"
      wysiwyg={content}
      textColor={isLightText ? 'white' : 'black'}
      linkColor={linkColor || isLightText ? 'digital-red-xlight' : 'unset'}
    />
  </div>
);
