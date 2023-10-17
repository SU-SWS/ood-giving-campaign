import { type StoryblokRichtext } from 'storyblok-rich-text-react-renderer-ts';
import { storyblokEditable } from '@storyblok/react/rsc';
import { RichText } from '../RichText';

type SbCardWysiwygProps = {
  blok: {
    _uid: string;
    content: StoryblokRichtext;
  },
};

export const SbCardWysiwyg = ({
  blok: {
    content,
  },
  blok,
}: SbCardWysiwygProps) => (
  <div {...storyblokEditable(blok)}>
    <RichText type="card" wysiwyg={content} />
  </div>
);
