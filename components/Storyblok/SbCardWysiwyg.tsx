import { type StoryblokRichtext } from 'storyblok-rich-text-react-renderer-ts';
import { storyblokEditable } from '@storyblok/react/rsc';
import { RichText } from '../RichText';

type SbCardWysiwygProps = {
  blok: {
    _uid: string;
    content: StoryblokRichtext;
    isLightText?: boolean;
  },
};

export const SbCardWysiwyg = ({
  blok: {
    content,
    isLightText,
  },
  blok,
}: SbCardWysiwygProps) => (
  <div {...storyblokEditable(blok)}>
    <RichText type="card" wysiwyg={content} textColor={isLightText ? 'white' : 'black'} />
  </div>
);
