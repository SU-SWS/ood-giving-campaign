import { type StoryblokRichtext } from 'storyblok-rich-text-react-renderer-ts';
import { storyblokEditable } from '@storyblok/react/rsc';
import { RichText } from '../RichText';
import { type TextAlignType } from '../Typography';

type SbCardWysiwygProps = {
  blok: {
    _uid: string;
    content: StoryblokRichtext;
    isLightText?: boolean;
    textAlign?: TextAlignType;
  },
  isDarkTheme?: boolean;
};

export const SbCardWysiwyg = ({
  blok: {
    content,
    isLightText,
    textAlign,
  },
  blok,
  isDarkTheme,
}: SbCardWysiwygProps) => (
  <div {...storyblokEditable(blok)}>
    <RichText type="card" wysiwyg={content} isLightText={isDarkTheme || isLightText} textAlign={textAlign} />
  </div>
);
